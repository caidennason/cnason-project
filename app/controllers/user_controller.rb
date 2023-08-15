class UserController < ApplicationController

    before_action :authorized, except: [:create]

    def index
        users = User.all 
        render json: users
    end

    def create
        if params[:password] == params[:password_confirmation]
            user = User.create(user_params)
            if user.valid? 
                session[:user_id] = user.id 
                render json: user, status: :created
            else
                render json: {error: "ERROR: Make sure all forms are completed!"}, status: :unprocessable_entity
            end
        else
            render json: {error: "Passwords must match."}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user 
    end

    def delete
        u = User.find_by(id: session[:user_id])
        user = User.find_by(id: params[:id])
        if user.id == u.id 
            user.destroy
            render json: {message: "User has been deleted."}, status: :ok 
        else
            render json: {error: "ERROR: You can only delete your own profile."}, status: :not_found
        end
    end

    private
    def user_params
        params.permit(:name, :photo, :location, :bio, :photo, :password, :password_confirmation)
    end

end
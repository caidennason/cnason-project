class SessionController < ApplicationController

    before_action :authorized, except: [:create]

    def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created 
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized 
        end
    end

    def show
        render json: user 
    end

    def destroy
        session.delete :user_id 
        head :no_content 
    end

end
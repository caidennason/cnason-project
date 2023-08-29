class EstablishmentController < ApplicationController

    before_action :authorized

    def index 
        establishments = Establishment.includes(:user, reviews: :user).all 
        render json: establishments, include: ['user', 'reviews.user']
    end

    def create
        establishment = Establishment.create(est_params)
        if establishment.valid?
            render json: establishment, status: :created
        else
            # error_messages=[]
            # render json: {error: "Make sure name, type, location and description are completed!"}, status: :unprocessable_entity
            error_messages = []

            error_messages << "missing name" if establishment.errors[:name].present?
            error_messages << "missing type" if establishment.errors[:establishment_type].present?
            error_messages << "missing location" if establishment.errors[:location].present?
            error_messages << "missing description" if establishment.errors[:bio].present?
        
            render json: { error: error_messages.join(', ') }, status: :unprocessable_entity
        end
    end

    def delete
        establishment = Establishment.find_by(id: params[:id])
        if establishment.user_id == current_user.id 
            establishment.destroy
            render json: {message: "Establishment deleted."}, status: :ok
        else 
            render json: { error: "You can only delete an establishment you created."}, status: :unauthorized 
        end
    end

    def show
        establishment = Establishment.find_by(id: params[:id])
        render json: establishment
    end

    def update
        establishment = Establishment.find_by(id: params[:id])
        establishment.update(est_params)
        if establishment.valid? && establishment.user_id == current_user.id
            render json: establishment
        else 
            render json: {error: "ERROR: Make sure everything is filled out!"}, status: :unprocessable_entity
        end
    end

    private
    def est_params
        params.permit(:id, :name, :photo, :establishment_type, :location, :bio, :allows_dogs, :user_id)
    end

end
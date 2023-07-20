class EstablishmentController < ApplicationController

    def index 
        establishments = Establishment.all 
        render json: establishments
    end

    def create
        establishment = Establishment.create(establishment_params)
        render json: establishment
    end

    private
    def establishment_params
        params.permit(:name, :photo, :establishment_type, :location, :bio, :allows_dogs, :user_id)
    end

end
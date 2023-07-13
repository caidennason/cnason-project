class EstablishmentController < ApplicationController

    def index 
        establishments = Establishment.all 
        render json: establishments
    end

end
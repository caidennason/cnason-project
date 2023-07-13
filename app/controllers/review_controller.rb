class ReviewController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews 
    end

    def create
        review = Review.create(review_params)
        if review.valid? 
            render json: review, status: :created 
        else
            render json: {error: "ERROR: Reviews must contain content."}, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.permit(:content, :photo, :date, :user_id, :establishment_id)
    end

end
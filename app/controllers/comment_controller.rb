class CommentController < ApplicationController

    before_action :authorized 

    def index 
        comments = Comment.all 
        render json: comments
    end

    def create 
        comment = Comment.create(comment_params)
        if comment.valid? 
            render json: comment, status: :created
        else
            render json: {Error: "Make sure there's a comment!"}, status: :unprocessable_entity
        end
    end

    private 
    def comment_params 
        params.permit(:content, :review_id, :user_id )
    end

end
class CommentController < ApplicationController

    def index 
        comments = Comment.all 
        render json: comments
    end

end
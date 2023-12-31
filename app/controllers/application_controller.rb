class ApplicationController < ActionController::API
  include ActionController::Cookies

  def logged_in? 
    !!session[:user_id]
  end

  def current_user
    User.find_by_id(session[:user_id])
  end

  def authorized
    render json: {error: "Make sure to login first!"}, status: :unauthorized unless logged_in?
  end

end

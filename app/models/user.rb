class User < ApplicationRecord
    validates :name, presence: true 
    validates :location, presence: true 
    validates :bio, presence: true 
    validates :password, presence: true 
    validates :password_confirmation, presence: true 
    has_secure_password
end

class User < ApplicationRecord
    validates :name, presence: true 
    validates :location, presence: true 
    validates :bio, presence: true 
    validates :password, presence: true 
    validates :password_confirmation, presence: true 
    has_many :establishments
    has_many :reviews 
    has_many :comments
    has_many :dogs 
    has_secure_password
end

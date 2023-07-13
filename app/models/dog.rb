class Dog < ApplicationRecord
    validates :name, presence: true 
    validate :bio, presence: true 
end

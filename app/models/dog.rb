class Dog < ApplicationRecord
    validates :name, presence: true 
    validate :bio, presence: true 
    belongs_to :user
end

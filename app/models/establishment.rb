class Establishment < ApplicationRecord
    validates :name, presence: true 
    validates :establishment_type, presence: true
    validates :location, presence: true 
    validates :bio, presence: true 
    validates :allows_dogs, presence: true 
end

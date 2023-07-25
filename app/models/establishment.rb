class Establishment < ApplicationRecord
    validates :name, presence: true 
    validates :establishment_type, presence: true
    validates :location, presence: true 
    validates :bio, presence: true 
    validates :allows_dogs, presence: true 
    # belongs_to :users
    # has_many :reviews
    # has_many :comments, through: :reviews
end

# works when allows_dogs is commented out 
# working now! had to change this on the front end. i had allows_dogs set to false, and chaged it to true on click. 
# i changed it to true, and set to !allowsDogs, which seems to have fixed it

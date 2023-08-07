class Establishment < ApplicationRecord
    validates :name, presence: true 
    validates :establishment_type, presence: true
    validates :location, presence: true 
    validates :bio, presence: true 
    validates :allows_dogs, inclusion: [true, false]
    # belongs_to :user, optional: true
    # has_many :reviews
    # has_many :comments, through: :reviews
end

# works when allows_dogs is commented out 
# working now! had to change this on the front end. i had allows_dogs set to false, and chaged it to true on click. 
# i changed it to true, and set to !allowsDogs, which seems to have fixed it

# association errors
# belongs_to :user -- was causing it
# has_many :reviews -- not causing it
# has_many :comments, through: :reviews -- was causing it
# had to make belongs_to :user OPTIONAL! i think since i am not passing a user id yet, it wouldn't get saved to the database

# having an issue with making allows_dogs false. if i comment it out, it updates on the front end. if allows_dogs is false, does
# that make its presence false? is false present? 
# ==> line 6 is how you validate a boolean :)



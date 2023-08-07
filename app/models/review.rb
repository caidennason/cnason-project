class Review < ApplicationRecord
    validates :content, presence: true 
    belongs_to :establishment, optional: true
    belongs_to :user, optional: true
    has_many :comments
end

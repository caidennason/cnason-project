class Review < ApplicationRecord
    validates :content, presence: true 
    belongs_to: establishment 
    belongs_to: user 
    has_many: comments
end

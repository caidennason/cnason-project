class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :photo, :date, :user_id, :establishment_id, :reviewer_name
  belongs_to :establishment
end

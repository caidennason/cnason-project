class EstablishmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :establishment_type, :location, :bio, :allows_dogs
  
  has_many :reviews 
  belongs_to :user
end

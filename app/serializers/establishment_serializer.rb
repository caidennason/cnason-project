class EstablishmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :establishment_type, :location, :bio, :allows_dogs
  
  has_many :reviews 
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :location, :name, :photo

  has_many :reviews 
  has_many :establishments
  has_many :comments
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'Nick', location: "Bushwick", bio: "I love taking my dog out to eat", password: "test", password_confirmation: "test")
u2 = User.create(name: 'Forest', location: "Berkeley", bio: "I need to find places that I can take my dog", password: "luna", password_confirmation: "luna")
u3 = User.create(name: 'Mallorie', location: "Greenpoint", bio: "I have two dogs, so I need to make sure I can bring them", password: "winoa", password_confirmation: "winoa")

e1 = Establishment.create(name: "Dog Saloon", photo: "https://imgur.com/kxsi0lI.jpg", establishment_type: "Bar", location: "Victorville", bio: "Fun dog bar you can bring your pups to", allows_dogs: true, user_id: u1.id)
e2 = Establishment.create(name: "Pup hotel", photo: "https://imgur.com/vBnz4cr.jpg", establishment_type: "Lounge", location: "San Francisco", bio: "Fun dog bar you can bring your pups to", allows_dogs: true, user_id: u2.id)
e3 = Establishment.create(name: "101 Wilson", establishment_type: "Bar", location: "Brooklyn", bio: "Fun Bar in Brooklyn", allows_dogs: false, user_id: u3.id)

r1 = Review.create(content: "This place is amazing!", user_id: u1.id, establishment_id: e1.id)
r2 = Review.create(content: "This place is great, and it has a place for your dogs to rest", user_id: u2.id, establishment_id: e2.id)
r3 = Review.create(content: "This place is amazing, but does not allow dogs", user_id: u3.id, establishment_id: e3.id)

c1 = Comment.create(content: "Great to know! Can't wait to bring my dogs", user_id: u1.id, review_id: r1.id)
c2 = Comment.create(content: "Sounds like a great place to bring my dog after a walk", user_id: u2.id, review_id: r2.id)
c3 = Comment.create(content: "I'll have to stop by, but good to know I can't bring my dogs!", user_id: u3.id, review_id: r3.id)
Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/comments', to: "comment#index"
  get '/dogs', to: "dog#index"
  get '/establishments', to: "establishment#index"
  get '/reviews', to: "review#index"
  get '/users', to: "user#index"

  delete '/users/:id', to: "user#delete"

  post '/signup', to: "user#create"
  post '/login', to: "session#create"
  delete '/logout', to: "session#destroy"
  get '/me', to: "user#show"
  

end

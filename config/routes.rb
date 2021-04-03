Rails.application.routes.draw do
  devise_for :developers, controllers: {
  	sessions: 'developers/sessions'
  }
  
  root 'pages#home'
  # get 'pages/home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

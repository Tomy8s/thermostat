require 'sinatra/base'
require 'sinatra/flash'

require_relative 'models/User'

class Thermostat < Sinatra::Base

  enable :sessions
  # set :session_secret, 'super secret'

  register Sinatra::Flash

  get '/' do
    erb :index
  end

  post '/update' do
    p current_user
    current_user.update(params)
    true
  end

  get '/sign_up' do
    erb :sign_up
  end

  post '/sign_up' do
    @user = User.create(params)
    session[:user_id] = @user.id
    redirect('/')
  end

  helpers do
    def current_user
      @current_user ||= User.get(session[:user_id])
    end
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

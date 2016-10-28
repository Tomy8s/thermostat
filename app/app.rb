require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  register Sinatra::Flash

  get '/' do
    erb :index
  end

  post '/update' do
    @user.update(temperature: params(:temperature), power_saving: params(:power_saving))
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

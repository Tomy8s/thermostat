require 'data_mapper'
require 'dm-postgres-adapter'

class User
  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :email, String, format: :email_address
  property :username, String
  property :password, Text
  property :temperature, Integer, default: 20
  property :power_saving, Boolean, default: true
  property :location, String
end

DataMapper.setup(:default, 'postgres:///thermostat')
DataMapper.finalize
DataMapper.auto_upgrade!

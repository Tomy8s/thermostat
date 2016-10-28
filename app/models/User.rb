class User
  indlude DataMapper::Resource

  property :id, Serial
  property :name, String
  property :email, String, format: :email_address
  property :username, String
  property :password_digest, Text
  property :temperature, Integer, default: 20
  property :power_saving, Boolean, default: true
end

DataMapper.setup(:default, 'postgres:///thermostat')
DataMapper.finalize
DataMapper.auto_upgrade!
# add sprockets in future
# import libs
# import routes

get '/' do
  File.read(File.join('public/dist', 'index.html'))
end

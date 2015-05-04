# add sprockets in future
# import libs
# import routes

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/contact' do
  name = params[:message][:name]
  mail = params[:message][:mail]
  phone = params[:message][:phone]
  budget = params[:message][:budget]
  body = params[:message][:body]
  Pony.mail(
    :to => 'contato@codeland.com.br',
    :from => mail,
    :reply_to => mail,
    :subject => 'Lance minha Startup em duas semanas',
    :body => "Nome: #{name}\n" + "E-mail: #{mail}\n" + "Telefone: #{phone}\n" + "Orçamento: #{budget}\n" + body,
    :via => :smtp,
    :via_options => {
      :address               => 'smtp.gmail.com',
      :port                  => '587',
      :enable_starttls_auto  => true,
      :user_name             => ENV['email_user'],
      :password              => ENV['email_password'],
      :authentication        => :plain,
      :domain                => 'codeland.com.br'
    }
  )
  redirect "/"
end
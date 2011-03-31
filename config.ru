# Static site using Rack (with expire headers and etag support)... great for hosting static sites on Heroku


use Rack::Static, :urls => ["/css", "/js"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=86400' }, File.open('public/index.html', File::RDONLY)] }

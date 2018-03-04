require 'net/http'
require 'uri'

uri = URI('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
puts(Net::HTTP.get(uri))

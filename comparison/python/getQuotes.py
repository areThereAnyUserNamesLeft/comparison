#!/bin/python

import urllib.request

with urllib.request.urlopen("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1") as response:

    print(response.read().decode('utf-8'))

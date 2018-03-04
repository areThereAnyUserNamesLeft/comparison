var http =  require('http');
var req = http.request('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function (res){
    var data = '';
        res.on('data', function( chunk ){
            data += chunk;
        });
        res.on('end', function(){
            console.log(data);
        });
    });
req.on('error', function (e) {
    console.log(e.message);
});
req.end();

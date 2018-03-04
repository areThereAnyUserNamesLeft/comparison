<?php
$url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
echo file_get_contents($url);
?>

Revealjs Remote Control
=====================

This project was developed to handle [reveal.js](https://github.com/hakimel/reveal.js "Title") events remotely.

## Usage
Change the URL in 'views/index.ejs' and 'public/javascripts/script.js'



```
var socket = io.connect('http://yourdomain:port'),
```
Install dependencies
```
npm install
```
Start server
```
node app.js
```

Add the following code in the index file of your revealjs project
```
<script src="http://yourdomain:port/socket.io/socket.io.js"></script>
<script src="http://yourdomain:port/javascripts/script.js"></script>
```
Access the url 'http://yourdomain:port' and control your presentation :)



Revealjs Remote Control
=====================

## Usage
Change the URL in the file index.ejs

```
var socket = io.connect('http://yourdomain:port'),
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
Access the url 'http://yourdomain:port' and control your presentation



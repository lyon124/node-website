<html>
<head>
<link rel="stylesheet" href="main.css">
</head>

<body>

<div class="chat">
<input type="text" class="chat-name" placeholder="Enter your name">
<div class="chat-messages"></div>
<textarea placeholder="Type message"></textarea>
<div class="chat-status"> Status: <span> Idle </span></div>
</div>
<script src="http://127.0.0.1:8080/socket.io/socket.io.js"></script>
<script>
(function(){
	var getNode = function(s){
	return document.querySelector(s);
	
	},
	messages = getNode('.chat-messages'),
	status = getNode('.chat-status span'),
	textarea = getNode('.chat textarea'),
	chatName = getNode('.chat-name');
	
	statusDefault = status.textContent,
	
	setStatus = function(s){
	status.textContent = s;
	
	if( s !== statusDefault){
	var delay = setTimeout(function() {
	setStatus(statusDefault);
	clearInterval(delay);
	},3000);}};

	try{
	var socket = io.connect('http://127.0.0.1:8080');
	}
	catch(e){}
	
	if(socket !== undefined){
	socket.on('output', function(data){
	if(data.length){
	for(var x = 0; x < data.length; x=x+1){
	var message = document.createElement('div');
	message.setAttribute('class','chat-message');
	message.textContent = data[x].name + ':' + data[x].message;
	messages.appendChild(message);
	messages.insertBefore(message, messages.firstChild);
	}
	}
	});
	
	socket.on('status', function(data){
	setStatus((typeof data === 'object') ? data.message:data);
	if(data.clear === true) {
	textarea.value='';}
	});
	textarea.addEventListener('keydown',function(event){
	var self = this,
	name = chatName.value;
	
	if(event.which === 13 && event.shiftKey === false){
	socket.emit('input',{name: name, message: self.value});
	} 
	});
	}
})();
</script>
 
 </body>
</html>

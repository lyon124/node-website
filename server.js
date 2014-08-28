
var client = require('socket.io').listen(8080).sockets;
var mongodb = require('mongodb');
var uri = 'mongodb://lyon124:12216251a@ds049858.mongolab.com:49858/deneme';
mongodb.MongoClient.connect(uri, { server: { auto_reconnect: true } }, function (err, db) {
    /* adventure! */

if(err) throw err;

client.on('connection', function(socket){

var col = db.collection('messages'),
sendStatus = function(s){
socket.emit('status',s);};

col.find().limit(100).sort({_id:1}).toArray(function(err,res){
if(err) throw err;
socket.emit('output',res);
});
socket.on('input', function(data){

var name = data.name,
message = data.message;
whitespacePattern = /^\s*$/;

if(whitespacePattern.test(name) || whitespacePattern.test(message)){
sendStatus('Name and message is required.');
} else {
col.insert({name: name, message: message}, function(){

client.emit('output',[data]);
sendStatus({message:"message sent",
clear: true});

});
}
});
});
});
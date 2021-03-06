
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        console.log('connected');
        
        socket.on('makeOrder', order=>{
            // console.log('orderDetails' , order)
            io.emit('setOrder', order)
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            // io.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('chat topic', topic=>{
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
    })
}
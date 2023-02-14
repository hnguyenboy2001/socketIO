const io = require("socket.io")(8900,{
    cors:{
        origin: "http://localhost:3001",
    }
})

// io.on("connection", function(socket){
//     console.log("Co nguoi ket noi");
// })
io.on("connection", (socket)=>{

    console.log("co nguoi ket noi " + socket.id)
   
    socket.on("Client-CheckEmit", (data)=>{
        console.log(data + " from Client")
        socket.emit("Server-checkEmit", "HelloWorld");
    })

})
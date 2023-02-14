# CLIENT
1. npm create-react-app client
    - npm install socket.io
    - import { io } from "socket.io-client";
    -   import {useRef,useEffect} from react
        const socket = useRef()
        socket.current = io("ws://localhost:8900")
        socket.current.on("",(data)=>{})
# SEVER
1. npm init (in sever)(socket io)
    - npm install express nodemon socket.io
    -   const express =  require("express");
        const app = express()
        var server = require("http").Server
        const io = require("socket.io")(sever)
        server.listen(3000)

# Scripts
1. client
"server": "nodemon index.js",

"react": "react-scripts start"

"dev": "concurrently \"npm run server \" \"npm run react\" "
2. server
"start": "nodemon index.js"
3. SOCKETIO
"dev": 



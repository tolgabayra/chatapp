const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const Messages = require("./models/Messages")


//database
const db = require("./config/database")

db.authenticate()
  .then(()=> console.log("Database connected.."))
  .catch(err => console.log(err))
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/postgres') // Example for postgres

// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }


//  const sequelize = new Sequelize(`postgres://postgres:postgres:2778/postgres`, async () => {
//    try {
//      await sequelize.authenticate()
//      console.log("connection is succesfull");
//    } catch (err) {
//      console.log(err);
//   }
  
 



const PORT = process.env.PORT || 2022
//--------------------------
app.use(cors());
//-------------------------
const server = http.createServer(app);

//bu hat üzerinden haberleşme Sunucu*-*-
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:8000",
    methods: ["GET", "POST", "OPTIONS"],
  },
});


//socket üzerinden yayın !!!
io.on("connection", (socket) => {

  let users = []
 
  
  console.log(`User Connected: ${socket.id}`);
  const datauser = users.filter(name=>name.includes(users))
  if(users == datauser){
    console.log("Username is already used !!");
  }else{
    socket.on("join_room", (data) => {
    
      socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
    
    //users = data.author    
    
  });
  }
 


  // Mesaj, veritabanı log !!!
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
          
        Messages.create({
        messagebody: data.message
    }).then().catch(err=>console.log(err))


     this.user = data.author
    console.log(data);
  }); 
  

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});


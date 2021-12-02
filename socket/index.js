import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log("someon connect");

    socket.on("disconnect", () => {
        console.log("left");
    })
});

io.listen(5000);
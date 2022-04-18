const net = require("net");

// connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.61",
    port: 50541
  });
  
  conn.setEncoding("utf8");

  conn.on("data",(data)=>{
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
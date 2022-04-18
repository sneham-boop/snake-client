const net = require("net");
// connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.61",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log(
      "Connection to game server has been established successfully.."
    );
  });

  conn.write("Name: SKM");
  conn.write("Move: up");
  setTimeout(() => {
    conn.write("Move: left");
    setTimeout(() => {
      conn.write("Move: left");
      setTimeout(() => {
        conn.write("Move: down");
        setTimeout(() => {
          conn.write("Move: down");
          setTimeout(() => {
            conn.write("Move: right");
          }, 1000);
        }, 500);
      }, 500);
    }, 500);
  }, 500);

  return conn;
};

module.exports = {
  connect,
};

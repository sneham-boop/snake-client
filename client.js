const net = require("net");
const { IP, PORT, NAME } = require("./constants");
// connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(
      "Connection to game server has been established successfully.."
    );
  });

  // Set player name
  conn.write(NAME);
  return conn;
};

module.exports = {
  connect,
};

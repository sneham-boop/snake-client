let connection;
// setup interface
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// accept input from player
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") connection.write("Move: up"); 
  if (key === "a") connection.write("Move: left");
  if (key === "s") connection.write("Move: down");
  if (key === "d") connection.write("Move: right"); 
  
  // Banter
  if (key === "h") connection.write("Say: weather good?"); 
  if (key === "u") connection.write("Say: You good?"); 
  if (key === "n") connection.write("Say: Naaaah."); 
  if (key === "y") connection.write("Say: Ya."); 
};

module.exports = {
  setupInput,
};

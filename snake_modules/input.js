let connection;
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
} = require("./constants");

// setup interface
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Accept input from player
const handleUserInput = (key) => {
  // Terminate game session
  if (key === "\u0003") {
    process.exit();
  }
  // Moves
  if (key === "w") connection.write(MOVE_UP_KEY);
  if (key === "a") connection.write(MOVE_LEFT_KEY);
  if (key === "s") connection.write(MOVE_DOWN_KEY);
  if (key === "d") connection.write(MOVE_RIGHT_KEY);

  // Short chat messages
  if (key === "h") connection.write(MESSAGES[key]);
  if (key === "g") connection.write(MESSAGES[key]);
  if (key === "n") connection.write(MESSAGES[key]);
  if (key === "y") connection.write(MESSAGES[key]);
};

module.exports = {
  setupInput,
};

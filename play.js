const { connect } = require("./snake_modules/client");
const { setupInput } = require("./snake_modules/input");

console.log("Connecting ...");

let connection = connect();
setupInput(connection);

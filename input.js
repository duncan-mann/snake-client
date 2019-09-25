let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

const handleUserInput  = (input) => {
  input.on('data', key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "\033[A") { // up
      connection.write('Move: up');
    } else if (key === "\033[B") { // down
      connection.write('Move: down');
    } else if (key === "\033[D") { // right
      connection.write('Move: left');
    } else if (key === "\033[C") { // left
      connection.write('Move: right');
    }
  });
};

module.exports = {setupInput};
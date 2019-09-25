const net = require('net');
const connect = function() {

  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text

  conn.on('connect', () => {
    conn.write('Name: DSM');
    console.log("Successfully connected to game server");

  });
  conn.setEncoding('utf8'); 




  conn.on('data', (data) => {
    console.log(`Server says ${data}`);
  })

  return conn;
}

module.exports = {connect};
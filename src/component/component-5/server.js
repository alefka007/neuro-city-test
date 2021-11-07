const path = require('path');
const fs = require('fs');
const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 3000
});

server.on('connection', async (ws) => {
    const users = await fs.readFileSync(path.resolve(__dirname, 'users.json'), 'UTF-8');

    ws.send(users);
    ws.on('close', () => {
        console.log('Client has disconnected!')
    });
});

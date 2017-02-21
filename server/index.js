const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

// API endpoints go here!

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    app.get('*', function(request, response) {
        const index = path.resolve(__dirname, '../client/build', 'index.html');
        response.sendFile(index);
    });
}
else {
    app.use(proxy('http://localhost:3000'));
}

let server;
function runServer(host='localhost', port=8080) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, host, () => {
            console.log(`Server running on ${host}:${port}`);
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer(process.env.HOST, process.env.PORT);
}

module.exports = {
    app, runServer, closeServer
};

const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

// API endpoints go here!


if (process.env.NODE_ENV === 'production') {
    // If we are in production mode, then serve the built client
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // Unhandled requests should serve index.html so client-side routing using
    // browserHistory can function
    app.get('*', function(request, response) {
        const index = path.resolve(__dirname, '../client/build', 'index.html');
        response.sendFile(index);
    });
}
else {
    // If we are in development mode, then offload any unhandled requests to
    // Create React App
    app.use(proxy('http://localhost:3000', {
        logLevel: 'warn'
    }));
}

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
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
    runServer();
}

module.exports = {
    app, runServer, closeServer
};

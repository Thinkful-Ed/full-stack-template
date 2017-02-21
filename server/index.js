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
    app.use(proxy('http://localhost:3000', {
        ws: true // Proxy websockets for live reload
    }));
}

let server;
function runServer(port=8080) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
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
    runServer(process.env.PORT);
}

module.exports = {
    app, runServer, closeServer
};

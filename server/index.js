const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.get('*', function(request, response) {
        response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}
else {
    console.log("here");
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

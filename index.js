const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const runServer = require('./server').runServer;

if (process.env.NODE_ENV === 'production') {
    // Just run the server
    runServer(process.env.PORT || 8080);
}
else {
    const app = express();
    // Proxy everything through to our server
    app.use(proxy('http://localhost:3001/', {
        logLevel: 'warn', // Keep the logs clean
        ws: true, // Proxy websockets too
        router: {
            // Proxy live reload websocket straight to Create React App
            // so it doesn't disconnect when our server reloads
            'localhost:8080/sockjs-node': 'http://localhost:3000'
        }
    }));
    app.listen(process.env.PORT || 8080);
}

const http = require('http');

const server = http.createServer((req, res) => {

    const categoria = req.url;

    if (categoria === '/tecnologia') {

        res.end('<html><body>Noticias de Tecnologia</body></html>');

    } else if (categoria === '/moda') {

        res.end('<html><body>Noticias de Moda</body></html>');

    } else if (categoria === '/beleza') {

        res.end('<html><body>Noticias de Beleza</body></html>');

    } else {

        res.end('<html><body>Portal de Noticias</body></html>');

    }

});

server.listen(3000, () => {
    console.log('Server running in port 3000'); 
});
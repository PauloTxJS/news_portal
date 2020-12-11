const app = require('./config/server');
const rotaNoticias = require('./app/routes/noticias')(app);
const rotaHome = require('./app/routes/home')(app);
const rotaFormulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);


// Web Server
app.listen(3000, () => {
    console.log('Server running in port 3000');
});
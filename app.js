const app = require('./config/server');

// <Routes>
app.get('/', (req, res) => {
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render("admin/form_add_noticia");
});


app.get('/noticias', (req, res) => {
    res.render("noticias/noticias");
});
// </Routes>


// Web Server
app.listen(3000, () => {
    console.log('Server running in port 3000');
});
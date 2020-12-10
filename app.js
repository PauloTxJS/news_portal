/*
    Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do 
    Node. O Express oferece soluções para:
    -Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
    -Integrar "view engines" para inserir dados nos templates.
    -Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização 
        dos modelos que são usados para renderizar a resposta.
    -Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

    ========================================================================================================

    O EJS é uma view engine para o mundo node, é uma opção dentre algumas disponíveis. Algumas das mais 
    conhecidas são EJS, Jade e Handlebars. Cada uma possui suas características, funcionalidades e forma de 
    uso. Nesse sentido, usar uma view engine e qual usar, depende muito da sua necessidade e gosto. 
*/

const express = require('express');
const app = express();
const teste = require('./mod_teste');

// Notifying the 'express' that 'ejs' will be responsible for the 'views'
app.set('view engine', 'ejs'); 

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
    console.log('Server running in port 3000', teste());
});
import express from "express";

const PORT = process.env.PORT || 3000;
const server = express();


console.log('------------------------------------ LOADING -------------------------', PORT);
/*
set up all your server config here
*/
server.get('/', (req, res) => res.send('Hello World2!'));
server.listen(PORT, () => {
    console.log('Server listening on', PORT);
});

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (req, res)=>{
    // readFile('./index.html', 'utf-8', (err, html)=>{
    //     if(err){
    //         res.status(500).send('sorry, out of order');
    //     }
    //     res.send(html);
    // });
    res.send( await readFile('./index.html', 'utf-8'));
});

app.listen(process.env.PORT || 4001, ()=> console.log(`App available on port`));
const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;

    readFile('./content/second.txt', 'utf-8', (err, res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;

        writeFile('./content/write.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'}, (err, res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with the task');
        })
    })
})
console.log('start next task');
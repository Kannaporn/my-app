import * as readline from 'readline';

const rl =  readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size)=> {
    const n = parseInt(size);
    const f = 2*n -1;
    for(let i = 0; i < f; i++) {
        let line = '';
        for(let j = 0; j < f ;j++) {
            line += (
                (i+j+n-1) % (f-1) == 0 || 
                (i-j+n-1) % (f-1) == 0
               
            ) ? '*' : ' ';
        }
        console.log(line);
    }
    rl.close();
});
import * as readline from 'readline';

const rl =  readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size)=> {
    for(let i = 0; i <= size; i++) {
        let line = ''
        for(let j = 0; j < i; j++) {
            line = `${line}*`;
        }
        console.log(line)
    }
    rl.close();
});
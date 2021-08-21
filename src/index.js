const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getLetter(str) {
    let resMsg = '';
    for (let i = 0; i < (str.length / 2); i++) {
        let item = '';
        item = (str[i*2] + str[i*2 + 1]);
        if (item === '10') {
            resMsg += '.';
        } else if (item === '11') {
            resMsg += '-';
        }            
    }
    return resMsg;
}

function decode(expr) {
    console.log(expr);
    
    let res = '';
    let map = new Map(Object.entries(MORSE_TABLE));
    let resMsg = '';

    for (let i = 0; i < (expr.length / 10); i++) {        
        res =  expr.slice(i * 10, (i + 1) * 10);
        if (res === '**********') {
            resMsg += ' ';
        }else {
            resMsg += map.get(getLetter(res));
        }
    }
    return resMsg;    
}

module.exports = {
    decode
}
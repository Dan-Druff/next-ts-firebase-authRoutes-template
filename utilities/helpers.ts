export const createRandomId = ():string => {
    let str = '';
    let length = 10;
    let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=1; i <= length; i++){
        let rando = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        str += rando;
    }
    return str;
}
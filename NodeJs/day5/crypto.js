const cryptojs = require('crypto-js')

const msg = "Hello World"
const secretKey = 'acehaze13'

const encrypted = cryptojs.AES.encrypt(msg, secretKey).toString();

// console.log(encrypted);

const decrypted = cryptojs.AES.decrypt(encrypted, secretKey);
const original = decrypted.toString(cryptojs.enc.Utf8);

// console.log(original);

const obj = {
    name: "Abhyanshu",
    game: "brawlStars",
    tame: "daeneris targaryen"
}
const hint = 'danny';

const hide = cryptojs.AES.encrypt(
    JSON.stringify(obj), 
    hint
).toString();

console.log(hide);

const show = cryptojs.AES.decrypt(hide, hint);

const fullShow = JSON.parse(
    show.toString(cryptojs.enc.Utf8)
);


console.log(fullShow);
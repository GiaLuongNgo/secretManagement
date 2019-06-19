require('dotenv').config()

let pk = process.env.PRIVATE_KEY;
let pk2 = process.env.PK;
let mn = process.env.MNEMONIC;
let mn2 = process.env.MNEMONIC2;
let api = process.env.API;
let ps = process.env.PASSWORD;
let db = process.env.DB_URL;
let apikey = process.env.APIKEY;
let apisecret = process.env.APISECRET;
let dbps = process.env.DBPASSWORD;

console.log("private key :",pk);
console.log("mnemonic :",mn);
console.log("password 2 :",pk2);
console.log("mnemonic 2 :",mn2);
console.log("api :",api);
console.log("password :",ps);
console.log("DB url:",db);
console.log("apikey :",apikey);
console.log("api secret :",apisecret);
console.log("database password :",dbps);



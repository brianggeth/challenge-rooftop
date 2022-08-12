const data = require('./keys.json');

const keys = data.keys;
const secret = data.message;

const resultado = new Array(99).fill('');

for (letter in secret) {
  for (k in keys) {
    if (letter === keys[k]) {
      secret[letter].map((item) => {
        resultado.splice(item, 1, k);
      });
    }
  }
}

return resultado.toString();

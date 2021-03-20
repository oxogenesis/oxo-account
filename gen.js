const oxoKeyPairs = require("oxo-keypairs")

const fs = require('fs');

let dir_name = 'seed'

fs.mkdir(__dirname + '/' + dir_name, function (err) {
  if (err) {
    // throw err;
    console.log(err)
  } else {
    for (let i = 0; i < 1000; i++) {
      let file_name = `${i}`
      if (i < 10) {
        file_name = `00${i}`
      } else if (i < 100) {
        file_name = `0${i}`
      }

      let begin_at = Date.now()
      for (let j = 0; j < 1000000; j++) {
        let Seed = oxoKeyPairs.generateSeed(`${Date.now()}`, 'secp256k1')
        let keypair = oxoKeyPairs.deriveKeypair(Seed)
        let Address = oxoKeyPairs.deriveAddress(keypair.publicKey)
        fs.writeFileSync(
          `${dir_name}/${file_name}.txt`,
          `${Address}:${Seed}\n`,
          { flag: 'a', encoding: 'utf-8' },
          function (err) {
            console.log(err);
          }
        )
      }

      let end_at = Date.now()
      console.log(`${file_name}:${(end_at - begin_at) / 1000}s`)
    }
  }
});


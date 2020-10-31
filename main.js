const oxoKeyPairs = require("oxo-keypairs")

const fs = require('fs');

while (true) {
    let Seed = oxoKeyPairs.generateSeed("any string you choose", 'secp256k1')
    let keypair = oxoKeyPairs.deriveKeypair(Seed)
    let Address = oxoKeyPairs.deriveAddress(keypair.publicKey)
    let PublicKey = keypair.publicKey
    let PrivateKey = keypair.privateKey

    //gen account like ohh...
    //let regx = /^ohh.+$/
    
    //gen account like o...hh
    //let regx = /^o.+hh$/
    
    //gen account like oh...h
    //let regx = /^oh.+h$/
    
    let regx = /^o.+$/
    let rs = regx.exec(Address)
    if (rs != null) {
        console.log(`Seed      :${Seed}`)
        console.log(`Address   :${Address}`)
        //console.log(`PublicKey :${PublicKey}`)
        //console.log(`PrivateKey:${PrivateKey}`)
        //return
        fs.writeFileSync(
            './seed.txt',
            `Seed      :${Seed}\nAddress   :${Address}\n`,
            {flag:'a',encoding:'utf-8'},
            function(err){
                console.log(err);
            }
        )
    }
}

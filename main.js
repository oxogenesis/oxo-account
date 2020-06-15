const oxoKeyPairs = require("oxo-keypairs")
const Seed = oxoKeyPairs.generateSeed("any string you choose", 'secp256k1')
const keypair = oxoKeyPairs.deriveKeypair(Seed)
const Address = oxoKeyPairs.deriveAddress(keypair.publicKey)
const PublicKey = keypair.publicKey
const PrivateKey = keypair.privateKey

console.log(`Seed      :${Seed}`)
console.log(`Address   :${Address}`)
console.log(`PublicKey :${PublicKey}`)
console.log(`PrivateKey:${PrivateKey}`)

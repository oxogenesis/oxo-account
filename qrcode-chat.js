let qrcode = require('qrcode-terminal')
let name = 'test'
let seed = ''
let json = { "Name": name, "Seed": seed }
qrcode.generate(JSON.stringify(json))
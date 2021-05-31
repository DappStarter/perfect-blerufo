require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth meadow million include private orange gasp'; 
let testAccounts = [
"0xe5668781c898a435dabc31276ba5579ce3a58a9939fca1c0ef0506b366de00da",
"0x43eefe5db68bebfc27d228677d9bc0ffa4d842cd7ebe38adef6a0ac774ad64cd",
"0x3e73c8cda520cf2e973589e0f6b2acd688b2cb1425b09290a712a711a2f1119a",
"0x964b3d5e5f96b54325067eb86f5bf87b665dacfc1cc04c0764383b5468492b56",
"0x98ffe1bc0913d00c774936edfb8866786d121cda6a20f13fd09b219473518202",
"0x7f47995b608ff795c399a6b4764b19797b9d21f357538bafca922b831fb68b71",
"0xba91c3db0864ca5cfd14413cb39a9deca5216b22785271b6a4e82228eab41855",
"0x5be667d3216aa120ff506a8b2611c676c0f514c654bfc92e2edd6548555440c9",
"0x4079569f36849f52025da156f6750003a2ed38dd2ffdf8cd50c297bb85c0b06b",
"0x7dd6c19faf6cc6db4271d9d04f8c85b2a5f7c6418a6690dc1199c48778a6bf05"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


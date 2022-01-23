require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind concert grace creek force tumble'; 
let testAccounts = [
"0x009ef237361c968d1cdcc4f3f21d299a077c78cc09e6575f20f2192a0cf5c212",
"0xdbed1c4ca79de38fdf6ecdd27c66f2b9a605d99d00a7dc98c150d3c69ee4f69b",
"0x28e90beaf83497ed3a7153e8823eda9e4c495fa24f3a22ad1e752e42e76d64b3",
"0xaeb312b6410a88ecd0eb0147b3c2ffa79a0ace38cd17ab6b9209809d990921c3",
"0x358a2c7e63bee695fb6146c2d2729620d37dcbc239e8d653986c2bc52a6209d8",
"0x8be809e4f7970f4e5eca70131c20078197435c922604e88562bfded2e7489080",
"0x215d172041fc0fb7f3630e369db75a0796f502d586f0e689b3ef73f01c8b995f",
"0x5de433a82b2eb7fab44f7eb8661016a801c1dcbeb17e64b587dc75cdbf5c89e9",
"0x3c605491ba49bf1de7a7ba70bdaa009fbaf0eb945a5a9d957f272ffc4279053e",
"0x5356eff9f1f35c066f6a84e4e68c36b3ea89b9e13273061b059b6e084dd2b7f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


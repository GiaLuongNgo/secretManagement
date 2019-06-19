const ethers = require('ethers')
let provider = ethers.getDefaultProvider('ropsten')

let privateKey = "0x9A4126DE6E26905304575E04A39850EAAF60DA45BC0C67925B40C7F1F28AE696"
let wallet = new ethers.Wallet(privateKey,provider)
wallet.getBalance().then((res)=> {console.log(res)})
console.log(wallet.address)
// "0x7357589f8e367c2C31F51242fB77B350A11830F3"


const getNonce = async (address) => {
    let result = await provider.getTransactionCount(address)
    console.log(result)
    return result
}

// All properties are optional
let transaction = {
    nonce: getNonce(wallet.address),
    gasLimit: 21000,
    gasPrice: ethers.utils.bigNumberify("20000000000"),

    to: "0x5E7bf9584533FAF68e4c5a7294e868af0EfAdBeF",

    value: ethers.utils.parseEther("0.001"),
    // This ensures the transaction cannot be replayed on different networks
    chainId: ethers.utils.getNetwork('ropsten').chainId
}

let signPromise = wallet.sign(transaction)

signPromise.then((signedTransaction) => {

    console.log(signedTransaction);
    
})

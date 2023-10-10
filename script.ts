const ethers = require("ethers");
const Web3 = require("web3");

var swiss_web3 = new Web3(Web3.givenProvider || "https://json-rpc.testnet.swisstronik.com/");
var mumbai_web3 = new Web3(Web3.givenProvider || "https://polygon-mumbai.g.alchemy.com/v2/0VdjBfJdcpzoXSc7XAVJpo9RU5QTLxAj");
let contractAddresses = ["0x07de2611c0c1f1023561f66c1c3f1cbdfa258665","0xbf2194b72346b2b67c26549ddaabfd6443fb4cdd"];

const contractABI = [
    {
      "inputs": [{ "internalType": "string", "name": "_data", "type": "string" }],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getData",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "newData", "type": "string" }
      ],
      "name": "setData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]



async function main() {
const result = await swiss_web3.eth.getStorageAt(contractAddresses[0], 0)
console.log(`hex at slot 0 for swisstronik testnet is ${result}`);

//error with read returns { msg: "Wrong public key size" }. uncomment to replicate error
// const Swisscontract = new swiss_web3.eth.Contract(contractABI, contractAddresses[0]);
// let Swissdata = await Swisscontract.methods.getData().call()
// console.log(Swissdata);


const result2 = await mumbai_web3.eth.getStorageAt(contractAddresses[1], 0)
const contract = new mumbai_web3.eth.Contract(contractABI, contractAddresses[1]);
let data = await contract.methods.getData().call()
console.log(`hex at slot 0 for mumbai testnet is ${result2}, decoded as ${data}`);

}

main();
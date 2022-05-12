var Web3 = require('web3');


var callStoreOnLocalGanache = async function () {
  // let web3 = new Web3("http://localhost:8545");
  var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545/'));
  const accounts = await web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];
  console.log(web3.eth.defaultAccount);
  // var CoursetroContract = new web3.eth.Contract(abi);
  // var Coursetro = CoursetroContract.at(contractAddr);
  var myContract = new web3.eth.Contract(abi, contractAddr, { from: web3.eth.defaultAccount })
  console.log(myContract);
  let num = 50;
  // function store(uint256 num)
  myContract.methods.store(num)
    .send({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log("recippt:", JSON.stringify(recippt, null, 4))
    }).
    catch(error => {
      console.log(error)
    }
    )
}

var callRetrieveOnLocalGanache = async function () {
  // let web3 = new Web3("http://localhost:8545");
  var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545/'));
  const accounts = await web3.eth.getAccounts();
  web3.eth.defaultAccount = accounts[0];
  console.log(web3.eth.defaultAccount);
  // var CoursetroContract = new web3.eth.Contract(abi);
  // var Coursetro = CoursetroContract.at(contractAddr);
  var myContract = new web3.eth.Contract(abi, contractAddr, { from: web3.eth.defaultAccount })

  console.log(myContract);
  let num = 50;
  // function store(uint256 num)
  myContract.methods.retrieve()
    .call({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log("recippt:", JSON.stringify(recippt, null, 4))
    }).
    catch(error => {
      console.log(error)
    }
    )
}

let contractAddr = '<deployed smart contract address>';
let abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retrieve",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

callStoreOnLocalGanache().then(() => {
  callRetrieveOnLocalGanache();
})
  .catch(msg => {
    console.log(msg);
  });

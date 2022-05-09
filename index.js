var Web3 = require('web3');
var contractInstances = {} // actor maps to its smart contract interface
var contractAddresses = {} // actor maps to its smart contract addr
var accountsHDWallets = {} // actor maps to the its corresponding account obj;
var actorToBlockchain = {} // actor maps to its own blockchain network; for testing purpose
var usedHDWalletAddrs = []
var actorToSigner = {}
var actorToEtherContract = {}
var actorToIntAbi = {}
var actorToProvider = {}
var resetContractInstances = function () {
  contractInstances = {};
}
function pushContractInstances(actorname, instance) {
  contractInstances[actorname] = instance;
}
var getContractInstanceByName = function (actorname) {
  return contractInstances[actorname];
}
var getContractInstances = function () {
  return contractInstances;
}



var callStoreOnLocalGanache = async function () {
  // let web3 = new Web3("http://localhost:8545");
  var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));
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
      console.log("recippt:",JSON.stringify(recippt,null,4))
      // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
      // let data = recippt.logs[0]['data']
      // let abiint = new ethers.utils.Interface(abi)
      // let decodedParameters = abiint.decodeEventLog("FSMStateTransition", data);
      // let receipt = new Recipt();
      // receipt.transactionHash = recippt.transactionHash;
      // receipt.contractAddress = recippt.to;
      // receipt.from = recippt.from;
      // receipt.to = recippt.to;
      // receipt.logs = recippt.events['FSMStateTransition']['returnValues']["0"];
      // receipt.gasUsed = recippt.gasUsed;
      // let rawText = receipt.logs
      // receipt.txt = rawText
      // let [ipfsAddr, transactionId, oldStateid, newStateid] = rawText.split(",")
      // // console.log("raw msg from blockchain response:", ipfsAddr, transactionId, oldStateid, newStateid)
      // receipt.ipfsAddr = messageIPFSAddress
      // receipt.transactionId = transactionId
      // receipt.oldStateid = oldStateid
      // receipt.newStateid = newStateid
      // receipt.blockHash = recippt.blockHash;
      // receipt.blockNumber = recippt.blockNumber;
      // // lastWriteTimestamp
      // receipt.targettedData = targettedData;
      // receipt.lastReadTimestamp = lastReadTimestamp;
      // receipt.lastWriteTimestamp = Date.now();
      // common.transactionsviewer[currentActorName]['receipt'].push(receipt)
      // if (currentActorName != ENV.TOTALONCHAINNAME)
      //   client.files.write('/' + currentActorName + '_' + transactionId + '_' + Date.now(), new TextEncoder().encode(JSON.stringify(receipt)), { create: true }).then(r => {

      //     console.log("added file to ipfs:", r)
      //   })
      // return resolve(receipt);
    }).
    catch(error => {
      // let msg = 'getting recipt error:';
      console.log(error)
      // if (currentActorName != ENV.TOTALONCHAINNAME)

      //   client.files.write('/' + currentActorName + '_' + transactionId + '_' + Date.now(), new TextEncoder().encode(JSON.stringify(error)), { create: true }).then(r => {

      //     console.log("added file to ipfs:", r)
      //   })
      // reject(error)
    }
    )
}

var callRetrieveOnLocalGanache = async function () {
  // let web3 = new Web3("http://localhost:8545");
  var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));
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
    .send({ from: web3.eth.defaultAccount })
    .then(function (recippt) {
      console.log("recippt:",JSON.stringify(recippt,null,4))
      // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
      // let data = recippt.logs[0]['data']
      // let abiint = new ethers.utils.Interface(abi)
      // let decodedParameters = abiint.decodeEventLog("FSMStateTransition", data);
      // let receipt = new Recipt();
      // receipt.transactionHash = recippt.transactionHash;
      // receipt.contractAddress = recippt.to;
      // receipt.from = recippt.from;
      // receipt.to = recippt.to;
      // receipt.logs = recippt.events['FSMStateTransition']['returnValues']["0"];
      // receipt.gasUsed = recippt.gasUsed;
      // let rawText = receipt.logs
      // receipt.txt = rawText
      // let [ipfsAddr, transactionId, oldStateid, newStateid] = rawText.split(",")
      // // console.log("raw msg from blockchain response:", ipfsAddr, transactionId, oldStateid, newStateid)
      // receipt.ipfsAddr = messageIPFSAddress
      // receipt.transactionId = transactionId
      // receipt.oldStateid = oldStateid
      // receipt.newStateid = newStateid
      // receipt.blockHash = recippt.blockHash;
      // receipt.blockNumber = recippt.blockNumber;
      // // lastWriteTimestamp
      // receipt.targettedData = targettedData;
      // receipt.lastReadTimestamp = lastReadTimestamp;
      // receipt.lastWriteTimestamp = Date.now();
      // common.transactionsviewer[currentActorName]['receipt'].push(receipt)
      // if (currentActorName != ENV.TOTALONCHAINNAME)
      //   client.files.write('/' + currentActorName + '_' + transactionId + '_' + Date.now(), new TextEncoder().encode(JSON.stringify(receipt)), { create: true }).then(r => {

      //     console.log("added file to ipfs:", r)
      //   })
      // return resolve(receipt);
    }).
    catch(error => {
      // let msg = 'getting recipt error:';
      console.log(error)
      // if (currentActorName != ENV.TOTALONCHAINNAME)

      //   client.files.write('/' + currentActorName + '_' + transactionId + '_' + Date.now(), new TextEncoder().encode(JSON.stringify(error)), { create: true }).then(r => {

      //     console.log("added file to ipfs:", r)
      //   })
      // reject(error)
    }
    )
}

let contractAddr = '0x830C34dcEd0C052e2167E600DFB1C9024104f8A2';
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

callStoreOnLocalGanache();
callRetrieveOnLocalGanache();
const request = require('request');
const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash= ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();

  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor(){
    this.chain=[]

  }
  createGenesisBlock(){
    return new Block(0, new Date(), "Genesis block", "0");
  }
  getLastBlock(){
    return this.chain[this.chain.length-1];
  }
  addBlock(newBlock){
    newBlock.previousHash = this.getLastBlock().hash;
    newBlock.hash = newBlock.createHash();
    this.chain.push(newBlock);
  }
}

let Buccaneer = new Blockchain();
Buccaneer.addBlock(new Block(1, new Date(), {amount: 1}));
Buccaneer.addBlock(new Block(2, new Date(), {amount: 2}));

console.log(JSON.stringify(Buccaneer, null, 2));

const request = require('request');
const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash= ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.createHash();

  }

  createHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

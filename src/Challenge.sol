// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Challenge {
    string private data;
    
    constructor (string memory _data){
        data = _data;
    }

    function setData(string memory newData) public {
        data = newData;
    }

    function getData() public view returns(string memory) {
        return data;
    }
}

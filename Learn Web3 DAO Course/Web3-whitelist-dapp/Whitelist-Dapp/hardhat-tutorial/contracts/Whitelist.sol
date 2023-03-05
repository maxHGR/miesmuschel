//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

contract Whitelist {

    uint8 public maxWhiteListedAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhiteListedAddresses = _maxWhitelistedAddresses;
    }


    function addAddressToWhitelist() public {
        require(!whitelistedAddresses[msg.sender], 'Sender has already been whitelisted');

        require(numAddressesWhitelisted < maxWhiteListedAddresses, 'More addresses cant be added, limit reached');

        whitelistedAddresses[msg.sender] = true;

        numAddressesWhitelisted += 1;
    }

    
}
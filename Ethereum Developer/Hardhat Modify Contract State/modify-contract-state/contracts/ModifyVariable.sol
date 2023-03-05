//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  uint public y;
  uint public sum;

  constructor(uint _x, uint _y) {
    x = _x;
    y = _y;
  }

  function getSum() public {
    sum = x + y;
  }

  function modifyToLeet() public {
    x = 1337;
  }

}
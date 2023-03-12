// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Contract {
    uint256 public x;

    function changeX(uint256 _x) external {
        x = _x;
    }
}

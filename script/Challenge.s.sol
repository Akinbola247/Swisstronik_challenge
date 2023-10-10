// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "src/Challenge.sol";

contract ChallengeScript is Script {
    Challenge challenge;
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        challenge = new Challenge("Akinbola Kehinde");
        vm.stopBroadcast();
    }
}

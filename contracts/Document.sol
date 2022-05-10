// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Document words
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Document {
    string content;

    /**
     * @dev Store value in variable
     * @param newwords value to store
     */
    function setContent(string memory newwords) public {
        content = newwords;
    }

    /**
     * @dev Return value
     * @return value of 'content'
     */
    function getContent() public view returns (string memory) {
        return content;
    }

/**

 */
    function verify(
        bytes memory _message,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) public pure returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        // bytes32 prefixedHash = sha3(prefix, _message);
        bytes32 prefixedHash = keccak256(abi.encodePacked(prefix,_message));
        address signer = ecrecover(prefixedHash, _v, _r, _s);
        return signer;
    }
}

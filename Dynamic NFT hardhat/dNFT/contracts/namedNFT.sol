// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// updated to excact openzeppelin version (4.8.0)
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract ChainBattle is ERC721URIStorage {

    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => uint256) public tokenIdToLevels;
    
    constructor(string memory title, string memory main) ERC721 ("Chain Battles", "CBTLS") {
        title = _title;
        main = _main;
    }

    function generateCharacter(uint256 tokenId) public returns(string memory){
       // turned into array of bytes
        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
            '<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>',
            '<rect width="100%" height="100%" fill="black" />',
            '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',`${_title}`,'</text>',
            '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">', "Levels: ",`${_main}`,'</text>',
            '</svg>'
        );
        return string(
            // encoded version of svg turned into base64 (Base64.encode(svg))
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )    
        );
    }
   

    function getTokenURI(uint256 tokenId) public returns (string memory){
        // create a JSON-Object
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Chain Battles #', tokenId.toString(), '",',
                '"description": "Battles on chain",',
                '"image": "', generateCharacter(tokenId), '"',
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    function mint() public {
        // new nft gets assigned to level 0 
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        tokenIdToLevels[newItemId] = 0;
        _setTokenURI(newItemId, getTokenURI(newItemId));
    }


}
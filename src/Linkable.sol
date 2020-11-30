// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Linkable {
    using SafeMath for uint256;

    // _ownerLinkable: address of the owner.
    address private _ownerLinkable;

    // _addressProject: address of a project.
    address private _addressProject;

    // _addressCreator: address of a project creator.
    address private _addressCreator;

    // _addressInvest: address of an investissor.
    address private _addressInvest;

    // _id is a counter of the number of projects.
    // _id is also a project ID.
    uint256 private _id;

    // IdentityProject contains informations about the identity of the project.
    struct IdentityProject {
        uint256 _id;
        string projectName;
        string creatorName;
        string description;
        uint256 projectAmount;
        string location;
    }

    // idtProject: Mapping FROM an ID TO the struct of a project.
    // _id => struct IdentityProject
    mapping(uint256 => IdentityProject) public idtProject;

    // projectAddr: Mapping FROM an ID TO the address affiliated with.
    // _id => _addressProject
    mapping(uint256 => address) public projectAddr;

    // projectId: Mapping FROM a registered project address TO an ID.
    // _addressProject => _id
    mapping(address => uint256) public projectId;

    constructor() public {
        _ownerLinkable = address(0x185D07b967ACD3b2600387656153b5725ddD01D7);
        _id = 0;
        projectAddr[_id] = _addressProject;
    }

    function register() public {}

    function getAddrProject() public {}

    function getAddrCreator() public {}

    function donate() public {}
}

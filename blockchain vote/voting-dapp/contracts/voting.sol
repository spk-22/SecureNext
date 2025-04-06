// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    struct Voter {
        string electionID;
        bytes32 irisHash;
        bool isRegistered;
        bool hasVoted;
    }

    mapping(address => Voter) public voters;
    mapping(string => uint) public votes;
    string[] public candidateList;

    // Register a candidate (optional)
    function addCandidate(string memory candidate) public onlyAdmin {
        candidateList.push(candidate);
    }

    // Register a voter with their address, Voter ID, and iris hash
    function registerVoter(address _voterAddr, string memory _electionID, bytes32 _irisHash) public onlyAdmin {
        require(!voters[_voterAddr].isRegistered, "Already registered");

        voters[_voterAddr] = Voter({
            electionID: _electionID,
            irisHash: _irisHash,
            isRegistered: true,
            hasVoted: false
        });
    }

    // Vote using Election ID and Iris Hash
    function vote(string memory _electionID, bytes32 _irisHash, string memory candidate) public {
        Voter storage v = voters[msg.sender];

        require(v.isRegistered, "Not a registered voter");
        require(!v.hasVoted, "Already voted");
        require(keccak256(bytes(v.electionID)) == keccak256(bytes(_electionID)), "Election ID mismatch");
        require(v.irisHash == _irisHash, "Iris authentication failed");

        v.hasVoted = true;
        votes[candidate]++;
    }

    // Get total votes for a candidate
    function getVotes(string memory candidate) public view returns (uint) {
        return votes[candidate];
    }

    // Get all candidates
    function getCandidates() public view returns (string[] memory) {
        return candidateList;
    }

    // Check if someone has voted
    function hasVoted(address _voter) public view returns (bool) {
        return voters[_voter].hasVoted;
    }
}

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import VotingContract from "../artifacts/contracts/Voting.sol/Voting.json";

const contractAddress = "0x4C10A3e29f356293ba43F54d95E2D70c1965e18d";

export default function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [role, setRole] = useState("voter");

  // Admin State
  const [candidate, setCandidate] = useState("");
  const [voterAddr, setVoterAddr] = useState("");
  const [voterID, setVoterID] = useState("");
  const [iris, setIris] = useState("");

  // Voter State
  const [electionID, setElectionID] = useState("");
  const [voterIris, setVoterIris] = useState("");
  const [voteFor, setVoteFor] = useState("");

  // Display
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    connectWallet();
  }, []);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);
      const voteContract = new ethers.Contract(
        contractAddress,
        VotingContract.abi,
        signer
      );
      setContract(voteContract);
      getCandidates(voteContract);
    } else {
      alert("Install MetaMask!");
    }
  }

  async function getCandidates(contract) {
    const list = await contract.getCandidates();
    setCandidates(list);
    const res = {};
    for (let c of list) {
      res[c] = await contract.getVotes(c);
    }
    setResults(res);
  }

  async function addCandidate() {
    await contract.addCandidate(candidate);
    alert("Candidate added");
    getCandidates(contract);
  }

  async function registerVoter() {
    const irisHash = ethers.keccak256(ethers.toUtf8Bytes(iris));
    await contract.registerVoter(voterAddr, voterID, irisHash);
    alert("Voter registered");
  }

  async function vote() {
    const irisHash = ethers.keccak256(ethers.toUtf8Bytes(voterIris));
    try {
      await contract.vote(electionID, irisHash, voteFor);
      alert("Voted successfully");
      getCandidates(contract);
    } catch (e) {
      alert("Voting failed: " + e.reason);
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🗳️ Blockchain Voting System</h1>

      <div className="mb-4">
        <button onClick={() => setRole("admin")} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Admin</button>
        <button onClick={() => setRole("voter")} className="px-4 py-2 bg-green-500 text-white rounded">Voter</button>
      </div>

      <p className="mb-4">Connected Account: {account}</p>

      {role === "admin" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          <div>
            <input
              type="text"
              placeholder="Candidate Name"
              value={candidate}
              onChange={(e) => setCandidate(e.target.value)}
              className="border p-2 mr-2"
            />
            <button onClick={addCandidate} className="bg-blue-600 text-white px-4 py-2 rounded">Add Candidate</button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Voter Address"
              value={voterAddr}
              onChange={(e) => setVoterAddr(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Election ID"
              value={voterID}
              onChange={(e) => setVoterID(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Iris (hashed)"
              value={iris}
              onChange={(e) => setIris(e.target.value)}
              className="border p-2 mr-2"
            />
            <button onClick={registerVoter} className="bg-purple-600 text-white px-4 py-2 rounded">Register Voter</button>
          </div>
        </div>
      )}

      {role === "voter" && (
        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Voter Panel</h2>
          <input
            type="text"
            placeholder="Election ID"
            value={electionID}
            onChange={(e) => setElectionID(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Iris (as string)"
            value={voterIris}
            onChange={(e) => setVoterIris(e.target.value)}
            className="border p-2 mr-2"
          />
          <select
            onChange={(e) => setVoteFor(e.target.value)}
            className="border p-2 mr-2"
          >
            <option value="">Select Candidate</option>
            {candidates.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
          <button onClick={vote} className="bg-green-600 text-white px-4 py-2 rounded">Vote</button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">📊 Current Results</h2>
        {candidates.map((c, i) => (
          <p key={i}>{c}: {results[c]?.toString() || 0} votes</p>
        ))}
      </div>
    </div>
  );
}

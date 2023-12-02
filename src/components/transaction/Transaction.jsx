import { addDoc, collection, getFirestore } from "@firebase/firestore";
import React, { useState } from "react";
import "../../firebaseconfig";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [numericAmount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const db = getFirestore();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!walletAddress.trim()) {
      setError("Wallet address field cannot be empty.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setError("Please enter a valid Ethereum wallet address.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const numericAmountValue = parseFloat(numericAmount);
    if (
      isNaN(numericAmountValue) ||
      numericAmountValue < 0 ||
      numericAmountValue > 10000
    ) {
      setError("Please enter a valid amount between 0 and 10,000.");
      setSuccessMessage("");
      setTimeout(() => setError(""), 3000); // Clear error message after 30 seconds
      return;
    }

    // Clear previous error messages if any
    setError("");

    // Set success message
    setSuccessMessage("Transaction successful!");

    setTimeout(() => setSuccessMessage(""), 3000);

    // Call saveData only if there are no validation errors
    if (!error) {
      saveData();
    }
  };

  // Data base
  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "myTransactions"), {
        wallet: walletAddress,
        amount: numericAmount,
      });
      setSuccessMessage("Data is Saved on Firebase!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
      setError("Data is not saved on Firebase. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      <h1 className="text-black text-lg bg-orange-500 rounded-lg text-center font-bold m-2 p-2">
        Transaction Details
      </h1>
      <div className="container mx-auto mt-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md text-black"
        >
          {error && (
            <div className="mb-4 bg-red-500 text-white rounded-lg m-2 p-2 text-center">
              <p>{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 bg-green-500 text-white rounded-lg m-2 p-2 text-center">
              <p>{successMessage}</p>
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-sm font-medium text-gray-600"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-600"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={numericAmount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
            // onClick={saveData}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Transaction;

// Simulated balance data
let balance = 100;

// Function to get balance
function getBalance() {
    // Simulate fetching balance from the blockchain
    document.getElementById("balance").innerText = balance + " ICP";
}

// Function to send tokens
document.getElementById("sendForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const recipient = document.getElementById("recipient").value;
    const amount = parseInt(document.getElementById("amount").value);

    if (amount <= balance && amount > 0) {
        // Simulate sending tokens
        balance -= amount;
        document.getElementById("sendStatus").innerText = `Successfully sent ${amount} ICP to ${recipient}`;
        getBalance(); // Update balance after sending
    } else {
        document.getElementById("sendStatus").innerText = "Insufficient balance or invalid amount";
    }

    // Reset the form
    document.getElementById("sendForm").reset();
});

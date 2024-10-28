// script.js

// Store card value
const cardDetails = {
  bankName: "BANK NAME",
  cardNumber: "1234 5678 9012 3456",
  expiry: "01/25",
  cardholderName: "CARDHOLDER NAME",
  cvv: "123"
};

// Example: Log the card details to the console
console.log("Card Details: ", cardDetails);

// Adding click event to rotate the card (alternative interaction)
const card = document.querySelector('.debit-card');
card.addEventListener('click', () => {
  card.classList.toggle('rotate');
});

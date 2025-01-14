document.addEventListener("DOMContentLoaded", function () {
    const askButton = document.getElementById("ask-button");
    const card = document.getElementById("card");

    let cardOpen = false; // Initialize card state

    // Define the function to handle the Ask button click event
    function handleAskButtonClick() {
        if (!cardOpen) {
            card.style.right = "55px"; // Slide up the card
            cardOpen = true; // Update card state
        } else {
            card.style.right = "-600px"; // Slide down the card
            cardOpen = false; // Update card state
        }
    }

    // Attach click event listener to the Ask button
    askButton.addEventListener("click", handleAskButtonClick);
});

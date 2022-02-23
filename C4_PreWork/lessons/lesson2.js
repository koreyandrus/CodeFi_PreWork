// Grab everything I need from html
const priceInput = document.querySelector("[name=price]");
const quantityInput = document.querySelector("[name=quantity]");
const quantityDisplay = document.querySelector(".quantity-badge");
const total = document.querySelector(".total");

// Create functions
function calculateTotal(){
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity;

    total.innerText = '$' + cost.toFixed(2);
}

function updateQuantityDisplay() {
    const quantity = quantityInput.value;
    quantityDisplay.innerText = quantity;
}

// On first run
calculateTotal();


// add event listeners

priceInput.addEventListener('input', calculateTotal);
quantityInput.addEventListener('input', calculateTotal);
quantityInput.addEventListener('input', updateQuantityDisplay);
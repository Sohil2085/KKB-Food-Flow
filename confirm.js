
// Function to update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cartCount');
    
    if (cartCount) {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Hide count if zero
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Function to get cart total
function getCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to display order summary
function displayOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotalContainer = document.getElementById('orderTotal');
    const estimatedTimeElement = document.getElementById('estimatedTime');
    
    if (!orderItemsContainer || !orderTotalContainer || !estimatedTimeElement) return;
    
    // Redirect to menu if cart is empty
    if (cart.length === 0) {
        window.location.href = 'menu.html';
        return;
    }
    
    // Display order items
    orderItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="item-details">
                <span>${item.name} x ${item.quantity}</span>
            </div>
            <div class="item-price">
                ₹${(item.price * item.quantity).toFixed(2)}
            </div>
        `;
        orderItemsContainer.appendChild(orderItem);
    });
    
    // Update order total
    const cartTotal = getCartTotal(cart);
    const tax = cartTotal * 0.08;
    
    orderTotalContainer.innerHTML = `
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹${cartTotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax:</span>
            <span>₹${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
            <span>Total:</span>
            <span>₹${(cartTotal + tax).toFixed(2)}</span>
        </div>
    `;
    
    // Calculate and display estimated preparation time
    // Base time + additional time per item
    const baseTime = 10; // minutes
    const timePerItem = 5; // minutes
    const estimatedTime = baseTime + (cart.reduce((total, item) => total + item.quantity, 0) * timePerItem);
    
    estimatedTimeElement.textContent = `${estimatedTime} minutes`;
}

// Initialize confirmation page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    displayOrderSummary();
});

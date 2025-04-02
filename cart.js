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

// Function to update cart item quantity
function updateCartItemQuantity(itemId, change) {
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Find item in cart
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex === -1) return;
    
    // Update quantity
    cart[itemIndex].quantity += change;
    
    // Remove item if quantity is 0 or less
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh cart display
    displayCart();
    updateCartCount();
}

// Function to remove cart item
function removeCartItem(itemId) {
    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove item from cart
    cart = cart.filter(item => item.id !== itemId);
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh cart display
    displayCart();
    updateCartCount();
}

// Function to save order to history
function saveOrderToHistory() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) return;
    
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    
    const cartTotal = getCartTotal(cart);
    
    orderHistory.push({
        orderId: Date.now(),
        date: new Date().toLocaleString(),
        items: [...cart],
        subtotal: cartTotal,
        tax: cartTotal * 0.08,
        total: cartTotal * 1.08
    });
    
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// Function to display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSummaryContainer = document.getElementById('cartSummary');
    const emptyCartContainer = document.getElementById('emptyCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (!cartItemsContainer || !cartSummaryContainer || !emptyCartContainer) return;
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartSummaryContainer.style.display = 'none';
        emptyCartContainer.style.display = 'block';
        
        if (checkoutBtn) {
            checkoutBtn.style.display = 'none';
        }
        
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    cartSummaryContainer.style.display = 'block';
    emptyCartContainer.style.display = 'none';
    
    if (checkoutBtn) {
        checkoutBtn.style.display = 'inline-block';
    }
    
    // Clear current items
    cartItemsContainer.innerHTML = '';
    
    // Add each item to the cart
    // cart.forEach(item => {
    //     const cartItem = document.createElement('div');
    //     cartItem.className = 'cart-item';
    //     cartItem.innerHTML = `
    //         <div class="cart-item-details">
    //             <h3>${item.name}</h3>
    //             <p>₹${item.price.toFixed(2)}</p>
    //         </div>
            
    //         <div class="cart-item-actions">
    //             <div class="quantity-control">
    //                 <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
    //                 <span class="quantity">${item.quantity}</span>
    //                 <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
    //             </div>
                
    //             <button class="remove-btn" data-id="${item.id}">Remove</button>
    //         </div>
    //     `;
    //     cartItemsContainer.appendChild(cartItem);
    // });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const action = this.getAttribute('data-action');
            
            updateCartItemQuantity(itemId, action === 'increase' ? 1 : -1);
        });
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeCartItem(itemId);
        });
    });
    
    // Update cart summary
    const cartTotal = getCartTotal(cart);
    const tax = cartTotal * 0.08;
    
    cartSummaryContainer.innerHTML = `
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
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    displayCart();
    
    // Add event listener to checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            saveOrderToHistory();
        });
    }
});

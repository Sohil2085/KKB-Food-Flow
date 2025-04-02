
// Function to show notification
function showNotification(message, type = 'success', duration = 3000) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

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

// Function to clear cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Function to display total amount
function displayTotalAmount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmountElement = document.getElementById('totalAmount');
    
    if (!totalAmountElement) return;
    
    // Redirect to menu if cart is empty
    if (cart.length === 0) {
        window.location.href = 'menu.html';
        return;
    }
    
    // Calculate and display total amount
    const cartTotal = getCartTotal(cart);
    const tax = cartTotal * 0.08;
    const totalAmount = cartTotal + tax;
    
    totalAmountElement.textContent = `₹${totalAmount.toFixed(2)}`;
}

// Initialize payment page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    displayTotalAmount();
    
    // Handle payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    let selectedMethod = '';
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove selected class from all methods
            paymentMethods.forEach(m => m.classList.remove('selected'));
            
            // Add selected class to clicked method
            this.classList.add('selected');
            
            // Store selected method
            selectedMethod = this.getAttribute('data-method');
        });
    });
    
    // Handle payment form submission
    const paymentForm = document.getElementById('paymentForm');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!selectedMethod) {
                showNotification('Please select a payment method', 'error');
                return;
            }
            
            // Show processing state
            if (confirmOrderBtn) {
                confirmOrderBtn.textContent = 'Processing...';
                confirmOrderBtn.disabled = true;
            }
            
            // Simulate payment processing
            setTimeout(function() {
                // Clear cart
                clearCart();
                
                // Save order success state in session storage
                sessionStorage.setItem('orderSuccess', 'true');
                
                // Show success notification
                showNotification('Order Placed Successfully! Your order will be ready soon.', 'success', 5000);
                
                // Redirect to home page after short delay
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 2000);
            }, 1500);
        });
    }
});

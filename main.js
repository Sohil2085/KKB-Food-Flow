
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

// Function to update cart count in the header
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

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Handle search functionality if on home page
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                window.location.href = `menu.html?search=${encodeURIComponent(searchInput.value)}`;
            }
        });
    }
    
    // Check for order success message from local storage
    const orderSuccess = sessionStorage.getItem('orderSuccess');
    
    if (orderSuccess === 'true') {
        // Show success message with the new notification system
        showNotification('Order Placed Successfully! Your order will be ready soon.', 'success', 5000);
        
        // Clear the flag
        sessionStorage.removeItem('orderSuccess');
    }
});

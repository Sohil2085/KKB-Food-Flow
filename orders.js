
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

// Function to display order history
function displayOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const orderHistoryContainer = document.getElementById('orderHistory');
    const emptyHistoryContainer = document.getElementById('emptyHistory');
    
    if (!orderHistoryContainer || !emptyHistoryContainer) return;
    
    // Show/hide empty history message
    if (orderHistory.length === 0) {
        orderHistoryContainer.style.display = 'none';
        emptyHistoryContainer.style.display = 'block';
        return;
    }
    
    orderHistoryContainer.style.display = 'block';
    emptyHistoryContainer.style.display = 'none';
    
    // Clear current content
    orderHistoryContainer.innerHTML = '';
    
    // Sort orders by date (newest first)
    const sortedOrders = [...orderHistory].reverse();
    
    // Display each order
    sortedOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-card';
        
        // Create order header
        const orderHeader = document.createElement('div');
        orderHeader.className = 'order-header';
        orderHeader.innerHTML = `
            <div class="order-id">
                <h3>Order #${order.orderId.toString().slice(-6)}</h3>
                <span class="order-date">${order.date}</span>
            </div>
            <div class="order-total">
                <span>₹${order.total.toFixed(2)}</span>
                <button class="toggle-details-btn">View Details</button>
            </div>
        `;
        
        // Create order details (initially hidden)
        const orderDetails = document.createElement('div');
        orderDetails.className = 'order-details';
        orderDetails.style.display = 'none';
        
        // Add items to order details
        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `
                <div class="order-item">
                    <div class="item-details">
                        <span>${item.name} x ${item.quantity}</span>
                    </div>
                    <div class="item-price">
                        ₹${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            `;
        });
        
        // Add order summary
        orderDetails.innerHTML = `
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-summary">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₹${order.subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Tax:</span>
                    <span>₹${order.tax.toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>₹${order.total.toFixed(2)}</span>
                </div>
            </div>
        `;
        
        // Add elements to the order card
        orderElement.appendChild(orderHeader);
        orderElement.appendChild(orderDetails);
        
        // Add the order card to the container
        orderHistoryContainer.appendChild(orderElement);
        
        // Add event listener to toggle details button
        const toggleBtn = orderElement.querySelector('.toggle-details-btn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                const details = this.closest('.order-card').querySelector('.order-details');
                const isHidden = details.style.display === 'none';
                
                details.style.display = isHidden ? 'block' : 'none';
                this.textContent = isHidden ? 'Hide Details' : 'View Details';
            });
        }
    });
}

// Initialize orders page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    displayOrderHistory();
});

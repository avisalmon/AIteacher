// AIteacher - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('AIteacher loaded');
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items (optional: remove this block if you want multiple open)
            // const allItems = document.querySelectorAll('.accordion-item');
            // allItems.forEach(item => item.classList.remove('active'));
            
            // Toggle current item
            if (isActive) {
                accordionItem.classList.remove('active');
            } else {
                accordionItem.classList.add('active');
            }
        });
    });
});

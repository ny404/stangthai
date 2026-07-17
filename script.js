document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    item.style.display = 'block';
                    // Optional: Add a subtle fade-in animation class here
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-details-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = button.getAttribute('onclick').match(/\d+/)[0];
            const details = document.getElementById('details' + recipeId);

            // Hide all other details
            document.querySelectorAll('.details').forEach(detail => {
                if (detail.id !== 'details' + recipeId) {
                    detail.style.display = 'none';
                }
            });

            // Toggle visibility of the clicked recipe's details
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
});



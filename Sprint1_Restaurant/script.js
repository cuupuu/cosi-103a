function showDetails(recipeNumber) {
    const details = document.getElementById(`details${recipeNumber}`);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
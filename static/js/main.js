document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const content = this.nextElementSibling;
            
            // Затваряме другите отворени менюта
            document.querySelectorAll('.dropdown-content').forEach(el => {
                if (el !== content) el.classList.remove('show');
            });

            content.classList.toggle('show');
        });
    });

    // Затваряне при клик извън менюто
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-content').forEach(el => {
                el.classList.remove('show');
            });
        }
    }
});
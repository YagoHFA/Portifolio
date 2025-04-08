document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetModal = document.querySelector(tab.dataset.target);

            // Hide all modals first
            modals.forEach(modal => modal.style.display = "none");

            // Show the selected modal
            targetModal.style.display = "block";
        });
    });

    // Close modal when close button is clicked
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.style.display = "none";
        });
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        const prevButton = carousel.nextElementSibling.querySelector('.prev');
        const nextButton = carousel.nextElementSibling.querySelector('.next');

        let currentIndex = 0;

        const showItem = (index) => {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
            showItem(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
            showItem(currentIndex);
        });

        // Show the first item by default
        showItem(currentIndex);
    });
});
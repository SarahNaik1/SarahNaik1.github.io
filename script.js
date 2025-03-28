window.addEventListener('scroll', () => {
    const fullPageImage = document.getElementById('fullPageImage');
    const mainImage = document.querySelector('.main-image');
    const imageCard = document.getElementById('imageCard');
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY;

    // Calculate the scroll progress (0 to 1)
    const scrollProgress = Math.min(scrollPosition / 500, 1); // Adjust 500 for smoother transition

    // Transform full-page image into a card
    if (scrollPosition > 100) {
        // Shrink the image to fit into the card
        const cardWidth = 300; // Width of the card
        const cardHeight = 200; // Height of the card
        const scaleX = cardWidth / fullPageImage.offsetWidth;
        const scaleY = cardHeight / fullPageImage.offsetHeight;
        const scale = Math.min(scaleX, scaleY);

        // Apply scaling and positioning
        mainImage.style.transform = `scale(${scale})`;
        mainImage.style.borderRadius = '10px';
        mainImage.style.position = 'fixed';
        mainImage.style.top = `calc(50% - ${cardHeight / 2}px)`; // Center vertically
        mainImage.style.left = '20px'; // Align with the card
        mainImage.style.width = `${cardWidth}px`;
        mainImage.style.height = `${cardHeight}px`;

        // Shrink the full-page image container
        fullPageImage.style.height = `${cardHeight}px`;

        // Move the image into the card
        if (!imageCard.querySelector('.card-image')) {
            const cardImage = document.createElement('img');
            cardImage.src = mainImage.src;
            cardImage.alt = mainImage.alt;
            cardImage.classList.add('card-image');
            imageCard.prepend(cardImage); // Add the image to the card
        }

        // Add text to the card
        if (!imageCard.querySelector('.card-text')) {
            const cardText = document.createElement('div');
            cardText.classList.add('card-text');
            cardText.innerHTML = `
                <h2>Sarah Naik</h2>
                <p>Results-driven Full Stack Tech Lead with 5 years of experience in software development, system architecture, and team leadership. Adept at designing scalable solutions, driving agile methodologies, and mentoring engineers to achieve high-performance outcomes. Passionate about leveraging cutting-edge technologies to solve complex business problems and drive innovation in software development.</p>
            `;
            imageCard.appendChild(cardText); // Add the text to the card
        }

        // Fade in the card
        imageCard.style.opacity = scrollProgress;
    } else {
        // Reset the image and card
        mainImage.style.transform = 'scale(1)';
        mainImage.style.borderRadius = '0';
        mainImage.style.position = 'absolute';
        mainImage.style.top = '0';
        mainImage.style.left = '0';
        mainImage.style.width = '100%';
        mainImage.style.height = '100%';
        mainImage.style.zIndex = 'auto';
        fullPageImage.style.height = '100vh';
        imageCard.style.opacity = '0';

        // Move the image back to the full-page container
        const cardImage = imageCard.querySelector('.card-image');
        if (cardImage) {
            // Animate the card image back to the full-page image
            cardImage.style.transition = 'all 0.5s ease';
            cardImage.style.position = 'fixed';
            cardImage.style.top = `calc(50% - ${cardImage.offsetHeight / 2}px)`;
            cardImage.style.left = '20px';
            cardImage.style.width = `${cardImage.offsetWidth}px`;
            cardImage.style.height = `${cardImage.offsetHeight}px`;

            // Wait for the transition to complete
            setTimeout(() => {
                cardImage.style.transition = 'none';
                fullPageImage.appendChild(mainImage); // Move the image back
                imageCard.removeChild(cardImage); // Remove the image from the card
            }, 500); // Match the transition duration
        }

        // Remove the text from the card
        const cardText = imageCard.querySelector('.card-text');
        if (cardText) {
            imageCard.removeChild(cardText); // Remove the text from the card
        }
    }

    // Show sections on scroll
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition > sectionTop - window.innerHeight + sectionHeight / 2) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimelineItems() {
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8; // Trigger point for revealing

        if (itemTop < triggerPoint) {
            // Add a delay to reveal items one by one
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100); // Adjust delay (200ms per item)
        }
    });
}

window.addEventListener('scroll', revealTimelineItems);

// Trigger the function on page load to check for items already in view
revealTimelineItems();

const stepperItems = document.querySelectorAll('.stepper-item');

function revealStepperItems() {
    stepperItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8; // Trigger point for revealing

        if (itemTop < triggerPoint) {
            // Add a delay to reveal items one by one
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200); // Adjust delay (200ms per item)
        }
    });
}

window.addEventListener('scroll', revealStepperItems);

// Trigger the function on page load to check for items already in view
revealStepperItems();

const projectIttems = document.querySelectorAll('.project-item');
const techItems = document.querySelectorAll('.tech-item');

function handleScroll() {
    projectItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;

        // Fade-in/fade-out effect for project items
        if (isVisible) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }

        // Highlight tech stack for the currently visible project
        if (isVisible) {
            const techStack = item.getAttribute('data-tech-stack');
            const techStackArray = techStack.split(',').map((tech) => tech.trim());

            techItems.forEach((techItem) => {
                if (techStackArray.includes(techItem.textContent)) {
                    techItem.classList.add('highlighted');
                } else {
                    techItem.classList.remove('highlighted');
                }
            });
        }
    });
}

// Add scroll event listener to handle both effects
window.addEventListener('scroll', handleScroll);

// Trigger the function on page load to check for items already in view
handleScroll();

// Carousel functionality
document.querySelectorAll('.carousel').forEach((carousel) => {
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');

    let currentIndex = 0;

    // Function to update button visibility
    function updateButtons() {
        if (items.length <= 1) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex === items.length - 1 ? 'none' : 'block';
        }
    }

    // Function to show the next image
    function showNext() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
        updateButtons();
    }

    // Function to show the previous image
    function showPrev() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
        updateButtons();
    }

    // Add click event listeners to the buttons
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Initialize button visibility
    updateButtons();
});

document.addEventListener("DOMContentLoaded", function () {
    const certificationContainers = document.querySelectorAll(".certification-container");

    // Function to add visible class with delay
    function animateContainers(containers, className, delay) {
        containers.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add(className);
            }, index * delay); // Add delay based on index
        });
    }

    // Animate certifications timeline
    const certificationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateContainers(certificationContainers, "certification-visible", 300); // 300ms delay
                    certificationObserver.disconnect(); // Stop observing after animation starts
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the timeline is visible
        }
    );

    certificationObserver.observe(document.querySelector(".certification-timeline"));
});

document.addEventListener("DOMContentLoaded", function () {
    const awardContainers = document.querySelectorAll(".award-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("award-visible");
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the card is visible
        }
    );

    awardContainers.forEach((container) => {
        observer.observe(container);
    });
});

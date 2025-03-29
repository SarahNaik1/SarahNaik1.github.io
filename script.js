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

const projectItems = document.querySelectorAll('.project-item');
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


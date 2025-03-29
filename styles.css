body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    scroll-behavior: smooth; /* Enable smooth scrolling */
}

.navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background-color: rgba(18, 18, 18, 0.8);
    padding: 10px;
    border-radius: 25px;
}

.nav-links {
    position: relative;
    display: flex;
    gap: 15px;
}

.nav-links a::after {
    content: attr(data-description); /* Use the data-description attribute */
    position: absolute;
    top: 100%; /* Position below the SVG */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0; /* Hide by default */
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 1000;
}

/* Show tooltip on hover */
.nav-links a:hover::after {
    opacity: 1;
    visibility: visible;
}


.nav-svg {
    width: 40px;
    height: 40px;
    fill: #ffffff;
    transition: transform 0.3s ease, fill 0.3s ease;
}

.nav-svg:hover {
    transform: scale(1.2);
    fill: #ff4081; /* Change to your preferred hover color */
}

/* .full-page-image {
    height: 100vh;
    overflow: hidden;
    position: relative;
    transition: height 0.5s ease;
} */

/* .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
} */

.container {
    display: flex;
    margin-top: 0; /* Remove the 100vh margin */
}

.image-card {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    background: #B19CD7;
    padding: 20px;
    border-radius: 10px;
    z-index: 100;
}

.image-card.visible {
    opacity: 1;
}

.card-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.card-text {
    margin-top: 10px;
}

.content {
    margin-left: 340px;
    padding: 20px;
}

@media (max-width: 768px) {
    .image-card {
        position: relative;
        width: 100vw;
        height: 100vh;
        padding: 40px 20px;
    }
    
    .card-image {
        width: 200px;
        height: 200px;
    }
    
    .main-content {
        margin-left: 0;
    }
    
    /* Hide after scrolling */
    body.scrolled-past-hero .image-card {
        display: none;
    }
}

.section {
    margin-left: 50px;
    margin-bottom: 50px;
    padding-top: 60px; /* Add padding to account for fixed navbar */
    opacity: 1;
    transform: translateY(50px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}

.navbar svg {
    width: 30px;
    height: 30px;
    fill: #FFFFFF;
    transition: fill 0.3s ease;
}

.navbar a {
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}

.navbar a:hover {
    background-color: #050505;
}

/* Timeline Container */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Timeline Line */
.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: #B19CD7; /* Timeline line color */
    transform: translateX(-50%);
    z-index: -1; /* Move the line behind the content */
    margin: 50px;
}

/* Timeline Item */
.timeline-item {
    padding: 20px 0; /* Adjust padding */
    position: relative;
    width: 50%;
    opacity: 0; /* Hide items initially */
    transform: translateY(50px); /* Move items down initially */
    transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Revealed Timeline Item */
.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Timeline Item Alignment */
.timeline-item:nth-child(odd) {
    left: 0;
    text-align: right;
    padding-right: 100px; /* Increase padding to avoid overlap */
}

.timeline-item:nth-child(even) {
    left: 50%;
    text-align: left;
    padding-left: 100px; /* Increase padding to avoid overlap */
}

/* Timeline Date */
.timeline-date {
    font-weight: bold;
    color: #B19CD7; /* Date color */
    margin-bottom: 10px;
}

/* Timeline Content */
.timeline-content {
    background-color: rgba(255, 255, 255, 0.1); /* Content background */
    padding: 20px;
    border-radius: 10px;
    position: relative;
}

/* Timeline Content Arrow */
.timeline-content::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border-style: solid;
}

/* Arrow for Odd Items */
.timeline-item:nth-child(odd) .timeline-content::before {
    right: -10px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.1);
}

/* Arrow for Even Items */
.timeline-item:nth-child(even) .timeline-content::before {
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
}

/* Responsive Timeline */
@media (max-width: 768px) {

    section {
        padding: 30px 15px;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
        text-align: left !important;
    }

    .timeline-item:nth-child(even) {
        left: 0;
    }

    .timeline-content::before {
        left: 60px;
        border-width: 10px 10px 10px 0;
        border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
    }
}

.container svg {
    width: 30px;
    height: 30px;
    fill: #FFFFFF;
    transition: fill 0.3s ease;
    margin-top: 10px;
    margin-right: 10px;
}

/* Stepper Timeline Container */
.stepper-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Stepper Item */
.stepper-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;
    opacity: 0; /* Hide items initially */
    transform: translateY(50px); /* Move items down initially */
    transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Revealed Stepper Item */
.stepper-item.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Stepper Icon */
.stepper-icon {
    font-size: 24px;
    margin-right: 20px;
    background-color: #B19CD7; /* Icon background color */
    color: #ffffff; /* Icon color */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* Stepper Content */
.stepper-content {
    background-color: rgba(255, 255, 255, 0.1); /* Content background */
    padding: 20px;
    border-radius: 10px;
    flex: 1;
}

/* Stepper Date */
.stepper-date {
    font-weight: bold;
    color: #B19CD7; /* Date color */
    margin-bottom: 10px;
}

/* Responsive Stepper Timeline */
@media (max-width: 768px) {
    .stepper-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .stepper-icon {
        margin-right: 0;
        margin-bottom: 10px;
    }
}

/* Projects Container */
.projects-container {
    display: flex;
    gap: 40px;
    padding: 20px;
}

/* Project List on the Left */
.project-list {
    flex: 1;
}

/* Project Item */
.project-item {
    background-color: rgba(255, 255, 255, 0.1); /* Project card background */
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    opacity: 0; /* Start with 0 opacity */
    transform: translateY(50px); /* Start slightly below */
    transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Revealed Project Item */
.project-item.visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Move to original position */
}

/* Project Image */
.project-image {
    width: 100%; /* Make the image take full width */
    height: auto; /* Maintain aspect ratio */
    overflow: hidden;
    border-radius: 10px;
    margin-top: 20px; /* Add space between content and image */
}

.project-image img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: cover;
}

/* Project Content */
.project-content h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #B19CD7; /* Project title color */
}

.project-content p {
    font-size: 0.9rem;
    color: #ffffff; /* Project description color */
}

/* Tech Stack Container on the Right */
.tech-stack-container {
    width: 300px;
    background-color: rgba(255, 255, 255, 0.1); /* Tech stack background */
    border-radius: 10px;
    padding: 20px;
    position: sticky;
    top: 20px; /* Stick to the top */
    height: fit-content;
}

.tech-stack-container h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #B19CD7; /* Tech stack title color */
}

/* Tech Stack Items */
.tech-stack {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to the next line */
    gap: 10px; /* Space between items */
}

@media (max-width: 768px) {
    
    .projects-container {
        flex-direction: column;
    }
    
    .tech-stack-container {
        width: 100%;
        position: static;
    }
}

.tech-item {
    font-size: 0.9rem;
    color: #ffffff; /* Tech stack text color */
    background-color: rgba(177, 156, 215, 0.2); /* Tech stack item background */
    padding: 8px 12px; /* Adjust padding to fit content */
    border-radius: 20px;
    display: inline-flex; /* Allow items to size to content */
    align-items: center;
    gap: 8px; /* Space between icon and text */
    text-align: center;
    white-space: nowrap; /* Prevent text from wrapping */
}

/* Highlighted Tech Item */
.tech-item.highlighted {
    background-color: #B19CD7; /* Highlight color */
    color: #121212; /* Text color for highlighted items */
}

/* Icons */
.tech-item i {
    font-size: 1rem; /* Adjust icon size */
}

html {
    scroll-behavior: smooth;
}

/* Carousel Container */
.carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
}

/* Carousel Inner */
.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
}

/* Carousel Item */
.carousel-item {
    min-width: 100%;
    box-sizing: border-box;
    display: none; /* Hide all items by default */
}

.carousel-item.active {
    display: block; /* Show the active item */
}

.carousel-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Carousel Buttons */
.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(177, 156, 215, 0.2);; /* Dark mode background */
    border: none;
    padding: 10px 15px; /* Rectangular padding */
    cursor: pointer;
    font-size: 1.2rem;
    color: #ffffff; /* Light text color for dark mode */
    z-index: 10;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px; /* Slightly rounded corners */
}

.carousel-button.prev {
    left: 10px;
}

.carousel-button.next {
    right: 10px;
}

.carousel-button:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Slightly lighter on hover */
    color: #B19CD7; /* Highlight color on hover */
}

/* Hide buttons if there's only one image */
.carousel:has(.carousel-item:only-of-type) .carousel-button {
    display: none;
}

.award-timeline {
    position: relative;
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
}

.award-timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #B19CD7; /* Light line */
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px; /* Center the line */
    z-index: 0; /* Ensure the line is behind the cards */
}

.award-container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    box-sizing: border-box; /* Ensure padding is included in width */
    opacity: 0; /* Initially hidden */
    transform: translateY(50px); /* Start slightly below */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.award-container.award-visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Move to original position */
}

.award-container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #B19CD7; /* Dark background */
    border: 4px solid #B19CD7; /* Accent color */
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.award-left {
    left: 0;
}

.award-left::after {
    right: -16px; /* Adjust marker position for left containers */
}

.award-right {
    left: 50%;
}

.award-right::after {
    left: -16px; /* Adjust marker position for right containers */
}

.award-left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #1e1e1e; /* Dark arrow */
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #1e1e1e;
}

.award-right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #1e1e1e; /* Dark arrow */
    border-width: 10px 10px 10px 0;
    border-color: transparent #1e1e1e transparent transparent;
}

.award-content {
    padding: 20px 30px;
    background-color: #1e1e1e; /* Darker background for content */
    position: relative;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Darker shadow */
    color: #e0e0e0; /* Light text */
}

.award-content h2 {
    color: #B19CD7; /* Accent color for headings */
}

@media screen and (max-width: 600px) {
    .award-timeline::after {
        left: 31px;
    }

    .award-container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .award-container::before {
        left: 60px;
        border: medium solid #1e1e1e; /* Dark arrow */
        border-width: 10px 10px 10px 0;
        border-color: transparent #1e1e1e transparent transparent;
    }

    .award-left::after,
    .award-right::after {
        left: 15px;
    }

    .award-right {
        left: 0%;
    }

    .award-left {
        left: 0; /* Reset left alignment for mobile */
    }
}

/* Certifications Timeline */
.certification-timeline {
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    overflow-x: auto; /* Enable horizontal scrolling for small screens */
}

.certification-track {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.certification-container {
    flex: 1;
    min-width: 200px; /* Minimum width for each certification card */
    margin: 0 10px;
    opacity: 0; /* Initially hidden */
    transform: translateY(50px); /* Start slightly below */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.certification-container.certification-visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Move to original position */
}

.certification-content {
    padding: 20px;
    background-color: #1e1e1e; /* Darker background for content */
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Darker shadow */
    color: #e0e0e0; /* Light text */
    text-align: center;
}

.certification-content h2 {
    color: #B19CD7; /* Green accent color for headings */
}

@media screen and (max-width: 600px) {

    .certification-track {
        flex-direction: column; /* Stack certifications vertically on small screens */
    }

    .certification-container {
        margin: 10px 0; /* Add spacing between stacked certifications */
    }
}

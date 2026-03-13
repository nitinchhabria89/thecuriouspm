
// Data Object
const DATA = {
    EXPERIENCES: [
        {
            company: "mCanvas – Affinity Global Advertising",
            role: "VP, Product",
            period: "March 2020 – Present",
            location: "Mumbai, India",
            highlights: [
                "Led product development & strategy initiatives, resulting in 30% growth in Revenue.",
                "Leading a team of 4 product managers & 4 QA engineers, overseeing successful product releases.",
                "Spearheaded strategic partnerships like MOAT, IAS & Nielsen DAR across ad formats for Ad-tracking & verification.",
                "Strategized launch of new ad formats based on market research & A/B testing, leading to 50% CTR increase.",
                "Pioneered utilization of RTB, Programmatic Guaranteed, and Private Marketplace Deals.",
                "Achieved 30% increase in ROAS by harnessing full potential of DSP, SSP, & DMP."
            ]
        },
        {
            company: "Remote Software Solutions Pvt Ltd",
            role: "Business & Project Head",
            period: "July 2017 – March 2020",
            location: "Mumbai, India",
            highlights: [
                "Led successful Acquisition of TechMerch Innovations (TMi) into Remote Software Solutions (UK).",
                "Directed growth of the Digital division, overseeing a portfolio of 300+ projects.",
                "Generated annual recurring revenue of 5 million INR in 2.5 years.",
                "Managed a distributed team across Mumbai, Goa, and the UK."
            ]
        },
        {
            company: "TechMerch Innovations (TMi)",
            role: "Entrepreneur & Project Head (Founder)",
            period: "April 2013 – July 2017",
            location: "Mumbai, India",
            highlights: [
                "Founded a bootstrapped startup providing cost-effective digital solutions (SEO, SEM, Web Design).",
                "Managed & Delivered 400+ projects generating an ARR of 3 million INR in 4.5 years.",
                "Grew team from 3 to 15 members until acquisition.",
                "End-to-end project planning, team alignment, and delivery of high-stakes web/app projects."
            ]
        },
        {
            company: "Marketplace Technologies Pvt Ltd",
            role: "Web Developer",
            period: "Dec 2011 – April 2013",
            location: "Mumbai, India",
            highlights: [
                "Contributed to software development for the Bank of India Shareholding Ltd (BOISL) Member Portal.",
                "Focused on feature implementation, bug resolution, and UI enhancements.",
                "Resulted in a 30% increase in user retention and engagement."
            ]
        }
    ],
    EDUCATION: [
        {
            institution: "NMIMS (Narsee Monjee Institute of Management Studies)",
            degree: "Post Graduate Diploma in Business Management",
            period: "Completed Dec 2022"
        },
        {
            institution: "Mumbai University",
            degree: "Bachelor of Engineering (Information Technology)",
            period: "2007 – 2011"
        }
    ],
    SKILLS: [
        {
            category: "Product Leadership",
            skills: ["Product Strategy", "Roadmapping", "Agile Execution", "Monetization", "Team Leadership"]
        },
        {
            category: "Ad-Tech & MarTech",
            skills: ["Programmatic Advertising", "RTB", "DSP/SSP/DMP", "Ad Tracking", "Interactive Storytelling"]
        },
        {
            category: "Technical",
            skills: ["AI/ML Learner", "Web & Mobile Development", "SQL Server", "System Architecture"]
        }
    ],
    CONSULTING: [
        {
            title: "Founder Coaching & Validation",
            description: "Stress-testing product ideas and refining MVP scope for early-stage founders to ensure market-fit."
        },
        {
            title: "Ad-Tech & MarTech Consulting",
            description: "Deep-dive advisory on programmatic architecture, RTB integrations, and building high-ROI advertising frameworks."
        },
        {
            title: "Freelance Product Leadership",
            description: "Hands-on execution for 0-to-1 projects or scaling existing platforms for commercial growth."
        }
    ],
    ADVENTURE: {
        summary: "When I'm not orchestrating product roadmaps, I'm exploring the far corners of the globe - having visited 15+ countries. I'm a thrill-seeker at heart, from bungee jumping in South Africa to skydiving and scuba diving.",
        highlights: ["Bungee Jumping", "Sky Diving", "Scuba Diving", "Paragliding", "Bike Riding", "Adventure Trekking"],
        grid: [
            { src: "images/image5.jpg", alt: "Scuba Diving", label: "Deep Sea Exploration" },
            { src: "images/image3.jpg", alt: "Bungee Jumping", label: "Freefall Adrenaline" },
            { src: "images/image7.jpg", alt: "Skydiving", label: "15,000ft Drop" },
            { src: "images/image4.jpg", alt: "Paragliding", label: "Mountain Soaring" },
            { src: "images/nitin-driving-ferrari.jpg", alt: "Snow Adventures", label: "Love for Speed" },
            { src: "images/image6.jpg", alt: "Bungee Setup", label: "Winter Thrills" }

        ]
    }
};

// Render Functions
function init() {
    renderExperience();
    renderServices();
    renderSkills();
    renderEducation();
    renderAdventure();
    setupEffects();
    
    document.getElementById('year').innerText = new Date().getFullYear();
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    container.innerHTML = DATA.EXPERIENCES.map(exp => `
        <div class="timeline-item">
            <div class="timeline-meta">
                <span class="period-badge">${exp.period}</span>
                <p class="location-text">${exp.location}</p>
            </div>
            <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4 class="timeline-role">${exp.role}</h4>
                <p class="timeline-company">${exp.company}</p>
                <div class="highlights-list">
                    ${exp.highlights.map(h => `
                        <div class="highlight-item">
                            <span class="highlight-plus">+</span>
                            <p>${h}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderServices() {
    const container = document.getElementById('services-list');
    container.innerHTML = DATA.CONSULTING.map(service => `
        <div class="service-card">
            <h4>${service.title}</h4>
            <p>${service.description}</p>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = DATA.SKILLS.map(group => `
        <div class="skill-group">
            <h5 class="skill-group-title">${group.category}</h5>
            <div class="skill-tags">
                ${group.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-list');
    container.innerHTML = DATA.EDUCATION.map(edu => `
        <div class="edu-item">
            <h4 class="edu-degree">${edu.degree}</h4>
            <p class="edu-inst">${edu.institution}</p>
            <span class="period-badge">${edu.period}</span>
        </div>
    `).join('');
}

function renderAdventure() {
    document.getElementById('adventure-summary').innerText = `"${DATA.ADVENTURE.summary}"`;
    document.getElementById('adventure-tags').innerHTML = DATA.ADVENTURE.highlights.map(h => `
        <div class="adventure-tag">
            <span class="accent">/</span>
            <span>${h}</span>
        </div>
    `).join('');
    
    document.getElementById('adventure-photos').innerHTML = DATA.ADVENTURE.grid.map(img => `
        <div class="photo-card">
            <img src="${img.src}" alt="${img.alt}" class="img-gray" onerror="this.src='https://via.placeholder.com/300x400?text=${img.alt}'">
            <div class="photo-overlay">
                <span class="photo-label">${img.label}</span>
            </div>
        </div>
    `).join('');
}

function setupEffects() {
    const navbar = document.getElementById('navbar');
    const heroBg = document.getElementById('hero-parallax-bg');
    const floatingText = document.getElementById('floating-text');
    const heroImage = document.getElementById('hero-image-card');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Sticky Nav
        if (scrolled > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        
        // Parallax Effects
        if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.15}px)`;
        if (floatingText) floatingText.style.transform = `translateX(${scrolled * 0.2}px)`;
        if (heroImage) heroImage.style.transform = `translateY(${scrolled * -0.05}px)`;
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .btn-primary-sm');

    function openMenu() {
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', setupMobileMenu);

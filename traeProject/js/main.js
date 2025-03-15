const threatInfo = {
    phishing: {
        title: "Phishing Attacks",
        description: `
            <h3>What is Phishing?</h3>
            <p>Phishing is a cybercrime where attackers pose as legitimate institutions to trick people into revealing sensitive information.</p>
            
            <h3>How it Works</h3>
            <ul>
                <li>Attackers send fraudulent emails or messages that appear to be from trusted sources</li>
                <li>They often create a sense of urgency or fear</li>
                <li>Links in these messages lead to fake websites that steal information</li>
            </ul>

            <h3>Prevention Tips</h3>
            <ul>
                <li>Never click on suspicious links in emails</li>
                <li>Check the sender's email address carefully</li>
                <li>Don't provide sensitive information via email</li>
                <li>Enable two-factor authentication</li>
                <li>Keep your software and systems updated</li>
            </ul>
        `
    },
    ransomware: {
        title: "Ransomware Attacks",
        description: `
            <h3>What is Ransomware?</h3>
            <p>Ransomware is malicious software that encrypts your files and demands payment for decryption.</p>
            
            <h3>How it Works</h3>
            <ul>
                <li>Malware infiltrates through vulnerable points or phishing</li>
                <li>Files are encrypted and become inaccessible</li>
                <li>Attackers demand cryptocurrency payment for decryption</li>
            </ul>

            <h3>Prevention Tips</h3>
            <ul>
                <li>Regularly backup your data</li>
                <li>Keep software and systems updated</li>
                <li>Use reliable antivirus software</li>
                <li>Be cautious with email attachments</li>
                <li>Implement network segmentation</li>
            </ul>
        `
    },
    trojan: {
        title: "Trojan Attacks",
        description: `
            <h3>What is a Trojan?</h3>
            <p>A Trojan is malware disguised as legitimate software that can give attackers access to your system.</p>
            
            <h3>How it Works</h3>
            <ul>
                <li>Appears as legitimate software or files</li>
                <li>Users unknowingly install the malware</li>
                <li>Provides unauthorized access to attackers</li>
            </ul>

            <h3>Prevention Tips</h3>
            <ul>
                <li>Only download from trusted sources</li>
                <li>Scan files before opening</li>
                <li>Keep antivirus software updated</li>
                <li>Be cautious of free software offers</li>
                <li>Monitor system behavior</li>
            </ul>
        `
    }
};

// Modal functionality
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');
const learnMoreBtns = document.querySelectorAll('.learn-more');

const threatDetails = {
    phishing: {
        title: "Phishing Attacks",
        content: `
            <h3>What is Phishing?</h3>
            <p>Phishing is a cybercrime where attackers pose as legitimate institutions to trick people into revealing sensitive information.</p>
            
            <h3>Common Signs</h3>
            <ul>
                <li>Urgent or threatening language</li>
                <li>Suspicious sender email addresses</li>
                <li>Poor spelling and grammar</li>
                <li>Requests for sensitive information</li>
            </ul>
            
            <h3>How to Protect Yourself</h3>
            <ul>
                <li>Never click on suspicious links</li>
                <li>Verify sender addresses carefully</li>
                <li>Don't share sensitive information via email</li>
                <li>Use email filters and security software</li>
            </ul>`
    },
    ransomware: {
        title: "Ransomware",
        content: `
            <h3>What is Ransomware?</h3>
            <p>Ransomware is malicious software that encrypts files and demands payment for decryption.</p>
            
            <h3>How it Works</h3>
            <ul>
                <li>Encrypts personal files and documents</li>
                <li>Demands cryptocurrency payment</li>
                <li>Often spreads through malicious downloads</li>
                <li>Can affect entire networks</li>
            </ul>
            
            <h3>Prevention Methods</h3>
            <ul>
                <li>Regular data backups</li>
                <li>Keep software updated</li>
                <li>Use reliable antivirus software</li>
                <li>Be cautious with email attachments</li>
            </ul>`
    },
    trojan: {
        title: "Trojan Attacks",
        content: `
            <h3>What is a Trojan?</h3>
            <p>Trojans are malware disguised as legitimate software to gain unauthorized access to systems.</p>
            
            <h3>Types of Trojans</h3>
            <ul>
                <li>Banking Trojans</li>
                <li>Remote Access Trojans (RATs)</li>
                <li>Downloader Trojans</li>
                <li>Data Theft Trojans</li>
            </ul>
            
            <h3>Protection Strategies</h3>
            <ul>
                <li>Only download from trusted sources</li>
                <li>Scan files before opening</li>
                <li>Keep security software updated</li>
                <li>Monitor system for unusual activity</li>
            </ul>`
    }
};

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const threat = btn.getAttribute('data-threat');
        const details = threatDetails[threat];
        
        modalContent.innerHTML = `
            <h2 style="color: #00ffff; font-size: 2rem; margin-bottom: 1.5rem; text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);">
                ${details.title}
            </h2>
            ${details.content}
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Mobile navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.body;

burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    
    // Prevent background scrolling when menu is open
    body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add at the end of main.js
document.addEventListener('DOMContentLoaded', () => {
    const phishingAnim = new PhishingAnimation('phishing-animation');
    const ransomwareAnim = new RansomwareAnimation('ransomware-animation');
    const trojanAnim = new TrojanAnimation('trojan-animation');
    
    phishingAnim.animate();
    ransomwareAnim.animate();
    trojanAnim.animate();
});
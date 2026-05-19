document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuBtn.textContent = '✕';
        } else {
            menuBtn.textContent = '☰';
        }
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // Simple scroll effect for navbar
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    /* 
       Note: The dynamic color extraction from colorfading.png has been disabled 
       in favor of the new, highly distinctive and premium Rose Cacao brand header style.
       This ensures maximum visual impact, perfect contrast, and a luxury brand look.
       
       const fadingImg = new Image();
       fadingImg.src = 'img/colorfading.png';
       fadingImg.onload = () => {
           const canvas = document.createElement('canvas');
           canvas.width = fadingImg.width;
           canvas.height = fadingImg.height;
           const ctx = canvas.getContext('2d');
           ctx.drawImage(fadingImg, 0, 0);

           const cx = Math.floor(fadingImg.width / 2);
           const topData = ctx.getImageData(cx, 0, 1, 1).data;
           const botData = ctx.getImageData(cx, fadingImg.height - 1, 1, 1).data;

           const topColor = `rgba(${topData[0]}, ${topData[1]}, ${topData[2]}, ${topData[3]/255})`;
           const botColor = `rgba(${botData[0]}, ${botData[1]}, ${botData[2]}, ${botData[3]/255})`;
        
           nav.style.background = `linear-gradient(to bottom, ${topColor}, ${botColor})`;
           nav.style.backdropFilter = 'none';
       };
    */
});

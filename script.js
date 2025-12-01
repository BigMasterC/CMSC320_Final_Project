document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'fade-in' class
    const faders = document.querySelectorAll('.fade-in');

    // Create an intersection observer
    const appearOptions = {
        // Lower threshold to 0.05 (5%).
        // This ensures that even if an element is taller than the screen (like your data table),
        // it will trigger as soon as the top 5% touches the viewport.
        threshold: 0.05, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                // Stop observing once it's visible so we don't toggle it again
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
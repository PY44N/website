// Only run this script in the browser
if (typeof window !== "undefined") {
  // Handle elements that should animate when they enter the viewport
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    // If IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When element enters viewport
            if (entry.isIntersecting) {
              // Get animation classes from data attribute
              const animationClasses =
                entry.target.dataset.animation.split(" ");
              // Add animation classes
              entry.target.classList.add(...animationClasses);
              // Stop observing after animation is triggered
              observer.unobserve(entry.target);
            }
          });
        },
        {
          // Start animation when element is 10% visible
          threshold: 0.1,
          // Add a small margin to trigger slightly before the element enters the viewport
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // Observe all animated elements
      animatedElements.forEach((element) => {
        // Initially hide element (opacity: 0)
        element.classList.add("pre-animation");
        // Start observing
        observer.observe(element);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      animatedElements.forEach((element) => {
        const animationClasses = element.dataset.animation.split(" ");
        element.classList.add(...animationClasses);
      });
    }
  });
}

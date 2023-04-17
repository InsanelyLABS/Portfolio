// Select all links with class smooth-scroll
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    // Add a click event listener to each link
    anchor.addEventListener('click', function (e) {
      // Prevent the default link behavior
      e.preventDefault();
  
      // Get the ID of the target element from the link's href attribute
      const targetId = this.getAttribute('href');
  
      // Use the ID to find the target element
      const targetElement = document.querySelector(targetId);
  
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  




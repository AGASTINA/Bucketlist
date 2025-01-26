// Smooth Scroll to Sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Chatbox Click Action
  document.getElementById('chatbox-icon').addEventListener('click', () => {
    alert('Chatbox feature is under construction! Stay tuned.');
  });
  
  // Add Pop-Up Modal Functionality for Nav Links
  document.querySelectorAll('.nav-bar a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default anchor behavior
  
      const targetId = event.target.getAttribute('href').replace('#', '');
      if (targetId && document.getElementById(targetId)) {
        scrollToSection(targetId);
      } else {
        alert('This feature is currently not available.');
      }
    });
  })
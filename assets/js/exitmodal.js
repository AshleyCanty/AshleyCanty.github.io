document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('exitModal');
    var span = document.getElementsByClassName('close')[0];
    var hasModalBeenShown = localStorage.getItem('exitModalShown');
  
    if (!hasModalBeenShown) {
      window.addEventListener('mouseout', showModal);
    }
  
    function showModal(e) {
      // Check if the mouse is leaving the window
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        modal.style.display = 'block';
        window.removeEventListener('mouseout', showModal);
        localStorage.setItem('exitModalShown', 'true');
      }
    }
  
    span.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });
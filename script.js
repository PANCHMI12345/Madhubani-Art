function toggleLanguage() {
    const enText = document.querySelector('.lang-en');
    const hiText = document.querySelector('.lang-hi');
  
    if (enText.style.display === 'none') {
      enText.style.display = 'block';
      hiText.style.display = 'none';
    } else {
      enText.style.display = 'none';
      hiText.style.display = 'block';
    }
  }
  
  
  function openModal() {
    document.getElementById('learnModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('learnModal').style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('learnModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  function toggleLanguage() {
    const enElements = document.querySelectorAll('.lang-en');
    const hiElements = document.querySelectorAll('.lang-hi');
  
    enElements.forEach(el => {
      if (el.style.display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  
    hiElements.forEach(el => {
      if (el.style.display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }
  const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      const images = document.querySelectorAll(".gallery-grid img");
  
      images.forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        });
      });
  
      function closeLightbox() {
        lightbox.style.display = "none";
      }
  
  
  
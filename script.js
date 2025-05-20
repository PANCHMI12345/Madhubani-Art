function toggleInfo(artistDiv) {
    const info = artistDiv.querySelector(".info");
  
    // Hide all other infos first
    const allInfos = document.querySelectorAll(".info");
    allInfos.forEach(p => {
      if (p !== info) {
        p.style.display = "none";
      }
    });
  
    // Toggle current info display
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  }
  
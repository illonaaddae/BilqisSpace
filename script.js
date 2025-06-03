window.addEventListener("load", () => {
  // 1. Hide preloader and show main content
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 2000);

  // 2. Prepare audio for instant unmute
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  audio.play().catch(() => {
    // Autoplay blocked, this is expected in some browsers
  });

  // 3. Add toggle mute/unmute
  btn.addEventListener("click", () => {
    if (audio.muted) {
      audio.muted = false;
      audio.play();
      btn.textContent = "Mute 🔇";
    } else {
      audio.muted = true;
      btn.textContent = "Play 🔈";
    }
  });
});

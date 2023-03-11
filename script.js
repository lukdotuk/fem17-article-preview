function show() {
  let bar = document.getElementById("icon__bar");
  let share = document.getElementById("share-icon");
  let shareBackground = document.getElementById("share-bg");

  if(bar.style.display === "flex") {
    bar.style.display = "none";
    shareBackground.style.background = "var(--clr-300)"
    share.style.filter = "none"
  } else {
    bar.style.display = "flex";
    share.style.filter = "brightness(0) invert(1)"
    shareBackground.style.background = "var(--clr-500)" 
  }
}
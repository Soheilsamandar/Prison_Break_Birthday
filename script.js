const revealButton = document.getElementById("revealBtn");
const secretContent = document.getElementById("secretContent");

revealButton.addEventListener("click", function () {
  secretContent.classList.add("show");

  revealButton.style.display = "none";

  setTimeout(function () {
    secretContent.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 150);
});



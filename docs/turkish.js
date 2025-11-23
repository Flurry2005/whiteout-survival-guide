const translateButton = document.getElementById("turk");

translateButton.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(p => {
    if (p.classList.contains("turkish")) {
      // Enable Turkish paragraphs
      p.removeAttribute("disabled");
    } else {
      // Disable all other paragraphs
      p.setAttribute("disabled", "true");
    }
  });
});

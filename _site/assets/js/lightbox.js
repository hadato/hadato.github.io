(function () {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbCounter = document.getElementById("lightboxCounter"); // <-- ADD THIS
  if (!lb || !lbImg) return;

  let currentGroup = null;
  let currentIndex = 0;
  let items = [];

  function collect(group) {
    items = Array.from(document.querySelectorAll(`a[data-lightbox="${group}"]`));
  }

  function updateCounter() {
    if (!lbCounter) return;
    const total = items.length || 0;
    const cur = total ? currentIndex + 1 : 0;
    lbCounter.textContent = `${cur} / ${total}`;
  }

  function openAt(group, index) {
    currentGroup = group;
    collect(group);
    currentIndex = Math.max(0, Math.min(index, items.length - 1));

    const a = items[currentIndex];
    const src = a.getAttribute("href");
    const alt = a.querySelector("img")?.getAttribute("alt") || "";
    lbImg.src = src;
    lbImg.alt = alt;

    updateCounter(); // <-- ADD THIS (right after src/alt)

    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    if (lbCounter) lbCounter.textContent = ""; // optional cleanup
    document.body.style.overflow = "";
  }

  function next() {
    if (!items.length) return;
    openAt(currentGroup, (currentIndex + 1) % items.length);
  }

  function prev() {
    if (!items.length) return;
    openAt(currentGroup, (currentIndex - 1 + items.length) % items.length);
  }

  // Open on click (prevent default navigation)
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-lightbox]");
    if (!a) return;

    e.preventDefault();
    const group = a.getAttribute("data-lightbox");
    const groupItems = Array.from(document.querySelectorAll(`a[data-lightbox="${group}"]`));
    const index = groupItems.indexOf(a);
    openAt(group, index);
  });

  // Buttons / backdrop close
  lb.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) close();
    if (e.target.matches("[data-next]")) next();
    if (e.target.matches("[data-prev]")) prev();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
})();
(function () {
  const pager = document.querySelector(".pager");
  const card = document.querySelector("article.card");
  if (!pager || !card) return;

  const OFFSET = 18; // must match CSS bottom

  function updateDock() {
    const cardRect = card.getBoundingClientRect();
    const pagerRect = pager.getBoundingClientRect();

    // If the pager's fixed position would overlap past the card's bottom,
    // switch to docked (absolute inside the card).
    const wouldOverlap = (window.innerHeight - OFFSET) > cardRect.bottom;

    document.body.classList.toggle("pager-docked", wouldOverlap);
  }

  window.addEventListener("scroll", updateDock, { passive: true });
  window.addEventListener("resize", updateDock);
  updateDock();
})();
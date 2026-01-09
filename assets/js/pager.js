(() => {
  const pager = document.querySelector(".pager");
  const footer = document.querySelector(".footer");
  const container = document.querySelector(".container");
  if (!pager || !footer || !container) return;

  // Make sure container is positioning context for absolute docking
  const cs = getComputedStyle(container);
  if (cs.position === "static") container.style.position = "relative";

  const setFooterHeightVar = () => {
    document.body.style.setProperty("--footer-h", footer.offsetHeight + "px");
  };
  setFooterHeightVar();
  window.addEventListener("resize", setFooterHeightVar);

  const io = new IntersectionObserver(
    (entries) => {
      const isInView = entries[0]?.isIntersecting;
      document.body.classList.toggle("pager-docked", !!isInView);
    },
    { threshold: 0.01 }
  );

  io.observe(footer);
})();
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".project_nav_point");
  const projectItems = document.querySelectorAll(".projects_show");

  function updateDisplayedItems(filterValue) {
    projectItems.forEach((item) => {
      const categories = item.classList;
      const shouldDisplay = filterValue === "all" || categories.contains(filterValue);
      item.style.display = shouldDisplay ? "block" : "none";
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      updateDisplayedItems(filterValue);
    });
  });

  // Modal logic
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalLink = document.getElementById("modalLink");
  const modalClose = document.getElementById("modalClose");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      modalImg.src = item.dataset.img;
      modalImg.alt = item.dataset.title;
      modalTitle.textContent = item.dataset.title;
      modalDesc.textContent = item.dataset.desc;
      modalLink.href = item.dataset.link;
      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("active");
  });

  updateDisplayedItems(document.querySelector(".project_nav_point.active").getAttribute("data-filter"));
});
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".project_nav_point");
  const projectItems = document.querySelectorAll(".projects_show");

  function updateDisplayedItems(filterValue) {
    projectItems.forEach((item) => {
      const categories = item.classList;
      const shouldDisplay = filterValue === "all" || categories.contains(filterValue);

      if (shouldDisplay) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
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

  const imageArray = [
    {
      src: "img\\vrgame.png",
      link: "https://youtu.be/8J2VWYr6iuw",
      categories: ["all", "3D", "code"]
    },
    {
      src: "img\\myfirstcharacter.jpg",
      link: "https://www.artstation.com/artwork/QXP5dx",
      categories: ["all", "3D"]
    },
    /*{
      src: "img\\small table.png",
      link: "https://example.com/page3",
      categories: ["all", "3D"]
    },*/
    // и так далее
  ];

  const projectsPictures = document.querySelector(".projects_pictures");

  imageArray.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("projects_show");
    imageContainer.classList.add(...image.categories);

    const linkElement = document.createElement("a");
    linkElement.href = image.link;

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = "Project Image";

    linkElement.appendChild(imgElement);
    imageContainer.appendChild(linkElement);
    projectsPictures.appendChild(imageContainer);
  });

  updateDisplayedItems(document.querySelector(".project_nav_point.active").getAttribute("data-filter"));
});
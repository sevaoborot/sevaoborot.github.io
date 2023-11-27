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
      filterButtons.forEach((btn) => btn.classList.remove("active")); //убираем у всех
      button.classList.add("active"); //добавляем к нужной (не путать button и btn)
      updateDisplayedItems(filterValue);
    });
  });

  const imageArray = [
    {
      src: "img\\vrgame.png",
      link: "https://youtu.be/8J2VWYr6iuw",
      categories: ["all", "3D", "code"]
    },
    /*{
      src: "img\\pic-1.png",
      link: "https://example.com/page2",
      categories: ["all", "code"]
    },
    {
      src: "img\\small table.png",
      link: "https://example.com/page3",
      categories: ["all", "3D"]
    },*/
    // и так далее
  ];

  const projectsPictures = document.querySelector(".projects_pictures");
  const loadMoreButton = document.querySelector(".projects_load");
  let imagesLoaded = 0;
  let imagesToShow = 3;

  loadMoreButton.addEventListener("click", () => {
    for (let i = imagesLoaded; i < imagesLoaded + imagesToShow; i++) {
      if (i >= imageArray.length) {
        loadMoreButton.style.display = "none";
        break;
      }

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("projects_show");
      imageContainer.classList.add(...imageArray[i].categories);

      const linkElement = document.createElement("a");
      linkElement.href = imageArray[i].link;

      const imgElement = document.createElement("img");
      imgElement.src = imageArray[i].src;
      imgElement.alt = "Project Image";

      linkElement.appendChild(imgElement);
      imageContainer.appendChild(linkElement);
      projectsPictures.appendChild(imageContainer);
    }

    imagesLoaded += imagesToShow;
    updateDisplayedItems(document.querySelector(".project_nav_point.active").getAttribute("data-filter"));
  });
});
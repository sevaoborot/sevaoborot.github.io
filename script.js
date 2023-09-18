document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".project_nav_point");
    const projectItems = document.querySelectorAll(".projects_show");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => { //функция-стрелочка, обработчик при тыке на кнопку
            const filterValue = button.getAttribute("data-filter");//выбираем аттрибут data-filter="all/3d/code..."
            filterButtons.forEach((btn) => btn.classList.remove("active")); //убираем класс active
            button.classList.add("active");

            projectItems.forEach((item) => {
                const categories = item.classList; //item == картинка
                item.style.display = "none";
                if (filterValue === "all" || categories.contains(filterValue)) { //есть ли в списке классов нужный фильтр?
                    item.style.display = "block";
                }
            });
        });
    });
});

// массив с ссылками на картинки
const imageArray = [
    "img\\wood sunbed render (2).png",
    "img\\flamingo.png",
    "img\\small table.png",
    "img\\sunbed renderer.png",
    "img\\pic-4.png",
    "img\\pic-5.png",
    // и так далее
  ];
  
  const projectsPictures = document.querySelector(".projects_pictures");//картинки выбираем
  const loadMoreButton = document.querySelector(".projects_load");//выбираем кнопку
  let imagesLoaded = 0;
  let imagesToShow = 3; // показывать по 3 изображения при нажатии
  
  loadMoreButton.addEventListener("click", () => { //обработчик при нажатии на load more
    for (let i = imagesLoaded; i < imagesLoaded + imagesToShow; i++) {
      if (i >= imageArray.length) {
        // все картинки если загружены
        loadMoreButton.style.display = "none";
        break;
      }
  
      const imgElement = document.createElement("img");
      imgElement.src = imageArray[i];
      imgElement.alt = "Project Image";
      imgElement.classList.add("projects_show"); // стилизация картинки
  
      // подгоняем размеры картинки
      imgElement.style.maxWidth = "100%";
      imgElement.style.height = "auto";
  
      // пихаем изображение в контейнер сетки
      projectsPictures.appendChild(imgElement);
    }
  
    imagesLoaded += imagesToShow;
  });
function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  let minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hrs ${minute} min ${remainingSecond} sec ago `;
}

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
//
const loadCategoriesVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displyVideos(data.category))
    .catch((error) => console.log(error));
};
//
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);
    const buttonContainer = document.createElement("button");
    buttonContainer.innerHTML = `
<button onclick="loadCategoriesVideos(${item.category_id})" class='btn'>
${item.category}
</button>
`;
    categoryContainer.appendChild(buttonContainer);
  });
};
loadCategories();

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displyVideos(data.videos))
    .catch((error) => console.log(error));
};

const displyVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (videos.length === 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class=" min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
    <img src="img/Icon.png"/>
    <h2 class="text-3xl font-bold text-center text-gray-800"> Oops!! Sorry, There is no content here</h2>
    </div>
    `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class='h-[200px] relative rounded-md'>
    <img class='h-full w-full  object-cover'
      src=${video.thumbnail}
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class='absolute bottom-0 right-0 text-gray-200 bg-black px-3 rounded-md m-2 text-sm'>${getTimeString(
              video.others.posted_date
            )}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class='w-10 h-10 rounded-full object-cover' src='${
      video.authors[0].profile_picture
    }' />
    </div>
    <div>
    <h2 class='font-bold'>${video.title}</h2>
    <div class="flex gap-2  items-center">

    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified === true
        ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>`
        : ""
    }
    </div>
    <p class="text-gray-400">${video.others.views} views</p>
    </div>
  </div>
    `;
    videoContainer.append(card);
  });
};
loadVideos();

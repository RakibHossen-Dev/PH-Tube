const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryContainer.appendChild(button);
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
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class='h-[200px]'>
    <img class='h-full w-full object-cover'
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class='w-10 h-10 rounded-full object-cover' src='${video.authors[0].profile_picture}' />
    </div>
    <div>
    <h2 class='font-bold'>${video.title}</h2>
    <div class="flex gap-2  items-center">

    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>
    </div>
    <p class="text-gray-400">${video.others.views} views</p>
    </div>
  </div>
    `;
    videoContainer.append(card);
  });
};
loadVideos();

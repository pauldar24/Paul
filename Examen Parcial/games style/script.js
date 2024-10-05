const movieGrid = document.getElementById("movie-grid");
const genreFilter = document.getElementById("genreFilter");
const modal = document.getElementById("movieModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementsByClassName("close")[0];

const movies = [
  {
    title: "Bad Boys",
    description:
      "Película estadounidense protagonizada por Will Smith y Martin Lawrence.",
    genre: "Action",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Ffortnitegame&psig=AOvVaw2xGlTExwDjDsamwPzHHhi1&ust=1728230029860000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD_udnM94gDFQAAAAAdAAAAABAE",
  },
  {
    title: "Deadpool & Wolverine",
    description:
      "Película con comedia y acción protagonizada por Ryan Reynolds y Hugh Jackman.",
    genre: "Action",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png",
  },
  {
    title: "Pelé",
    description:
      "Película que trata sobre la vida de la leyenda brasilera Pelé.",
    genre: "Sport",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202409/2712/1e1c42b14d92280e17bda697b8c4ae13ff9f91bdb10fca89.png",
  },
  {
    title: "It ends with us",
    description:
      "Lily Bloom se enamora de un neurocirujano tras mudarse a Boston con el objetivo de abrir su propio negocio. Sin embargo, el primer amor de su vida retoma el contacto con ella, y Lily ahora no sabe qué hacer.",
    genre: "Romantic",
    image:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-8053679ba86b15ee7ced259fe01908c9",
  },
  {
    title: "Alice in terrorland",
    description:
      "Tras la muerte de sus padres, la adolescente Alice va a vivir a la casa de su abuela, una morada aislada en medio del bosque. Poco a poco, Alice descubre que hay siniestras fuerzas oscuras ejerciendo allá su poder.",
    genre: "Horror",
    image: "images/alice.webp",
  },
];

function displayMovies(filter = "all") {
  movieGrid.innerHTML = "";
  movies.forEach((movie) => {
    if (filter === "all" || movie.genre === filter) {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button class="favorite-btn">Favorite</button>
      `;
      movieCard
        .querySelector(".favorite-btn")
        .addEventListener("click", toggleFavorite);
      movieCard.addEventListener("click", () => showMovieDetails(movie));
      movieGrid.appendChild(movieCard);
    }
  });
}

function toggleFavorite(e) {
  e.stopPropagation();
  const button = e.target;
  button.textContent =
    button.textContent === "Favorite" ? "Favorited" : "Favorite";
  button.style.backgroundColor =
    button.textContent === "Favorited" ? "#dc3545" : "#007bff";
}

function showMovieDetails(movie) {
  modalContent.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${movie.image}" alt="${movie.title}" style="width: 200px; height: 300px; object-fit: cover;">
    <p>${movie.description}</p>
    <p>Genre: ${movie.genre}</p>
  `;
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function populateGenreFilter() {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

genreFilter.addEventListener("change", (e) => {
  displayMovies(e.target.value);
});

populateGenreFilter();
displayMovies();

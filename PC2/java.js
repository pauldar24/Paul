const movieGrid = document.getElementById("movie");
const genreFilter = document.getElementById("genre");
const modal = document.getElementById("movieModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementsByClassName("close")[0];

const movies = [
  {
    title: "Action",
    genre: "Action",
    image: "images/Deadpool.webp",
  },
  {
    title: "Action",
    genre: "Action",
    image:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oGythE98MYleE6mZlGs5oBGkux1.jpg",
  },
  {
    title: "Sport",
    genre: "Sport",
    image: "images/Pelé.webp",
  },
  {
    title: "Romantic",
    genre: "Romantic",
    image: "images/IEWU.webp",
  },
  {
    title: "Horror",
    genre: "Horror",
    image: "images/alice.webp",
  },
];

function displayMovies(filter = "all") {
  movie.innerHTML = "";
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
      movie.appendChild(movieCard);
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

function populateGenre() {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

genre.addEventListener("change", (e) => {
  displayMovies(e.target.value);
});

populateGenre();
displayMovies();

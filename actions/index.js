import axios from "axios";

const Base_URL = "http://localhost:3000";

const MOVIES_DATA = [];

const CATEGORY_DATA = [
  { id: "c-0", name: "all" },
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "historical" },
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      reject("Canot Fetch Data");
    }, 50);
  });
};

export const createMovies = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${Base_URL}/api/v1/movies`, movie).then((res) => res.data);
};

export const getMovies = () => {
  return axios.get(`${Base_URL}/api/v1/movies`).then((res) => {
    return res.data;
  });
};

export const getMovieById = (id) => {
  return axios.get(`${Base_URL}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};

export const deleteMovie = (id) => {
  return axios.delete(`${Base_URL}/api/v1/movies/${id}`).then((res) => {
    return res.data;
  });
};

export const updateMovie = (movie) => {
  return axios
    .patch(`${Base_URL}/api/v1/movies/${movie.id}`, movie)
    .then((res) => {
      return res.data;
    });
};

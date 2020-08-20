import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovies } from "../actions/index";

const SideMenu = (props) => {
  const router = useRouter();
  const handleCreateMovie = (movie) => {
    createMovies(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
      router.push("/");
    });
  };
  const sideCategories = props.categories.map((category) => {
    return (
      <a
        onClick={() => {
          props.changeCategory(category.name);
        }}
        key={category.id}
        href="#"
        className={`list-group-item ${
          category.name === props.activeCategory ? "active" : ""
        }`}
      >
        {category.name}
      </a>
    );
  });

  let modal = null;
  return (
    <div>
      <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Genre Name</h1>
      <div className="list-group">{sideCategories}</div>
    </div>
  );
};

export default SideMenu;

import { useState, useEffect } from "react";

const MovieCreateForm = (props) => {
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  const defaultData = {
    name: "",
    description: "",
    releaseYear: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: "",
  };
  const formData = props.initialData ? { ...props.initialData } : defaultData;
  const [form, setForm] = useState(formData);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const submitForm = () => {
    props.handleFormSubmit({ ...form });
  };

  useEffect(() => {
    if (props.initialData) {
      setForm(props.initialData);
      setIsInitialDataLoaded(true);
    }
  }, [setIsInitialDataLoaded]);
  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString(),
    });
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          name="name"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          value={form.description}
          name="description"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="releaseYear">Release Year</label>
        <input
          value={form.releaseYear}
          name="releaseYear"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="releaseYear"
          placeholder="Year"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          type="number"
          name="rating"
          onChange={handleChange}
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          value={form.image}
          name="image"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          value={form.cover}
          name="cover"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          onChange={handleChange}
          name="longDesc"
          className="form-control"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button type="button" onClick={submitForm} className="btn btn-primary">
        {props.submitButton || "Create"}
      </button>
    </form>
  );
};

export default MovieCreateForm;

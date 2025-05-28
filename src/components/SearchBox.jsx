import "./SearchBox.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

export default function SearchBox() {
  const value = useSelector(({ filters: { name } }) => {
    return name;
  });

  const dispatch = useDispatch();

  return (
    <div className="search-container">
      <label className="search-text">
        Find contacts by name
        <input
          name="search"
          className="search-input"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        ></input>
      </label>
    </div>
  );
}

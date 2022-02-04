import { FaSearch } from "react-icons/fa";

const ItemSearch = ({ handleSearchChange }) => {
  return (
    <div className="flex justify-center items-center max-w-md mx-auto rounded-l-md mt-5">
      <div className="w-48 sm:w-full">
        <input
          type="search"
          className="w-full h-[2.2rem] px-4 text-gray-800 rounded-md bg-gray-100 focus:outline-none"
          placeholder="Buscar"
          name="search"
          x-model="search"
          onChange={handleSearchChange}
        />
      </div>
      <button
        type="submit"
        className="flex items-center bg-gray-100 justify-center w-10 h-[2.2rem] text-gray-900 rounded-r-md"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default ItemSearch;

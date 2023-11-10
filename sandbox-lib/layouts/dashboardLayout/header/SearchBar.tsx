const searchPositioning = 'w-100px h-100px justify-self-end';
const searchStyling = 'border-2 border-slate-300/75'

const SearchBox = () => {
  return (
    <input
      type="search"
      placeholder="Search"
      className={`${searchPositioning} ${searchStyling}`}
    >

    </input>
  )
};

export default SearchBox;

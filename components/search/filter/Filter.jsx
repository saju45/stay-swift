import SortHotel from "../../sort/SortHotel";
import FilterByAmenities from "./FilterByAmenities";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />
        <FilterByPriceRange />
        <FilterByCategory />
        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;

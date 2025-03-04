"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const FilterByCategory = () => {
  const [query, setQuery] = useState([]);
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleChanged = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item != name);
      setQuery(filtered);
    }

    console.log(query);
  };

  useEffect(() => {
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }

    replace(`${pathName}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label for="fiveStar">
          <input
            type="checkbox"
            name="5"
            id="fiveStar"
            checked={query.includes("5")}
            onChange={handleChanged}
          />
          5 Star
        </label>

        <label for="fourStar">
          <input
            type="checkbox"
            name="4"
            id="fourStar"
            checked={query.includes("4")}
            onChange={handleChanged}
          />
          4 Star
        </label>

        <label for="threeStar">
          <input
            type="checkbox"
            name="3"
            id="threeStar"
            checked={query.includes("3")}
            onChange={handleChanged}
          />
          3 Star
        </label>

        <label for="twoStar">
          <input
            type="checkbox"
            name="2"
            id="twoStar"
            checked={query.includes("2")}
            onChange={handleChanged}
          />
          2 Star
        </label>

        <label for="oneStar">
          <input
            type="checkbox"
            name="1"
            id="oneStar"
            checked={query.includes("1")}
            onChange={handleChanged}
          />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByCategory;

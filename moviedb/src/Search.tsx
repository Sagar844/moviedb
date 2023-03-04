import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getproductslist } from "./api";
import { movies } from "./Models/movietype";

export const Search = () => {
  const [products, setproduts] = useState<movies[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { query } = params;

  query = query || "";

  useEffect(() => {
    getproductslist(query).then((res) => setproduts(res));
  }, [query]);

  function handlechange(event: { target: { value: any } }) {
    setSearchParams(
      { ...params, query: event.target.value },
      { replace: false }
    );
  }
  return (
    <div>
      <input value={query} onChange={handlechange} />

      {products.map((res: any) => {
        return (
          <>
            <h1>{res.title}</h1>
          </>
        );
      })}
    </div>
  );
};

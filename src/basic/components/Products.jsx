import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [products, setProducts] = useState([]);
  const handleChange = () => setChecked((prev) => !prev);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(undefined);
  //   fetch(`data/${checked ? "sale_" : ""}products.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("데이터를 네트워크에서 받아옴");
  //       setProducts(data);
  //     })
  //     .catch((e) => setError("에러가 발생"))
  //     .finally(() => setLoading(false));
  //   return () => {
  //     console.log("청소🧹");
  //   };
  // }, [checked]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

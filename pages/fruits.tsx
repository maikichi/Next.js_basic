import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Fruits() {
  const [fruitName, setFruitName] = useState("");
  const [debouncedFruitName, setDebouncedFruitName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFruitName(fruitName);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [fruitName]);

  const { data: fruits, error } = useSWR<string[]>(
    `http://localhost:3000/api/fruits?q=${debouncedFruitName}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!fruits) return <div>Loading...</div>;

  return (
    <>
      <h3>Please enter a fruit name&nbsp;🍓</h3>
      {/* 入力された文字をstateに持っていくようにする */}
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
      />
      <ul>
        {fruits
          .filter((fruit) => fruit.includes(fruitName))
          .map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
      </ul>
    </>
  );
}
export default Fruits;

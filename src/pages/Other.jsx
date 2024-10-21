import { useState, useEffect } from "react";
import {} from "react";

const Other = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const dataJson = await response.json();
      setData(dataJson);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Other;

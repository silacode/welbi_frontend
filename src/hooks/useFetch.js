import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const useFetch = (link) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    onFetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFetchItems = async () => {
    try {
      const response = await axios.get(link);
      if (response.status === 200) setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return [items, onFetchItems];
};

export default useFetch;

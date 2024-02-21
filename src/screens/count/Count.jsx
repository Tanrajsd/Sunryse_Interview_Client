import {useState, useEffect} from "react";
import {getCount} from "./countHelpers";

import "./Count.css";

export default function Count() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const count = await getCount();
      setCounter(count);
    };
    fetchData();
  }, []);

  return (
    <div className="screen">
      <p className="counter">{counter}</p>
    </div>
  );
}

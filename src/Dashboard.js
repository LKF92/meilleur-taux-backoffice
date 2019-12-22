import React, { useState, useEffect } from "react";
import "./App.css";
import EstimateCard from "./EstimateCard";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      console.log("useffect")
    const fetchData = async () => {
      const response = await axios.get("https://meilleur-taux-backend.herokuapp.com/estimate/");
      if (response) {
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } else {
        console.log("probleme...");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>fetching data</p>
      ) : (
        <div className="list">
          {data && data.map((estimate, index) => (
            <EstimateCard {...estimate} key={index} index={index} data={data} setData={setData} />
          ))}
        </div>
      )}
    </>
  );
}

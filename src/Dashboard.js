import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import EstimateCard from "./EstimateCard";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/estimate/");
      if (response) {
        setData(response.data);
        setIsLoading(false);
        console.log(response);
      } else {
        console.log("probleme...");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>fetching data</p>
      ) : (
        <div className="list">
          {data.map((estimate, index) => (
            <EstimateCard {...estimate} key={index} index={index} data={data} setData={setData} />
          ))}
        </div>
      )}
    </>
  );
}

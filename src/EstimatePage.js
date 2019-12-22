import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EstimatePage() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/estimate/" + id);
      if (response) {
        console.log(response);
        setData(response.data);
        setIsLoading(false);
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
        <div className="estimate-page">
          <div>
            <p>Order ID : {data.orderId}</p>
            <p>Email : {data.email}</p>
            <p> Type de bien : {data.typeOfProperty}</p>
            <p> État du bien :{data.conditionOfProperty}</p>
            <p> Utilisation du bien :{data.useOfProperty}</p>
            <p> Situation actuelle :{data.currentSituation}</p>
            <p> Ville :{data.locationOfProperty.city}</p>
            <p> Pays :{data.locationOfProperty.Pays}</p>
            <p>
              <u> Montant estimé du projet :</u>
            </p>
            <ul>
              <li>valeur estimée : {data.estimatedValueOfProject.valueOfProperty} €</li>
              <li>valeur estimée : {data.estimatedValueOfProject.costOfRenovation} €</li>
              <li>valeur estimée : {data.estimatedValueOfProject.notaryFees}€ </li>
              <li>valeur estimée : {data.estimatedValueOfProject.totalBudget}€ </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

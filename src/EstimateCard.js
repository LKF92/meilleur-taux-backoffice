import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";
import Trash from "./Trash";
import axios from "axios";

export default function EstimateCard({
  typeOfProperty,
  conditionOfProperty,
  useOfProperty,
  currentSituation,
  locationOfProperty,
  estimatedValueOfProject,
  email,
  orderId,
  _id,
  index,
  data,
  setData
}) {
  const history = useHistory();

  const handleDelete = async () => {
    const response = await axios.post(
      "https://meilleur-taux-backend.herokuapp.com/estimate/delete",
      {
        //fonctionne en local
        // const response = await axios.post("http://localhost:3000/estimate/delete", {
        _id: _id
      }
    );
    let copy = [...data];
    copy.splice(index, 1);
    setData(copy);
    console.log(response);
  };

  return (
    <>
      <div className="card-estimate">
        <div className="trash" onClick={handleDelete}>
          <Trash />
        </div>
        <Link to={"/estimate/" + _id}>
          <p>Order ID : {orderId}</p>
          <p>Email : {email}</p>
          <p> Type de bien : {typeOfProperty}</p>
          <p> État du bien :{conditionOfProperty}</p>
          <p> Ville :{locationOfProperty.city}</p>
        </Link>
      </div>
    </>
  );
}

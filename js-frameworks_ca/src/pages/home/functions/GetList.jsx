import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { listUrl } from "../../../constants/api";
import AlertMessage from "../../../components/common/AlertMessage";
import SecondaryHeading from "../../../components/layout/headings/SecondaryHeading";

export default function BreweryList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getList() {
      try {
        const response = await axios.get(listUrl);
        setList(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getList();
  }, []);

  if (loading)
    return <AlertMessage className="alert loading">Loading...</AlertMessage>;
  if (error)
    return (
      <AlertMessage className="alert error">An error occurred</AlertMessage>
    );

  return (
    <div className="list__container">
      {list.map((brewery) => {
        return (
          <li key={brewery.id}>
            <SecondaryHeading title={brewery.name} />
            <p>Brewery type: {brewery.brewery_type}</p>
            <Link to={`/detail/${brewery.id}`}>View details</Link>
          </li>
        );
      })}
    </div>
  );
}

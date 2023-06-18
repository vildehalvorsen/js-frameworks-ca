import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { listUrl } from "../../../constants/api";
import MainHeading from "../../../components/layout/headings/MainHeading";
import AlertMessage from "../../../components/common/AlertMessage";

export default function DisplayListDetail() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { param } = useParams();

  if (!param) {
    navigate("/");
  }

  useEffect(function () {
    async function getDetail() {
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

    getDetail();
  }, []);

  if (loading)
    return <AlertMessage className="alert loading">Loading...</AlertMessage>;
  if (error)
    return (
      <AlertMessage className="alert error">An error occurred</AlertMessage>
    );

  return (
    <>
      {list.map(function (brewery) {
        if (brewery.id === param) {
          return (
            <div key={brewery.id} className="brewery__container">
              <div className="brewery__container--header">
                <MainHeading title={brewery.name} />
                <p>Type of brewery: {brewery.brewery_type}</p>
              </div>
              <div className="brewery__container--info">
                <p id="adress">Adress:</p>
                <p>{brewery.street}</p>
                <p>
                  {brewery.postal_code} {brewery.city}
                </p>
                <p>{brewery.state}</p>
                <p>{brewery.country}</p>
              </div>
              <div>
                {brewery.website_url ? (
                  <a href={brewery.website_url}>Visit website</a>
                ) : (
                  <p>No website listed</p>
                )}
              </div>
            </div>
          );
        }
        return true;
      })}
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function Question() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://qalogisticsback.boxai.mx/app/ws/questions/"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Respuesta del Endpoint</h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default Question;

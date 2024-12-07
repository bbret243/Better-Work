// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (apiCall) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall();
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiCall]);

  return { data, loading, error };
};

export default useFetch;

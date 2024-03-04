import { useEffect, useState } from "react"

export const useFetchMultipleUrl = (urls = []) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const jsonResponses = await Promise.all(responses.map(response => response.json()));
      setState(jsonResponses);
      setLoading(false);
  };
  fetchData();
  }, [])

  return [state, setState, loading, setLoading]
}
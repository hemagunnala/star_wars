"use client"

const { useState, useEffect } = require("react")

export const useFetchAndSet = (apiFn) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiFn().then((data) => {
      setState(data);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return [state, setState, loading, setLoading];
}
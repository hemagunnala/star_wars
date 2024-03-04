"use client"
import PlanetContainer from "@/components/PlanetContainer";
import { useFetchAndSet } from "./hooks/fetchAndSet";
import { API_SERVICE } from "./services/api";
import { useEffect, useState } from "react";
import PageButton from "@/components/PageButton";

export default function Planets() {

  const [planets, setPlanets, planetLoading, setPlanetLoading] = useFetchAndSet(API_SERVICE.getAllPlanets);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPlanetLoading(true);
    API_SERVICE.getPaginatedPlanets(currentPage + 1).then((data) => {
      setPlanets(data)
    }).finally(() => {
      setPlanetLoading(false)
    })
  }, [currentPage])
  return (
    <main className="w-full h-screen bg-white text-black">
      <header className="font-extrabold text-4xl text-center my-8">Planets</header>
      <PageButton totalCount={planets?.count || 0} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {<PlanetContainer planets={planets?.results} loading={planetLoading} />}
    </main>
  );
}

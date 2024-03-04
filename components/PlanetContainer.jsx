import React from "react";
import Card from "./Card";
import CardShimmer from "@/app/shimmers/CardShimmer";

const PlanetContainer = ({ planets = [], loading = false }) => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xs:my-8 xs:mx-2 sm:m-8 ">
      {loading ? (
        <>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <>
              <CardShimmer />
            </>
          ))}
        </>
      ) : (
        (planets || []).map((planet, index) => {
          return (
            <>
              <Card {...planet} />
            </>
          );
        })
      )}
    </div>
  );
};

export default PlanetContainer;

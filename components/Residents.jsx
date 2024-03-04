import { useFetchMultipleUrl } from "@/app/hooks/fetchMultipleUrl";
import CardShimmer from "@/app/shimmers/CardShimmer";
import React from "react";

const Residents = ({ residents = [] }) => {
  const [residentDetails, setResidentDetail, loading] =
    useFetchMultipleUrl(residents);
  return (
    <div>
      {loading ? (
        <CardShimmer />
      ) : (
        <div className="flex flex-col gap-4">
          {residentDetails.map(({ name, gender, mass, height }) => {
            return (
              <>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col m-4 gap-4">
                    <div className="grid grid-cols-2 gap-4 text-lg text-black">
                      <div>Name</div>
                      <div className="font-bold">{name}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-lg text-black">
                      <div>Gender</div>
                      <div className="font-bold">{gender}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-lg text-black">
                      <div>Mass</div>
                      <div className="font-bold">{mass}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-lg text-black">
                      <div>Height</div>
                      <div className="font-bold">{height}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {!residents.length && <div>Details not available</div>}
        </div>
      )}
    </div>
  );
};

export default Residents;

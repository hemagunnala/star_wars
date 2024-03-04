import React from "react";
import Residents from "./Residents";

const Card = ({
  name = "",
  climate = "",
  edited,
  gravity,
  orbital_period = "",
  population = "",
  terrain = "",
  residents = [],
}) => {
  return (
    <section className="bg-white rounded-lg border bg-card text-card-foreground shadow-sm text-black grid grid-rows-2 overflow-x-hidden overflow-y-scroll h-[600px]">
      <div className="sm:m-4 flex flex-col gap-2">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Climate</div>
            <div className="font-bold">{climate}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Edited</div>
            <div className="font-bold">{new Date(edited).toLocaleDateString('en-GB')}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Gravity</div>
            <div className="font-bold">{gravity}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Orbital Period</div>
            <div className="font-bold">{orbital_period}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Population</div>
            <div className="font-bold">{population}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg text-black">
            <div>Terrain</div>
            <div className="font-bold">{terrain}</div>
          </div>
        </div>
      </div>
      <div className="sm:m-4">
        <header className="text-xl font-bold my-4">Residents</header>
        <Residents residents={residents} />
      </div>
    </section>
  );
};

export default Card;

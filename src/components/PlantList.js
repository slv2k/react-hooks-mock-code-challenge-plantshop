import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard 
          key={plant.id}
          image={plant.image}
          name={plant.name}
          price={plant.price}
          />
        )
      })}
    </ul>
  );
}

export default PlantList;

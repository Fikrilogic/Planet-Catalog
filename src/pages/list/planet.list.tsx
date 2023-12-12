import React, { useEffect, useState } from "react";
import usePlanetController from "../../controller/planet.controller";
import { AppBar, Card, Footer } from "../../component/index";
import { PlanetContainer } from "./planet.list.style";
import Planet from "../../model/planet";

const PlanetCatalogList = () => {
  const { loading, data, error, getPlanet } = usePlanetController();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getPlanet();
  }, [getPlanet]);

  //   console.log(data);

  return (
    <div>
      <AppBar isopen={open} setIsOpen={setOpen} />
      <PlanetContainer>
        <div>
        {
          <ul>
            {data.length !== 0 &&
              data.map((planet: Planet, index: number) => (
                <li key={index}>
                  <Card
                    planet={planet}
                    imgUrl={
                      "https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-cartoon-planet-cute-combination-picture-saturn-png-image_2369142.jpg"
                    }
                  />
                </li>
              ))}
          </ul>
        }
        </div>
      </PlanetContainer>
      <Footer />
    </div>
  );
};

export default PlanetCatalogList;

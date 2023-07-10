import { useContext, useEffect, useState } from "react";
import "./components/TabNavigation";
import Card from "./components/Card";

import "./styles/output.css";
import FetchAPI from "./api/axios/axios";
import { APIProvider, APIContext } from "./context/APIContext";

function App() {
  const dataPokemon = useContext(APIContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await FetchAPI("pokemon/");
        dataPokemon.changeData(pokemonData);
      } catch (error) {
        dataPokemon.changeData(0);
      }
    };

    fetchData();
  }, []);

  // TO DO!!!
  // Learn GUARD

  const renderPokemon = (dataPokemon) => {
    const resultPokemon = dataPokemon.data;

    if (resultPokemon != null && resultPokemon != undefined) {
      resultPokemon.results.map((test) => {
        return <Card></Card>;
      });
    }
  };

  return (
    <div className="bg-red-200 w-full ">
      <div className="flex gap-3 flex-wrap justify-center after:flex-auto after:content-[' ']">
        {/* {console.log(dataPokemon)} */}
        {/* <TabNavigation></TabNavigation> */}
      </div>
    </div>
  );
}

export default App;

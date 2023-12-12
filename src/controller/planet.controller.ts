import PlanetRepositoryImpl from "../repository/planet_impl.repository";
import { useCallback, useMemo, useState } from "react";
import axios from "axios";
import Planet from "../model/planet";

const usePlanetController = () => {

  const repository = useMemo(()  => new PlanetRepositoryImpl(axios), [])
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Planet>>([]);
  const [error, setError] = useState<any | null>(null);

  const getPlanet = useCallback(async () => {
    setLoading(true);
    try {
      const data = await repository.get();
      console.log(data.results)
      setData(data.results??[]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  return {
    loading,data, error, getPlanet
  };
};

export default usePlanetController

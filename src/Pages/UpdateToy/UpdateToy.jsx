/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const loadedData = useLoaderData();
  const { title, photoURL, ratings, price, description } = loadedData;
  console.log(loadedData);
  return <div></div>;
};

export default UpdateToy;

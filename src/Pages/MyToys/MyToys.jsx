// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(user);
  // fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  console.log(myToys);
  return (
    <div>
      <table className="table-fixed w-full ">
        {/* head */}
        <thead className="border border-t-0 border-l-0 border-r-0 border-b-gray-500 bg-gray-100">
          <tr>
            <th className="py-5">Image</th>
            <th>Name</th>
            <th>Seller Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <MyToysRow key={toy._id} toy={toy}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

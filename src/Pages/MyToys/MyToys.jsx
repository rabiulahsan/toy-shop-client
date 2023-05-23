// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  //update function
  const handleUpdate = (id) => {
    // fetch(`http://localhost:5000/bookings/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ status: "confirm" }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       // update state
    //       const remaining = bookings.filter((booking) => booking._id !== id);
    //       const updated = bookings.find((booking) => booking._id === id);
    //       updated.status = "confirm";
    //       const newBookings = [updated, ...remaining];
    //       setBookings(newBookings);
    //     }
    //   });
  };

  //delete function
  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myToys.filter((booking) => booking._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  console.log(myToys);
  return (
    <div className="my-[5%] px-[8%]">
      <table className="table-fixed w-full bg-transparent">
        {/* head */}
        <thead className="border border-t-0 border-l-0 border-r-0 border-b-gray-500 bg-transparent">
          <tr>
            <th className="py-5">Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Seller Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <MyToysRow
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

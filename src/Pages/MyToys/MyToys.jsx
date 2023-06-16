// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [alltoy, setAlltoy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setAlltoy(data));
    const remaining = alltoy.filter((toy) => toy?.email === user?.email);
    setMyToys(remaining);
  }, [user]);

  //update function
  // const handleUpdate = (id) => {
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
  // };

  //delete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });

    //another way
    // const proceed = confirm("Are You sure you want to delete");
    // if (proceed) {
    // }
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
              // handleUpdate={handleUpdate}
            ></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

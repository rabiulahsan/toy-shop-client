/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // import React from "react";

import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete, handleUpdate }) => {
  console.log(toy._id);

  const { _id, title, email, photoURL, price } = toy;
  return (
    <tr className="hover:bg-gray-100 hover:text-black text-white  w-full text-center  ">
      <td className="py-5 ">
        <img src={photoURL} alt="" className=" h-16 rounded-2xl mx-auto" />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td className="">{email}</td>
      <td>
        <span className="cursor-pointer">
          <Link to={`/update/${_id}`}>
            <button className="button-style" onClick={() => handleUpdate(_id)}>
              Update
            </button>
          </Link>
        </span>
      </td>
      <td>
        <span className="cursor-pointer">
          <button className="button-style" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </span>
      </td>
    </tr>
  );
};

export default MyToysRow;

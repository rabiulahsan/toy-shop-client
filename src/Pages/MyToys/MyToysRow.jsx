// /* eslint-disable react/prop-types */
// // import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const MyToysRow = ({ toy, handleDelete, handleUpdate }) => {
  console.log(toy._id);

  const { _id, name, email, photoURL, price } = toy;
  return (
    <tr className="hover:bg-gray-100 hover:text-black text-white  w-full text-center  ">
      <td className="py-5 ">
        <img src={photoURL} alt="" className=" h-16 rounded-2xl mx-auto" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td className="">{email}</td>
      <td>
        <span onClick={() => handleUpdate(_id)}>
          <AiFillEdit></AiFillEdit>
        </span>
      </td>
      <td>
        <span onClick={() => handleDelete(_id)}>
          <AiFillDelete></AiFillDelete>
        </span>
      </td>
    </tr>
  );
};

export default MyToysRow;

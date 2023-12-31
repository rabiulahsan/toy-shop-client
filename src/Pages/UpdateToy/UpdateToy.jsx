/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const UpdateToy = () => {
  const loadedData = useLoaderData();
  const { _id, title, photoURL, ratings, price, description, quantity } =
    loadedData;
  console.log(loadedData);
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.name.value;
    const toyName = form.toyname.value;
    const sellerEmail = form.email.value;
    const photoURL = form.photoURL.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const description = form.textarea.value;

    if (!category) {
      return;
    }

    console.log(user.email);
    const toyDetails = {
      sellerName: sellerName,
      title: toyName,
      email: sellerEmail,
      photoURL: photoURL,
      quantity: quantity,
      price: price,
      ratings: rating,
      category: category,
      description: description,
    };

    fetch(`https://toy-shop-server-xi.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="my-[5%] px-[8%]">
      <form onSubmit={handleUpdate}>
        <div className="flex items-center justify-around text-black">
          <div className="form-control w-1/2 max-w-xs">
            {/* product name  */}
            <label className="label">
              <span className="label-text text-white">Toy Name</span>
            </label>
            <input
              required
              type="text"
              name="toyname"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              defaultValue={title}
            />

            {/* product photo  */}
            <label className="label mt-8">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <input
              required
              type="text"
              name="photoURL"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              defaultValue={photoURL}
            />

            {/* seller name */}
            <label className="label mt-8">
              <span className="label-text text-white">Your Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              readOnly
              defaultValue={user?.displayName}
            />

            {/* seller email  */}
            <label className="label mt-8">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control w-1/2 max-w-xs">
            {/* category */}
            <label className="label mt-8">
              <span className="label-text text-white">
                Select Product Category
              </span>
            </label>
            <div className="input-group">
              <select
                required
                className="select select-bordered text-black"
                name="category"
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="Marvel">Marvel</option>
                <option value="DC">DC</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Pirates ">Pirates of the Carrebean</option>
                <option value="Transformer">Transformer</option>
              </select>
            </div>

            {/* price  */}
            <label className="label mt-8">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              required
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              defaultValue={price}
            />

            {/* rating  */}
            <label className="label mt-8">
              <span className="label-text text-white">Rating</span>
            </label>
            <div className="input-group">
              <select
                required
                className="select select-bordered text-black"
                name="rating"
              >
                <option disabled selected>
                  Select Rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {/* quantity  */}
            <label className="label mt-8">
              <span className="label-text text-white">Quantity</span>
            </label>
            <input
              required
              type="number"
              name="quantity"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              defaultValue={quantity}
            />
          </div>
        </div>
        <label className="label mt-10 mx-[12.5%]">
          <span className="label-text text-white">Description</span>
        </label>
        <textarea
          required
          className="textarea textarea-bordered w-3/4 mx-[12.5%] text-black"
          placeholder="Description"
          name="textarea"
          defaultValue={description}
        ></textarea>
        <div className="flex justify-center items-center my-[5%]">
          <input
            className="button-style cursor-pointer"
            type="submit"
            value="Update Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;

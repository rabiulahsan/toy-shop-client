// import React from 'react';

const AddToy = () => {
  return (
    <div className="my-[5%] px-[8%]">
      <div className="flex items-center justify-around text-black">
        <div className="form-control w-1/2 max-w-xs">
          {/* product name  */}
          <label className="label">
            <span className="label-text text-white">Toy Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          {/* product photo  */}
          <label className="label mt-8">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />

          {/* seller name */}
          <label className="label mt-8">
            <span className="label-text text-white">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />

          {/* seller email  */}
          <label className="label mt-8">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />
        </div>
        <div className="form-control w-1/2 max-w-xs">
          {/* category */}
          <label className="label mt-8">
            <span className="label-text text-white">
              Select Produc Category
            </span>
          </label>
          <div className="input-group">
            <select className="select select-bordered text-black">
              <option disabled selected>
                Select Category
              </option>
              <option value="Marvel">Marvel</option>
              <option value="DC">DC</option>
              <option value="Harry Potter">Harry Potter</option>
              <option value="Pirates of the Carrebean">
                Pirates of the Carrebean
              </option>
              <option value="Transformer">Transformer</option>
            </select>
          </div>

          {/* price  */}
          <label className="label mt-8">
            <span className="label-text text-white">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />

          {/* rating  */}
          <label className="label mt-8">
            <span className="label-text text-white">Rating</span>
          </label>
          <div className="input-group">
            <select className="select select-bordered text-black">
              <option disabled selected>
                Select Rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* quantity  */}
          <label className="label mt-8">
            <span className="label-text text-white">Quantity</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs "
          />
        </div>
      </div>
      <label className="label mt-10 mx-[12.5%]">
        <span className="label-text text-white">Description</span>
      </label>
      <textarea
        className="textarea textarea-bordered w-3/4 mx-[12.5%]"
        placeholder="Description"
      ></textarea>
    </div>
  );
};

export default AddToy;

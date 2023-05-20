// import React from 'react';

const Blog = () => {
  return (
    <div>
      <p className="text-center text-4xl font-semibold py-[5%]">Blogs</p>
      <div className="px-[8%]">
        <p className="font-semibold text-xl">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
        <p className="text-lg mb-[5%] mt-4 text-gray-400">
          <span className="underline text-white">Answer :</span> Access token
          helps the user to get the asking data. Whereas, Refresh token helps
          user to stay authenticate for some days and also helps user to get new
          access token. In client side it canb e stored in cookies (http only
          cookie) or localstorages.
        </p>
        <p className="font-semibold text-xl">
          Compare SQL and NoSQL databases?
        </p>
        <p className="text-lg mb-[5%] mt-4 text-gray-400">
          <span className="underline text-white">Answer :</span> SQL database is
          a kind of database where data are stored in tabular format. But in
          NOSQL database data are stored in JSON objects.
        </p>
        <p className="font-semibold text-xl">
          What is express js? What is Nest JS (google it)?
        </p>
        <p className="text-lg mb-[5%] mt-4 text-gray-400">
          <span className="underline text-white">Answer :</span> Express JS is a
          web frame for node JS. After update NEXT JS is a react framework,
          which is used for a building full-stack web application.
        </p>
        <p className="font-semibold text-xl">
          What is MongoDB aggregate and how does it work (google it)?
        </p>
        <p className="text-lg pb-[5%] mt-4 text-gray-400">
          <span className="underline text-white">Answer :</span> Aggregation is
          a way of processing a large number of documents in a collection by
          means of passing them through different stages. The stages make up
          what is known as a pipeline. The stages in a pipeline can filter,
          sort, group, reshape and modify documents that pass through the
          pipeline.
        </p>
      </div>
    </div>
  );
};

export default Blog;

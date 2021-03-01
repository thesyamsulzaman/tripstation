import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

export default function Home() {
  return (
    <section className="bg-indigo-800 h-screen">
      <header className="header p-3 flex sticky top-0 inset-x-0 items-center justify-between">
        <FiMenu style={{ color: "#fff", fontSize: "1.5em" }} />
        <div className="image w-6 h-6 rounded-full bg-gray-500"></div>
      </header>
      <div className="user-banner p-3">
        <h1 className="text-gray-200 font-semibold text-2xl tracking-wide">
          Hi, Syamsul
        </h1>
        <p className="text-gray-400 tracking-wide text-sm mt-1">
          Find people to go on a travel with today
        </p>
      </div>
      <div className="mx-auto p-3 mt-2 h-screen bg-gray-100 rounded-xl">
        <div className="badges mt-2 flex overflow-scroll pb-3">
          <p className="text-xs text-indigo-500 font-bold px-3 py-1  bg-gray-300 rounded-md tracking-normal">
            Popular
          </p>
          <p className="text-xs text-gray-400 ml-2 px-3 py-1 bg-gray-300 rounded-md">
            Recommended
          </p>
          <p className="text-xs text-gray-400 ml-2 px-3 py-1 bg-gray-300 rounded-md">
            Recommended
          </p>
          <p className="text-xs text-gray-400 ml-2 px-3 py-1 bg-gray-300 rounded-md">
            Recommended
          </p>
          <p className="text-xs text-gray-400 ml-2 px-3 py-1 bg-gray-300 rounded-md">
            Recommended
          </p>
        </div>
        <div className="mt-1 py-2">
          <h1 className="text-xl font-semibold">Popular Posts</h1>
          <div className="posts">
            <div className="post-card mt-2 p-2 bg-white w-full h-auto shadow-sm rounded-md">
              <div className="post-user py-1 flex items-center">
                <div className="image w-8 h-8 rounded-full bg-black"></div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-800">
                    Sunmori ke Ujung Genteng
                  </p>
                  <p className="text-xs text-gray-500">Ujang Alexander</p>
                </div>
              </div>
              <div className="post-body mt-1">
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  consectetur adipisicing elit, sed eniam, quis nostrud
                  exercitation ullamco ...
                </p>
              </div>
              <div className="post-action mt-1 flex">
                <div className="likes flex items-center py-1">
                  <AiOutlineLike className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Likes </p>
                </div>
                <div className="comments flex items-center py-1 ml-2">
                  <AiOutlineComment className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Comments </p>
                </div>
              </div>
            </div>

            <div className="post-card mt-2 p-2 bg-white w-full h-auto shadow-sm rounded-md">
              <div className="post-user py-1 flex items-center">
                <div className="image w-8 h-8 rounded-full bg-black"></div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-800">
                    Sunmori ke Ujung Genteng
                  </p>
                  <p className="text-xs text-gray-500">Ujang Alexander</p>
                </div>
              </div>
              <div className="post-body mt-1">
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  consectetur adipisicing elit, sed eniam, quis nostrud
                  exercitation ullamco ...
                </p>
              </div>
              <div className="post-action mt-1 flex">
                <div className="likes flex items-center py-1">
                  <AiOutlineLike className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Likes </p>
                </div>
                <div className="comments flex items-center py-1 ml-2">
                  <AiOutlineComment className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Comments </p>
                </div>
              </div>
            </div>

            <div className="post-card mt-2 p-2 bg-white w-full h-auto shadow-sm rounded-md">
              <div className="post-user py-1 flex items-center">
                <div className="image w-8 h-8 rounded-full bg-black"></div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-800">
                    Sunmori ke Ujung Genteng
                  </p>
                  <p className="text-xs text-gray-500">Ujang Alexander</p>
                </div>
              </div>
              <div className="post-body mt-1">
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  consectetur adipisicing elit, sed eniam, quis nostrud
                  exercitation ullamco ...
                </p>
              </div>
              <div className="post-action mt-1 flex">
                <div className="likes flex items-center py-1">
                  <AiOutlineLike className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Likes </p>
                </div>
                <div className="comments flex items-center py-1 ml-2">
                  <AiOutlineComment className="text-gray-500" />
                  <p className="text-xs text-gray-500 ml-1">120 Comments </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

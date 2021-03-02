import React from "react";
import {
  HeaderContainer,
  UserBannerContainer,
  BadgeCategoriesContainer,
  PostsContainer,
  PostCardContainer
} from "../containers";

export default function Home() {
  return (
    <section className="bg-indigo-800 h-screen">
      <HeaderContainer />
      <UserBannerContainer />
      <div className="mx-auto p-3 mt-2 h-screen bg-gray-100 rounded-xl">
        <BadgeCategoriesContainer />
        <PostsContainer>
          <PostCardContainer />
          <PostCardContainer />
          <PostCardContainer />
        </PostsContainer>
      </div>
    </section>
  );
}

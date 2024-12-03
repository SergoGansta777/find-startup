import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from "react";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      description: "This is the description",
      category: "Robots",
      image:
        "https://t3.ftcdn.net/jpg/05/59/87/12/240_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg",
      title: "Mr. Robot",
      author: {
        _id: 1,
        name: "Adrian",
      },
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p className="no-results">No startup results</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;

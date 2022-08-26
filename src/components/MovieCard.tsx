import { MovieResult } from "moviedb-promise";
import Image from "next/image";

const MovieCard: React.FC<{ data: MovieResult }> = ({ data }) => {
  return (
    <div
      className="flex flex-col content-center justify-start border-2 
     w-48justify-self-center"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
        alt="Movie Poster"
        width={200}
        height={300}
      />
      <h1 className="font-bold">{data.title}</h1>
      <h1>{data.vote_average}</h1>
      <h1>{data.release_date}</h1>
    </div>
  );
};

export default MovieCard;
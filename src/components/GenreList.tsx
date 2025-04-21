import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { error, genres, isLoading } = useGenre();
  return (
    <ul>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

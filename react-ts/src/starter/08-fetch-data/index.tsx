import { fetchTours } from "./Types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });
  if (isPending) {
    return <h3>LOADING....</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => (
        <p key={tour.id} className="mb-1">
          {tour.name}
        </p>
      ))}
    </div>
  );
}
export default Component;

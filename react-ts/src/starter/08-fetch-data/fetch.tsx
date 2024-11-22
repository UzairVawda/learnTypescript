import { useState, useEffect } from "react";
import { type Tour, tourSchema } from "./Types";
const url = "https://www.course-api.com/react-tours-project";

function Component() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        const data: Tour[] = await response.json();

        const result = tourSchema.array().safeParse(data);
        console.log(result);
        if (!result.success) {
          throw new Error("Failed to parse data!");
        }
        console.log(result.data);
        setTours(result.data);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "error:(";
        setIsError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>LOADING....</h3>;
  }

  if (isError) {
    return <h3>{isError}</h3>;
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

import { z } from "zod";

// const url = "https://www.course-api.com/react-tours-projects";
const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.number(),
});

type Tour = z.infer<typeof tourSchema>;

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      throw new Error(`Failed with error code: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid Data: ${result.error}`);
    }

    console.log(result.data);

    return result.data;
  } catch (error) {
    console.log(error);

    const errorMessage: string =
      error instanceof Error ? error.message : "there was an issue ...";
    console.log(errorMessage);
    return [];
  }
};

const tours = await fetchData(url);

tours.map((tour: Tour) => {
  console.log(tour.something);
});

import { z } from "zod";
import axios from "axios";
const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);
  console.log(response);

  const result = tourSchema.array().safeParse(response.data);
  console.log(result);
  if (!result.success) {
    throw new Error("Failed to parse data!");
  }
  return result.data;
};

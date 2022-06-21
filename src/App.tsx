import { useQuery } from "@apollo/client";
import { GET_LESSONS } from "./graphql/queries/GET_LESSONS";
import { Lesson } from "types/Lesson";

export const App = () => {
  const { data: lessons } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS);

  return (
    <div>
      <ul>
        {lessons?.lessons.map((lesson, key) => (
          <li key={key}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
};

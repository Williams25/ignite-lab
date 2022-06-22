export type GetLessonsQueryResponse = {
  id: string;
  title: string;
  availableAt: string;
  slug: string;
  lessonType: "class" | "live";
};

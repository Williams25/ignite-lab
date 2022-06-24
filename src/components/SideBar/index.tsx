import { Spinner } from "phosphor-react";
import { Lesson } from "../";
import { useGet_LessonsQuery } from "../../graphql/generated";

export const SideBar = () => {
  const { data: lessons, loading } = useGet_LessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 overflow-hidden">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {!loading &&
          lessons?.lessons.map((item) => (
            <Lesson
              key={item.id}
              title={item.title}
              slug={item.slug!}
              type={item.lessonType}
              avaliableAt={new Date(item.availableAt)}
            />
          ))}

        {loading && (
          <div className="w-full h-[50vh] flex items-center justify-center animate-spin">
            <Spinner size={30} />
          </div>
        )}
      </div>
    </aside>
  );
};

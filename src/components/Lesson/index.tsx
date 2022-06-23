import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

export type LessonProps = {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({ avaliableAt, slug, title, type }: LessonProps) => {
  const isLessonAvaliable = isPast(avaliableAt);
  const availableDateFormated = format(
    avaliableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR
    }
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={`${
        isLessonAvaliable
          ? "group"
          : "opacity-50 cursor-no-drop pointer-events-none select-none"
      }`}
    >
      <span className="text-gray-300">{availableDateFormated}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} /> Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} /> Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
};

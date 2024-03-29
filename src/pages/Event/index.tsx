import { useParams } from "react-router-dom";
import { Header, SideBar, Video } from "../../components";
export type Params = {
  slug: string;
};

export const Event = () => {
  const { slug } = useParams<Params>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  );
};

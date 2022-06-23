export type GetLessonBySlugQueryResponse = {
  lesson: {
    description: string;
    videoId: string;
    title: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  };
};

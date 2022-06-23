import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG = gql`
  query GET_LESSON_BY_SLUG($slug: String) {
    lesson(where: { slug: $slug }) {
      description
      videoId
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_LESSONS = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      title
      slug
      availableAt
    }
  }
`;

import { gql } from "@apollo/client";

const GetTodo = gql`
  query todo($id: String!) {
    todo(id: $id) {
      text
      complete
    }
  }
`;

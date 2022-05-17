// query todo($id:String!) {
// 	todo(id: $id){
//     id,
//     text,
//     complete
//   }
// }

// mutation createTodo($title:String!, $complete: Boolean!){
//   createTodo(title: $title, complete: $complete)
// }

export default {
  Query: {
    hello(obj: any, { subject }: { subject: string }) {
      return `Hello, ${subject}! from Server`;
    },
    todo(obj: any, { id }: { id: string }) {
      return {
        id: id,
        text: "Make the graphql app",
        complete: true,
      };
    },
  },
  Mutation: {
    createTodo(
      obj: any,
      { title, complete }: { title: string; complete: string }
    ) {
      console.log(title, complete);
      return true;
    },
  },
};

import { graphql } from 'react-relay'
import commitMutation from 'relay-commit-mutation-promise'
import uuid from 'uuid/v4';

const mutation = graphql`
  mutation LoginMutation($input: loginInput!) {
    login(input: $input) {
      clientMutationId,
      user {
        id
      }
    }
  }
`

function commit({ environment, input }) {
  const variables = { 
    input: {
      clientMutationId: uuid(),
      ...input
    } 
  }

  return commitMutation(environment, {
    mutation,
    variables
  })
}

export default {
  commit
}
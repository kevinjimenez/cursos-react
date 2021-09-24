import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`
export const LoginMutation = ({ children }: any) => {
    return <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  }
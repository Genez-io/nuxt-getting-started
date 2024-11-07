import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
    }
  }
`;

export function useLoginMutation() {
  return useMutation(LOGIN_MUTATION);
}

export function useRegisterMutation() {
  return useMutation(REGISTER_MUTATION);
}

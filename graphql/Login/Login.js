import gql from 'graphql-tag';

// mutations
export const consultantLogin = gql`
    mutation(
        $email: String!
        $password: String!
    ) {
        consultantLogin(
            input: {
                email: $email
                password: $password
            }
        ) {
            __typename
            ... on Error {
                message
            }
            ... on LoginPayload {
                login_type
                type
                access_token
                expires_in
            }
        }
    }
`
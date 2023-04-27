import gql from 'graphql-tag'

// mutations
export const generateMBTIToken = gql`
  mutation {
    generateMBTIToken {
      token
      time
    }
  }
`

export const bcoLogin = gql`
  mutation ($token: String!, $time: Int!, $user_id: Int!) {
    bcoLogin(token: $token, time: $time, user_id: $user_id) {
      success
      usertype
      message
      access_token
      type
      expiration
    }
  }
`

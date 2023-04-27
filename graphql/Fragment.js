// global usage

import gql from 'graphql-tag'

export const message = gql`
    fragment ResponseMessage on Message {
        __typename
        ... on Success {
            message
        }
        __typename
        ... on Error {
            message
            status_type
        }
    }
`
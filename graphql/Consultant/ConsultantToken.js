import gql from 'graphql-tag';
import { message } from '../Fragment';

// queries
export const listConsultantToken = gql`
    query {
        listConsultantToken {
            consultant_id
            token_id
            token
            token_expiration
            token_status
            email
            token_url
        }
    }
`

export const validateConsultantToken = gql`
    query($token: String!) {
        validateConsultantToken(
            token: $token
        ) {
            __typename
            ... on TokenPayload {
                type
                token
                email
                first_name
                last_name
                nickname
                consultant_id
                expiration
            }
            __typename
            ... on Error {
                message
                status_type
            }
        }
    }
`

// mutations

export const resendConsultantToken = gql`
    mutation($consultant_id: ID!) {
        resendConsultantToken(
            consultant_id: $consultant_id
        ) {
            ...ResponseMessage
        }
    }
    ${message}
`

export const deleteConsultantToken = gql`
    mutation($token: String!) {
        deleteConsultantToken(
            token: $token
        ) {
            ...ResponseMessage
        }
    }
    ${message}
`

export const refreshConsultantToken = gql`
    mutation {
        refreshConsultantToken {
            ...ResponseMessage
        }
    }
    ${message}
`
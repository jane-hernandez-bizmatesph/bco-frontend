import gql from 'graphql-tag';
import { message } from '../Fragment';

// queries
export const consultants = gql `
    query($page: Int, $first: Int) {
        consultants(where: {column: STATUS, operator: EQ, value: 1}, page: $page, first: $first) {
            data {
                consultant_id
                first_name
                last_name
                nickname
                email
                start_date
                status
                created_at
            }
            paginatorInfo {
                count
                currentPage
                firstItem
                lastItem
                perPage
                total
                lastPage
            }
        }
    }
`


// mutations
export const registerConsultantEmail = gql `
    mutation($email: String!) {
        registerConsultantEmail(
            email: $email
        ) {
            ...ResponseMessage
        }
    }
    ${message}
`

export const updateConsultantByToken = gql `
    mutation(
        $token: String!
        $first_name: String
        $last_name: String
        $nickname: String
        $password: String
        $second_step: Int
    ) {
        updateConsultantByToken(
            token: $token
            input: {
                first_name: $first_name
                last_name: $last_name
                nickname: $nickname
                password: $password
                status: 1,
                second_step: $second_step
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

export const consultantResetPasswordByToken = gql `
    mutation(
        $token: String!
        $password: String!
    ) {
        consultantResetPasswordByToken(
            input: {
                token: $token
                password: $password
            }
        ) {
            __typename
            ... on Message {
                message
            }
        }
    }
`

export const deleteConsultant = gql `
    mutation($consultant_id: ID!) {
        deleteConsultant(consultant_id: $consultant_id) {
            ...ResponseMessage
        }
    }
    ${message}
`
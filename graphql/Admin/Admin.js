import gql from 'graphql-tag';
import { adminInfo } from './Fragment';
import { message } from '../Fragment';

// queries
export const fetchAdmins = gql`
    query($page: Int) {
        admins(page: $page) {
            data {
                ...AdminInfo
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
    ${adminInfo}
`

export const admin = gql `
    query($admin_id: ID) {
        admin(admin_id: $admin_id) {
            ...AdminInfo
        }
    }
    ${adminInfo}
`

// mutations
export const createAdmin = gql`
    mutation(
        $first_name: String!
        $last_name: String!
        $nickname: String!
        $email: String!
        $password: String!
        $role: Int
        $status: Int
    ) {
        createAdmin (
            input: {
                first_name: $first_name
                last_name: $last_name
                nickname: $nickname
                email: $email
                password: $password
                role: $role
                status: $status
            }
        ) {
            ...ResponseMessage
        }
    }
    ${message}
`

export const updateAdmin = gql`
    mutation(
        $admin_id: ID!
        $first_name: String!
        $last_name: String!
        $nickname: String!
        $email: String!
        $status: Int
        $role: Int
    ) {
        updateAdmin (admin_id: $admin_id, input: {
            first_name: $first_name
            last_name: $last_name
            nickname: $nickname
            email: $email
            status: $status
            role: $role
        }) {
            ...ResponseMessage
        }
    }
    ${message}

`
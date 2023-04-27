import gql from 'graphql-tag'

export const adminInfo = gql`
    fragment AdminInfo on Admin {
        admin_id
        first_name
        last_name
        nickname
        email
        role
        status
    }
`
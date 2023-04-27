import gql from 'graphql-tag'
import { timeslots } from './Fragment'

export const filterTimeslot = gql `
    query(
        $session_start_date: String
        $number_of_days: Int
        $consultant_id_or_nickname: String
    ) {
        filterTimeslot(
            input: {
                session_start_date: $session_start_date
                number_of_days: $number_of_days
                consultant_id_or_nickname: $consultant_id_or_nickname
            }
        ) {
            ...timeslots
        }
    }
    ${timeslots}
`

export const consultantTimeslot = gql `
    query(
        $session_start_date: String
        $number_of_days: Int
        $consultant_id_or_nickname: String
        $consultant_id: String
    ) {
        consultantTimeslot(
            input: {
                session_start_date: $session_start_date
                number_of_days: $number_of_days
                consultant_id_or_nickname: $consultant_id_or_nickname
                consultant_id: $consultant_id
            }
        ) {
            ...timeslots
        }
    }
    ${timeslots}
`

export const computeNewDate = gql `
    query(
        $current_start_date: String!
        $number_of_days: Int
        $add: Boolean
    ) {
        computeNewStartDate(
            input: {
                current_start_date: $current_start_date
                number_of_days: $number_of_days
                add: $add
            }
        )
    }
`
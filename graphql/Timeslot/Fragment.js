import gql from 'graphql-tag'

export const timeslots = gql`
    fragment timeslots on Timeslots {
        session_start_date
        number_of_days
        total_free_slots
        timeslots_by_date {
            free_slots
            session_date
            session_date_jp
            timeslots_by_datetime {
                session_date_time
                session_date
                session_time
                timeslots15_count {
                    tentative
                    total
                }
                timeslots30_count {
                    tentative
                    total
                }
                timeslots15 {
                    time_table_id
                    consultant_id
                    consultant_nickname
                    session_time_from
                    session_time_to
                    type
                    status
                }
                timeslots30 {
                    time_table_id
                    consultant_id
                    consultant_nickname
                    session_time_from
                    session_time_to
                    type
                    status
                }
            }
        }
    }
`
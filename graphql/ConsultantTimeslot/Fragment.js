import gql from 'graphql-tag'

export const consultantInfo = gql`
  fragment ConsultantInfo on ConsultanTimeSlot {
    consultant_id
    consultant_id_to_display
    consultant_nickname
    consultant_email
    consultant_firstname
    consultant_lastname
    time_table_status
    time_table_id
  }
`

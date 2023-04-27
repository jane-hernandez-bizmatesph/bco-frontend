import gql from 'graphql-tag'
import { message } from '../Fragment'

// queries
export const bookings = gql`
  query (
    $student_id: String
    $done: Int
    $todo: Int
    $page: Int
    $per_page: Int
    $sort_by: String
    $sort_type: String
  ) {
    bookings(
      student_id: $student_id
      done: $done
      todo: $todo
      page: $page
      per_page: $per_page
      sort_by: $sort_by
      sort_type: $sort_type
    ) {
      current_page
      last_page
      total
      list {
        booking_id
        student_id
        student_display_id
        session_no
        booked_by
        booked_by_type
        consultant_time_table_id
        consultant_nickname
        student_product_id
        booking_datetime
        booking_end_datetime
        consultation_date
        consultation_duration
        contract_start_date
        contract_type
        status
        done
        resolvable_by
        created_at
        updated_at
      }
    }
  }
`

// mutations
export const book = gql`
  mutation (
    $student_id: ID!
    $time_table_id: ID!
    $student_product_id: ID!
    $booked_by: ID
    $booked_by_type: Int!
    $student_contract_type: Int!
    $all_student_coaching_products: String!
  ) {
    book(
      input: {
        student_id: $student_id
        time_table_id: $time_table_id
        student_product_id: $student_product_id
        booked_by: $booked_by
        booked_by_type: $booked_by_type
        student_contract_type: $student_contract_type
        all_student_coaching_products: $all_student_coaching_products
      }
    ) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const updateResolver = gql`
  mutation ($booking_id: ID!, $resolvable_by: Int!) {
    updateResolver(booking_id: $booking_id, resolvable_by: $resolvable_by) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const cancelBooking = gql`
  mutation ($booking_id: ID!, $resolvable_by: Int!) {
    cancelBooking(booking_id: $booking_id, resolvable_by: $resolvable_by) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const updateDone = gql`
  mutation ($booking_id: ID!, $done: Int!) {
    updateDone(booking_id: $booking_id, done: $done) {
      ...ResponseMessage
    }
  }
  ${message}
`

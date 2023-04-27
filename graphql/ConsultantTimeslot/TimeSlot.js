import gql from 'graphql-tag'
import { message } from '../Fragment'
import { consultantInfo } from './Fragment'

// queries
export const searchConsultantAvailable = gql `
  query (
    $session_date_time: String
    $consultant_id_nickname_or_firstname: String
  ) {
    searchConsultantAvailable(
      input: {
        session_date_time: $session_date_time
        consultant_id_nickname_or_firstname: $consultant_id_nickname_or_firstname
      }
    ) {
      ...ConsultantInfo
    }
  }
  ${consultantInfo}
`

export const listAvailableConsultants = gql `
  query (
    $session_date_time: String
    $consultant_id_nickname_or_firstname: String
  ) {
    listAvailableConsultants(
      input: {
        session_date_time: $session_date_time
        consultant_id_nickname_or_firstname: $consultant_id_nickname_or_firstname
      }
    ) {
      ...ConsultantInfo
    }
  }
  ${consultantInfo}
`

// mutations

export const setTentativeTimeslotReservation = gql `
  mutation ($time_table_id: ID!) {
    setTentativeTimeslotReservation(time_table_id: $time_table_id) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const deleteTimeslot = gql `
  mutation ($time_table_id: ID!) {
    deleteTimeslot(time_table_id: $time_table_id) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const createTimeSlot = gql `
  mutation (
    $consultant_id: Int!
    $session_date: String!
    $session_date_time: String!
    $session_time_from: String!
    $session_time_to: String!
    $type: Int!
    $status: Int
  ) {
    createTimeSlot(
      input: {
        consultant_id: $consultant_id
        session_date: $session_date
        session_date_time: $session_date_time
        session_time_from: $session_time_from
        session_time_to: $session_time_to
        type: $type
        status: $status
      }
    ) {
      ...ResponseMessage
    }
  }
  ${message}
`

export const isDateDone = gql `
  query ($date: String!) {
    isDateDone(date: $date)
  }
`

export const currentDateTime = gql `
  query {
    currentDateTime
  }
`
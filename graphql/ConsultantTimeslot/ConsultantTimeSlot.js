import gql from 'graphql-tag';
import { consultantInfo } from './Fragment';

// queries
export const selectConsultantTimeSlot = gql `
  query (
    $session_date_time: String!
    $consultant_id: Int!
  ) {
    selectConsultantTimeSlot(
      input: {
        session_date_time: $session_date_time
        consultant_id: $consultant_id
      }
    ) {
      ...ConsultantInfo
    }
  }
  ${consultantInfo}
`
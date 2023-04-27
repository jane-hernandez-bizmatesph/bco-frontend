import gql from 'graphql-tag'

export const bco_all_student_info = gql`
  query ($students: [Int]!) {
    bco_all_student_info(students: $students) {
      student_id
      nickname
      email
      contract_type
      contract_type_name
      start_level_id
      level_id
      start_rank_id
      rank_id
    }
  }
`

export const bco_all_student_product_info = gql`
  query ($student_products: [Int]!) {
    bco_all_student_product_info(student_products: $student_products) {
      student_product_id
      student_id
      product_id
      plan_id
      order_no
      charge_id
      paid_at
      start_date
      end_date
      expiration
      status
    }
  }
`

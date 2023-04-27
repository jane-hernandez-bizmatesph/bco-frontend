import gql from 'graphql-tag'

// queries
export const bco_students_active_contract = gql`
    query($student_id: String) {
        bco_students_active_contract(
            input: {
                student_id: $student_id
            }
        ){
            nickname
            student_id
            email
            student_product_id
            all_coaching_products_desc {
                student_product_id
                student_id
                product_id
                plan_id
                order_no
                charge_id
                contract_type
                paid_at
                start_date
                end_date
                expiration
                status
            }
            
        }
    }
`

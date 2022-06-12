import { FETCH_PRODUCTS } from '../Types';

// takes a function and dispatches a new function
export const fetchProducts = () => (dispatch) => {
    
    client.query({
        query: gql`
            query productQuery($title: String!){ 
        category(input: {title: $title}){
          name
          products{
            inStock
            name
            id
            brand
            description
            gallery

            attributes{
              id
              type
              name

              items{
                id
                value
                displayValue
              }
            }
          
            prices{
              amount
              currency{
                label
                symbol
              }
            }
          }
      }
    }
    `})
    .then(result => console.log(result));
    
    dispatch({
        type: FETCH_PRODUCTS,
        payload: result.data.category.products
    });
}



// const ALLPRODUCT_QUERY = gql`
//     query productQuery($title: String!){ 
//         category(input: {title: $title}){
//           name
//           products{
//             inStock
//             name
//             id
//             brand
//             description
//             gallery

//             attributes{
//               id
//               type
//               name

//               items{
//                 id
//                 value
//                 displayValue
//               }
//             }
          
//             prices{
//               amount
//               currency{
//                 label
//                 symbol
//               }
//             }
//           }
//       }
//     }
// `
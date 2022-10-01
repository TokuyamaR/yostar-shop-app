import { Card } from "./Card";
// import { gql, useQuery } from "@apollo/client";

// const query = gql`
//   {
//     yostarShops {
//       data {
//         id
//         attributes {
//           name
//           description
//           image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const ShopList = () => {
  // const { loading, error, data } = useQuery(query);
  return (
    <div className="grid grid-cols-3">
      <Card />
    </div>
  );
};

export default ShopList;

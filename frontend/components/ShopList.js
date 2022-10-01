import { Card } from "./Card";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
  {
    yostarShops {
      data {
        id
        attributes {
          name
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const ShopList = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);
  return (
    <div className="grid grid-cols-3">
      <Card />
    </div>
  );
};

export default ShopList;

import { Card } from "./Card";
import { gql, useQuery } from "@apollo/client";

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

export const ShopList = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return;
  }

  if (data) {
    return (
      <div className="grid grid-cols-3">
        {data.yostarShops.data.map((shop) => (
          <Card key={shop.id} data={shop} />
        ))}
      </div>
    );
  } else {
    return <div className="grid grid-cols-3">お店の登録がありません。</div>;
  }
};

export default ShopList;

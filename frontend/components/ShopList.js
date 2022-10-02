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

export const ShopList = (props) => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return;
  }

  if (data) {
    const filteredShops = data.yostarShops.data.filter((shop) =>
      shop.attributes.name.toLowerCase().includes(props.search)
    );
    return (
      <div className="grid grid-cols-3 gap-4">
        {filteredShops.map((shop) => (
          <Card key={shop.id} data={shop} />
        ))}
      </div>
    );
  } else {
    return <h2 className="text-2xl font-bold">お店の登録がありません。</h2>;
  }
};

export default ShopList;

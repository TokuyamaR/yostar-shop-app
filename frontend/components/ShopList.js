import { Card } from "./Card";
import { gql, useQuery } from "@apollo/client";

const GET_SHOPS = gql`
  {
    shops {
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
  const { loading, error, data } = useQuery(GET_SHOPS);

  if (error) {
    return <h1>データの読み込みに失敗しました。</h1>;
  }
  if (loading) {
    return <h1>読み込み中です...</h1>;
  }

  if (data) {
    const filteredShops = data.shops.data.filter((shop) =>
      shop.attributes.name.toLowerCase().includes(props.search)
    );
    return (
      <div className="grid grid-cols-3 gap-4">
        {filteredShops.map((shop) => (
          <Card key={shop.id} data={shop} linkText="もっとみる" path="/shops" />
        ))}
      </div>
    );
  } else {
    return <h2 className="text-2xl font-bold">お店の登録がありません。</h2>;
  }
};

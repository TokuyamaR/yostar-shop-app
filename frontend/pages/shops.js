import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Card } from "../components/Card";
import { Cart } from "../components/Cart";

const GET_SHOP_ITEMS = gql`
  query ($id: ID!) {
    shop(id: $id) {
      data {
        id
        attributes {
          name
          items {
            data {
              id
              attributes {
                name
                description
                price
                quantity
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
      }
    }
  }
`;

const Shops = (props) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SHOP_ITEMS, {
    variables: { id: router.query.id },
  });

  if (error) {
    return <h1>データの読み込みに失敗しました。</h1>;
  }
  if (loading) {
    return <h1>読み込み中です...</h1>;
  }

  if (data) {
    const shopName = data.shop.data.attributes.name;
    const items = data.shop.data.attributes.items.data;

    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{shopName}</h1>
        <div className="flex">
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <Card
                key={item.id}
                data={{ ...item.attributes, id: item.id }}
                actionType="button"
                text="カートに入れる"
                path="/items"
              />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    );
  } else {
    return <h2 className="text-2xl font-bold">商品の登録がありません。</h2>;
  }
};

export default Shops;

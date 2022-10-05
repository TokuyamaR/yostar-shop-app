import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_SHOP_ITEMS = gql`
  query Shop($id: ID!) {
    items(id: $id) {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export const Shops = (props) => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SHOP_ITEMS, {
    variables: { id: router.query.id },
  });
  console.log(data);

  if (error) {
    return <h1>データの読み込みに失敗しました。</h1>;
  }
  if (loading) {
    return <h1>読み込み中です...</h1>;
  }
  return <h2 className="text-2xl font-bold">商品の登録がありません。</h2>;

  // if (data) {
  //   const filteredShops = data.shops.data.filter((shop) =>
  //     shop.attributes.name.toLowerCase().includes(props.search)
  //   );
  //   return (
  //     <div className="grid grid-cols-3 gap-4">
  //       {filteredShops.map((shop) => (
  //         <Card key={shop.id} data={shop} />
  //       ))}
  //     </div>
  //   );
  // } else {
  // return <h2 className="text-2xl font-bold">お店の登録がありません。</h2>;
  // }
};

export default Shops;

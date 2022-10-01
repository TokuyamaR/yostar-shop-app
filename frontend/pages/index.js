import ShopList from "../components/shopList";

function HomePage() {
  return (
    <div>
      <div>
        <button type="submit">探す</button>
        <input type="text" />
      </div>
      <div>
        <ShopList />
      </div>
    </div>
  );
}

export default HomePage;

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">Products Page</Link>
      </p>
    </>
  );
}

export default HomePage;

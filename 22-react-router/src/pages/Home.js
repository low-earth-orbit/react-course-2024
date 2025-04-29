import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // can be used to navigate programmatically

  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products">Products Page</Link>
      </p>
      {/* This is an example. We usually use the Link component to navigate between pages. But we can also use the useNavigate hook to navigate programmatically. */}
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;

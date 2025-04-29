import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  const productId = params.productId; // in route definition productId is a dynamic segment

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      <p>Details about the selected product will be displayed here.</p>
    </>
  );
}

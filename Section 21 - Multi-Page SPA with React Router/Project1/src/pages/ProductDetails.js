import { useParams, useLocation, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  const location = useLocation();

  console.log(params);
  console.log(location);
  return (
    <>
      <h1>Prodcut Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;

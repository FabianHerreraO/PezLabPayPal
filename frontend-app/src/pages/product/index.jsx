import { useEffect, useState } from "react";
import ConnectionManager from "../../ConnectionManager";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const init = async () => {
      let connection = new ConnectionManager();
      let response = await connection.getMovie(params.productId);
      setProduct(response);
    };
    init();
  }, [params.productId]);

  return (
    <>
      <Header />

      <section
        id="mobile-products"
        className="product-store position-relative padding-large"
      >
        <div className="container">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">
              {product.name}
            </h2>
          </div>
          <div className="d-flex">
            <div className="product-card me-5">
              <div className="image-holder">
                <img
                  src={product.image}
                  alt="product-item"
                  className="img-fluid"
                />
              </div>
              <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                <span className="item-price text-primary">
                  ${product.price}
                </span>
              </div>
            </div>
            <div className="review-item">
              <blockquote>{product.description}</blockquote>
            </div>
            
          </div>
        </div>
      </section>

     <Footer />
    </>
  );
}

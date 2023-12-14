import { useEffect, useState } from "react";
import useScript from "../components/useScript";
import ConnectionManager from "../ConnectionManager";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCarrito } from "../CarritoContext/CarritoContext";

const Inicio = () => {
  useScript("/static/js/jquery-1.11.0.min.js");
  useScript("https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js");
  useScript("/static/js/bootstrap.bundle.min.js");
  useScript("/static/js/plugins.js");
  useScript("/static/js/script.js");

  const [products, setProducts] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    const init = async () => {
      let connection = new ConnectionManager();
      let response = await connection.getMovies();
      setProducts(response);
    };
    init();
  }, []);

  const productsBillboard = products.slice(0, 2);

  return (
    <>
      <Header />

      <section
        id="billboard"
        className="position-relative overflow-hidden bg-light-blue"
      >
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            {productsBillboard.map((productBillboard) => (
              <div className="swiper-slide" key={productBillboard._id}>
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          ¡Productos exclusivos!
                        </h1>
                        <Link
                          to={`/producto/${productBillboard._id}`}
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Ver aquí
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img
                          width={502}
                          height={677}
                          src={productBillboard.image}
                          alt="banner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-icon swiper-arrow swiper-arrow-prev">
          <svg className="chevron-left">
            <use xlinkHref="#chevron-left" />
          </svg>
        </div>
        <div className="swiper-icon swiper-arrow swiper-arrow-next">
          <svg className="chevron-right">
            <use xlinkHref="#chevron-right" />
          </svg>
        </div>
      </section>

      <section id="company-services" className="padding-large">
        {/* ... Tu código existente ... */}
      </section>

      <section
        id="mobile-products"
        className="product-store position-relative padding-large no-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">
                Productos
              </h2>
              <div className="btn-right">
              <a
                  href="shop.html"
                  className="btn btn-medium btn-normal text-uppercase"
                >
            
                </a>

              </div>
            </div>
            
            <div className="swiper product-swiper">
              <div className="swiper-wrapper">
                {products.map((product) => (
                  <div key={product._id} className="swiper-slide">
                    
                      <div className="product-card position-relative">
                        <div className="image-holder">
                          <img
                            src={product.image}
                            alt="product-item"
                            className="img-fluid"
                          />
                        </div>
                        <section>
                        <div className="cart-concern position-absolute">
                          <div className="cart-button d-flex">
                            <button
                              onClick={() => agregarAlCarrito(product)}
                              className="btn btn-medium btn-black"
                            >
                              Add+
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="icon-cart"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                              </svg>
                            </button>
                            <br />
                            <Link
                              to={`/producto/${product._id}`}
                              className="btn btn-medium btn-black"
                            >
                              Ver producto
                            </Link>
                          </div>
                        </div>
                        </section>
                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                          <h3 className="card-title text-uppercase">
                            <Link to={`/producto/${product._id}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <span className="item-price text-primary">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center"></div>
      </section>

      <Footer />
    </>
  );
};

export default Inicio;

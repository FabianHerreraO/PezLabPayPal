export default function Footer() {
  return (
    <>
      <footer id="footer" className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="footer-top-area">
              <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu">
                    <img src="/fotos/logo.jpg" alt="logo" />
                    <p>
                    Pez Lab, se dedica a la serigrafía y textil, creando un producto 100% original y hecho a mano en su totalidad, 
                    diseños con influencia en el tatuaje que son convertidos para vestir una prenda u accesorio.
                    </p>
                    <div className="social-links">
                      <ul className="d-flex list-unstyled">
                        <li>
                          <a href="/#">
                            <svg className="facebook">
                              <use xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <svg className="instagram">
                              <use xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <svg className="twitter">
                              <use xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <svg className="linkedin">
                              <use xlinkHref="#linkedin" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <svg className="youtube">
                              <use xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Links</h5>
                    <ul className="menu-list list-unstyled text-uppercase">
                      <li className="menu-item pb-2">
                        <a href="/#">Home</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Sobre nosotros</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Compra</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Buscar</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Contacto</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Ayuda e Info</h5>
                    <ul className="menu-list list-unstyled">
                      <li className="menu-item pb-2">
                        <a href="/#">Sigue tu orden</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Acerca del envío</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Contáctanos</a>
                      </li>
                      <li className="menu-item pb-2">
                        <a href="/#">Preguntas frecuentes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu contact-item">
                    <h5 className="widget-title text-uppercase pb-2">
                      Contáctanos
                    </h5>
                    <p>
                      ¿Tienes alguna sugerencia o reclamo?{" "}
                      <a href="mailto:">pezlab@gmail.com</a>
                    </p>
                    <p>
                      ¿Necesitas ayuda? Llámanos
                      <div><a href="/#">+56 95626734</a></div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>

      <div id="footer-bottom">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-md-4 col-sm-6">
              <div className="Shipping d-flex">
                <p>Envíos pronto:</p>
                <div className="card-wrap ps-2">
                  <img src="/images/dhl.png" alt="visa" />
                  <img src="/images/shippingcard.png" alt="mastercard" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="payment-method d-flex">
                <p>Opciones de pago:</p>
                <div className="card-wrap ps-2">
                  <img src="/images/visa.jpg" alt="visa" />
                  <img src="/images/mastercard.jpg" alt="mastercard" />
                  <img src="/images/paypal.jpg" alt="paypal" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="copyright">
                <p>
                  © Copyright 2023 Pezlab Design by{" "}
                  <a href="https://templatesjungle.com/">TemplatesJungle</a>{" "}
                  Distribution by{" "}
                  <a href="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

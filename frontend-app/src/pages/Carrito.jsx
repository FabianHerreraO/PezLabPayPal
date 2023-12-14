import React, { useState, useEffect } from 'react';
import { useCarrito } from '../CarritoContext/CarritoContext';
import Header from './../components/Header';
import Footer from '../components/Footer';
import { PayPalButton } from 'react-paypal-button-v2';
import '../pages/Carrito.css';

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarProductoDelCarrito } = useCarrito();
  const [productosAgrupados, setProductosAgrupados] = useState([]);
  const [sumaTotal, setSumaTotal] = useState(0);

  useEffect(() => {
    const groupByProductId = (productos) => {
      return productos.reduce((agrupado, producto) => {
        const { _id, name, price, image } = producto;
        if (agrupado[_id]) {
          agrupado[_id].cantidad += 1;
        } else {
          agrupado[_id] = {
            _id,
            name,
            price,
            image,
            cantidad: 1,
          };
        }
        return agrupado;
      }, {});
    };

    const productosAgrupados = Object.values(groupByProductId(carrito));

    const sumaTotal = productosAgrupados.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );

    setProductosAgrupados(productosAgrupados);
    setSumaTotal(sumaTotal);
  }, [carrito]);

  const handleEliminarProducto = (productoId) => {
    eliminarProductoDelCarrito(productoId);
  };

  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };

  const onSuccessHandler = (details, data) => {
    console.log('Pago completado:', details);
    console.log('Datos del pago:', data);
    // Agrega lógica adicional si es necesario después de un pago exitoso
  };

  const onErrorHandler = (err) => {
    console.error('Error en el pago:', err);
    // Agrega lógica adicional si es necesario después de un error en el pago
  };

  const onCancelHandler = (data) => {
    console.log('Pago cancelado:', data);
    // Agrega lógica adicional si es necesario después de la cancelación del pago
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="text-center mt-4">
          <h2>Carrito de Compras</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosAgrupados.map((producto) => (
              <tr key={producto._id}>
                <td>
                  <img src={producto.image} alt={producto.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{producto.name}</td>
                <td>${producto.price}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleEliminarProducto(producto._id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center font-weight-bold mt-4">
          Suma Total: ${sumaTotal.toFixed(2)}
        </p>
        <div className="text-center mt-3">
          <button className="btn btn-primary mr-2" onClick={handleVaciarCarrito}>
            Vaciar Carrito
          </button>
          <br></br>
        </div>
        <div className='PayPalBtn'>
          <PayPalButton
            amount={sumaTotal.toFixed(2)}
            onSuccess={onSuccessHandler}
            onError={onErrorHandler}
            onCancel={onCancelHandler}
            options={{
              clientId: 'AeLeDEufmHYl_lgxi8kME6dqUI7Mxw8STzfX2l-YVQfFNdAkw0aErAhzsigiaDTNgIdBtFZJeyAtEKZ-', // Reemplaza con tu cliente de PayPal
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Carrito;

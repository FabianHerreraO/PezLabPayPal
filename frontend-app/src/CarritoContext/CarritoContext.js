import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para el carrito
const CarritoContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCarrito = () => {
  return useContext(CarritoContext);
};

// Proveedor del carrito que envuelve la aplicación
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Eliminar un producto del carrito
  const eliminarProductoDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter((producto) => producto._id !== productoId);
    setCarrito(nuevoCarrito);
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Definimos el valor del contexto
  const contextValue = {
    carrito,
    agregarAlCarrito,
    eliminarProductoDelCarrito,
    vaciarCarrito,
  };

  return (
    <CarritoContext.Provider value={contextValue}>
      {children}
    </CarritoContext.Provider>
  );
};

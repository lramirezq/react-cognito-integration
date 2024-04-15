import React, { useState, useEffect } from "react";
import "./Products.css"; // Importa tus estilos

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
 
    const token = localStorage.getItem("token-lrq");

    // Verificar si el token está disponible
    if (token) {
      // Realizar la solicitud GET al endpoint de productos
      fetch("https://at09vvobx0.execute-api.us-east-1.amazonaws.com/DEV/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": token // Enviar el token en el encabezado con el nombre "token"
        }
      })
        .then(response => {
            console.log(response);
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          return response.json();
        })
        .then(data => {
          setProducts(data);
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      setError("No existe Token");
    }
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <p>{error}</p>}

      <div className="table-container"> {/* Aplica el contenedor de la tabla */}
        <table className="table"> {/* Aplica la tabla */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}> {/* Agrega una clave única para cada fila */}
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;

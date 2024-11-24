import React, { useState, useEffect } from 'react';
import ProveedorForm from './components/ProveedorForm';
import ProveedorList from './components/ProveedorList';

function App() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('proveedores');
    if (data) setProveedores(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  }, [proveedores]);

  const addProveedor = (nuevoProveedor) => {
    setProveedores([...proveedores, nuevoProveedor]);
  };

  const updateProveedor = (id, updatedProveedor) => {
    setProveedores(
      proveedores.map((prov) => (prov.id === id ? updatedProveedor : prov))
    );
  };

  const deleteProveedor = (id) => {
    setProveedores(proveedores.filter((prov) => prov.id !== id));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Gestión de Proveedores</h1>
      <ProveedorForm addProveedor={addProveedor} />
      <ProveedorList
        proveedores={proveedores}
        updateProveedor={updateProveedor}
        deleteProveedor={deleteProveedor}
      />
    </div>
  );
}

export default App;

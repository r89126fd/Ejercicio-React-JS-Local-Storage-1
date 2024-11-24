import React from 'react';

function ProveedorList({ proveedores, updateProveedor, deleteProveedor }) {
  return (
    <div>
      <h3>Lista de Proveedores</h3>
      {proveedores.length === 0 && <p>No hay proveedores registrados.</p>}
      <ul className="list-group">
        {proveedores.map((prov) => (
          <li key={prov.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{prov.nombre}</strong> - {prov.email}
              <br />
              Dirección: {prov.direccion} | Teléfono: {prov.telefono}
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => updateProveedor(prov.id, { ...prov, nombre: 'Editado' })}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteProveedor(prov.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProveedorList;

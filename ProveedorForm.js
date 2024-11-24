import React, { useState } from 'react';

function ProveedorForm({ addProveedor }) {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    categoria: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      alert('Nombre y Email son obligatorios');
      return;
    }
    addProveedor({ ...formData, id: Date.now().toString() });
    setFormData({
      id: '',
      nombre: '',
      direccion: '',
      telefono: '',
      email: '',
      categoria: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          className="form-control"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          className="form-control"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Categoría</label>
        <input
          type="text"
          name="categoria"
          className="form-control"
          value={formData.categoria}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary">Agregar Proveedor</button>
    </form>
  );
}

export default ProveedorForm;

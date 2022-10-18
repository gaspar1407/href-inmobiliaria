const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Propiedades",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      metros: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ambientes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM("alquiler", "venta"),
        allowNull: false,
      },
      baños: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      garage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expensas: {
        type: DataTypes.INTEGER,
      },
      tipo: {
        type: DataTypes.ENUM(['alquiler', 'venta']),
        allowNull: false,
      },
      superficie: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      superficieCubierta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      superficieLibre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      piso: {
        type: DataTypes.INTEGER
      },
    },
    {
      timestamps: false,
    }
  );
};

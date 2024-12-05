import { DataTypes, Model } from "sequelize";
import db from "../db/conexion";

class Usuario extends Model {
  nombre: any;
  apellido: any;
  telefono: any;
  correo: any;
  idTipoDocumentoFK: any;
  idParqueaderoFk: any;
  placaVehiculo: any;
}

Usuario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    numDocumento: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idTipoDocumentoFK: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    idParqueaderoFk: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    placaVehiculo: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    modelName: "Usuario",
    tableName: "personas",
    timestamps: false
  }
);

export default Usuario;
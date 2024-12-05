"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    telefono: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
    },
    numDocumento: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    idTipoDocumentoFK: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
    },
    idParqueaderoFk: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
    },
    placaVehiculo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: conexion_1.default,
    modelName: "Usuario",
    tableName: "personas",
    timestamps: false
});
exports.default = Usuario;
//# sourceMappingURL=Usuarios.js.map
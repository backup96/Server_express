"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield Usuarios_1.default.findAll();
        if (!usuario) {
            return res.status(404).json({
                msg: `No se encontró ningun usuario`,
            });
        }
        return res.json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            msg: "Error al consultar el usuario",
            error: error.message,
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield Usuarios_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No se encontró un usuario con el id ${id}`,
            });
        }
        return res.json(usuario);
    }
    catch (error) {
        return res.status(500).json({
            msg: "Error al consultar el usuario",
            error: error.message,
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, telefono, numDocumento, correo, idTipoDocumentoFK, idParqueaderoFk, placaVehiculo } = req.body;
    try {
        const nuevoUsuario = yield Usuarios_1.default.create({
            nombre,
            apellido,
            telefono,
            numDocumento,
            correo,
            idTipoDocumentoFK,
            idParqueaderoFk,
            placaVehiculo,
        });
        return res.status(201).json({
            msg: "Usuario creado exitosamente",
            usuario: nuevoUsuario,
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Error al crear el usuario",
            error: error.message,
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, telefono, numDocumento, correo, idTipoDocumentoFK, idParqueaderoFk, placaVehiculo } = req.body;
    try {
        const usuario = yield Usuarios_1.default.findByPk(numDocumento);
        if (!usuario) {
            return res.status(404).json({
                msg: `No se encontró un usuario con el id ${numDocumento}`,
            });
        }
        usuario.nombre = nombre || usuario.nombre;
        usuario.apellido = apellido || usuario.apellido;
        usuario.telefono = telefono || usuario.telefono;
        usuario.correo = correo || usuario.correo;
        usuario.idTipoDocumentoFK = idTipoDocumentoFK || usuario.idTipoDocumentoFK;
        usuario.idParqueaderoFk = idParqueaderoFk || usuario.idParqueaderoFk;
        usuario.placaVehiculo = placaVehiculo || usuario.placaVehiculo;
        yield usuario.save();
        return res.json({
            msg: "Usuario actualizado exitosamente",
            usuario,
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Error al crear el usuario",
            error: error.message,
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield Usuarios_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No se encontró un usuario con el id ${id}`,
            });
        }
        yield usuario.destroy();
        return res.json({
            msg: "Usuario eliminado exitosamente",
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Error al consultar el usuario",
            error: error.message,
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map
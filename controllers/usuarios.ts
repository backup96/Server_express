import { application, Request, Response } from 'express'
import Usuario from "../models/Usuarios";

export const getUsuarios = async (req: Request, res: Response) => {
     try {
    const usuario = await Usuario.findAll();
    if (!usuario) {
      return res.status(404).json({
        msg: `No se encontró ningun usuario`,
      });
    }
    return res.json(usuario);
  } catch (error: any) {
    return res.status(500).json({
      msg: "Error al consultar el usuario",
      error: error.message,
    });
  }
}

export const getUsuario = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: `No se encontró un usuario con el id ${id}`,
      });
    }
    return res.json(usuario);
  } catch (error: any) {
    return res.status(500).json({
      msg: "Error al consultar el usuario",
      error: error.message,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
    
     const { nombre, apellido, telefono, numDocumento, correo, idTipoDocumentoFK, idParqueaderoFk, placaVehiculo } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({
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
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el usuario",
      error: error.message,
    });
  }
}

export const putUsuario = async (req: Request, res: Response) => {
    
    const { nombre, apellido, telefono, numDocumento, correo, idTipoDocumentoFK, idParqueaderoFk, placaVehiculo } = req.body;

  try {
    const usuario = await Usuario.findByPk(numDocumento);

     if (!usuario) {
      return res.status(404).json({
        msg: `No se encontró un usuario con el id ${numDocumento}`,
      });
    }

    usuario.nombre = nombre || usuario.nombre
    usuario.apellido = apellido || usuario.apellido
    usuario.telefono = telefono || usuario.telefono
    usuario.correo = correo || usuario.correo
    usuario.idTipoDocumentoFK = idTipoDocumentoFK || usuario.idTipoDocumentoFK
    usuario.idParqueaderoFk = idParqueaderoFk || usuario.idParqueaderoFk
    usuario.placaVehiculo = placaVehiculo || usuario.placaVehiculo

   await usuario.save();

    return res.json({
      msg: "Usuario actualizado exitosamente",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear el usuario",
      error: error.message,
    });
  }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    
    const { id } = req.params;

     try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: `No se encontró un usuario con el id ${id}`,
      });
    }
    await usuario.destroy();
      return res.json({
      msg: "Usuario eliminado exitosamente",
    });
  } catch (error: any) {
    return res.status(500).json({
      msg: "Error al consultar el usuario",
      error: error.message,
    });
  }
}


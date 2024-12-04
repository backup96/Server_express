import { Request, Response } from 'express'

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'Servicio de consulta de usuarios'
    })
}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    res.json({
        msg: 'Servicio de consulta de usuario específico',
        id
    })
}

export const postUsuario = (req: Request, res: Response) => {
    
    const { body } = req;
    res.json({
        msg: 'Servicio de construcción y agregado de usuarios',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Servicio para editar usuarios por id específico',
        body
    })
}

export const deleteUsuario = (req: Request, res: Response) => {
    
    const { id } = req.params;

    res.json({
        msg: 'Servicio para eliminación de usuarios por id específico',
        id
    })
}


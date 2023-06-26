import sql from 'mssql';
import configDB from '../models/db.js';


export class userService{
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Usuarios WHERE Id = @pId');
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        await conn.request().input("pId", id).query('DELETE FROM Usuarios WHERE Id = @pId');
        return results.recordset;
    }
    
    updateById = async (id, Usuario) => {
        const conn = await sql.connect(configDB);

        const UsuarioOriginal =  await this.getById(id)
        const results = await conn.request().input("pId", sql.Int, id)

        .input( "pNombre", sql.VarChar, Usuario?.Nombre ?? UsuarioOriginal.Nombre)
        .input("pApellido", sql.VarChar, Usuario?.Apellido ?? UsuarioOriginal.Apellido)
        .input( "pNacionalidad", sql.VarChar, Usuario?.Nacionalidad ?? UsuarioOriginal.Nacionalidad)
        .input("pDni", sql.Int, Usuario?.Dni ?? UsuarioOriginal.Dni)
        .input( "pFechaNacimiento", sql.Date, Usuario?.FechaNacimiento ?? UsuarioOriginal.FechaNacimiento)
        .input("pContrasena", sql.VarChar, Usuario?.Contrasena ?? UsuarioOriginal.Contrasena)
        .input( "pMail", sql.VarChar, Usuario?.Mail ?? UsuarioOriginal.Mail)
        var puntosTotales = UsuarioOriginal.Puntos + Usuario.Puntos

        .input("pPuntos", sql.Int, puntosTotales ?? UsuarioOriginal.Puntos)
        .query('UPDATE Usuarios SET Nombre = @pNombre, Apellido = @pApellido, Nacionalidad = @pNacionalidad, Dni = @pDni, FechaNacimiento = @pFechaNacimiento, Contrasena = @pContrasena, Mail = @pMail, Puntos = @pPuntos  WHERE Id = @pId');


        return results.recordset;
    }

    insert = async (Usuario) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pNombre", sql.VarChar, Usuario?.Nombre)
        .input("pApellido", sql.VarChar, Usuario?.Apellido)
        .input( "pNacionalidad", sql.VarChar, Usuario?.Nacionalidad)
        .input("pDni", sql.Int, Usuario?.Dni)
        .input( "pFechaNacimiento", sql.Date, Usuario?.FechaNacimiento)
        .input("pContrasena", sql.VarChar, Usuario?.Contrasena)
        .input( "pMail", sql.VarChar, Usuario?.Mail)
        .input("pPuntos", sql.Int, Usuario?.Puntos)

        .query('INSERT INTO Usuarios (Nombre, Apellido, Nacionalidad, Dni, FechaNacimiento, Contrasena, Mail, Puntos) VALUES (@pNombre, @pApellido, @pNacionalidad, @pDni, @pFechaNacimiento, @pContrasena, @pMail, @pPuntos)');

        return results.recordset;
    }
}
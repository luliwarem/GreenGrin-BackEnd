import sql from 'mssql';
import configDB from '../models/db.js';


export class userService{
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Usuarios WHERE Id = @pId');
        
        if (results.rowsAffected[0] == 0){
            return "Error";
        } 

        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM Usuarios WHERE Id = @pId');

        if (results.rowsAffected[0] == 0){
            return "Error";
        } 
    
    }
    
    updateById = async (id, Usuario) => {
        const conn = await sql.connect(configDB);

        const UsuarioOriginal =  await this.getById(id)

        if(Usuario.Puntos != undefined){
            var puntosTotales =  Usuario?.Puntos + UsuarioOriginal[0].Puntos 
        }
        
        const results = await conn.request().input("pId", sql.Int, id)

        .input("pNombre", sql.VarChar, Usuario?.Nombre ?? UsuarioOriginal[0].Nombre)
        .input("pApellido", sql.VarChar, Usuario?.Apellido ?? UsuarioOriginal[0].Apellido)
        .input("pNacionalidad", sql.VarChar, Usuario?.Nacionalidad ?? UsuarioOriginal[0].Nacionalidad)
        .input("pDNI", sql.Int, Usuario?.DNI ?? UsuarioOriginal[0].DNI)
        .input("pFechaNacimiento", sql.Date, Usuario?.FechaNacimiento ?? UsuarioOriginal[0].FechaNacimiento)
        .input("pContrasena", sql.VarChar, Usuario?.Contrasena ?? UsuarioOriginal[0].Contrasena)
        .input( "pMail", sql.VarChar, Usuario?.Mail ?? UsuarioOriginal[0].Mail)
        .input("pPuntos", sql.Int, puntosTotales ?? UsuarioOriginal[0].Puntos)
        .query('UPDATE Usuarios SET Nombre = @pNombre, Apellido = @pApellido, Nacionalidad = @pNacionalidad, DNI = @pDNI, FechaNacimiento = @pFechaNacimiento, Contrasena = @pContrasena, Mail = @pMail, Puntos = @pPuntos  WHERE Id = @pId');

        
        if (results.rowsAffected[0] == 0){
            return "Error";
        } 
    
        return results.recordset;
    }

    insert = async (Usuario) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pNombre", sql.VarChar, Usuario?.Nombre)
        .input("pApellido", sql.VarChar, Usuario?.Apellido)
        .input( "pNacionalidad", sql.VarChar, Usuario?.Nacionalidad)
        .input("pDNI", sql.Int, Usuario?.DNI)
        .input( "pFechaNacimiento", sql.Date, Usuario?.FechaNacimiento)
        .input("pContrasena", sql.VarChar, Usuario?.Contrasena)
        .input( "pMail", sql.VarChar, Usuario?.Mail)
        .input("pPuntos", sql.Int, Usuario?.Puntos)

        .query('INSERT INTO Usuarios (Nombre, Apellido, Nacionalidad, DNI, FechaNacimiento, Contrasena, Mail, Puntos) VALUES (@pNombre, @pApellido, @pNacionalidad, @pDNI, @pFechaNacimiento, @pContrasena, @pMail, @pPuntos)');

        return results.recordset;
    }
}
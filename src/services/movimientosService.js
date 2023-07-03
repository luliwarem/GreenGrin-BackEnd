import sql from 'mssql';
import configDB from '../models/db.js';


export class movimientosService{
    getAll = async () => {
        const conn = await sql.connect(configDB);
        let query = 'SELECT * FROM Movimientos'

        console.log(query)

        const results = await conn.request()
        .query(query)    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Movimientos WHERE Id = @pId');
        console.log(results)
        
        if (results.rowsAffected[0] == 0){
            return "Error";
        } 

        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM Movimientos WHERE Id = @pId');

        if (results.rowsAffected[0] == 0){
            return "Error";
        } 
    
    }
    
    
    insert = async (movimiento) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pId_Estaciones", sql.Int, movimiento?.Id_Estaciones)
        .input("pId_Usuario", sql.Int, movimiento?.Id_Usuario)
        .input( "pFecha", sql.Date, movimiento?.Fecha)
        .input("pCantBotellas", sql.Int, movimiento?.CantBotellas)
        .input("pPuntos", sql.Int, movimiento?.Puntos)

        .query('INSERT INTO Movimientos (Id_Estaciones, Id_Usuario, Fecha, CantBotellas, Puntos) VALUES (@pId_Estaciones, @pId_Usuario, @pFecha, @pCantBotellas, @pPuntos)');

        return results.recordset;
    }

}

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index ( request, response ) {
          
        try {

            const ongs = await connection('ongs').select('*');
            return response.json(ongs);

        } catch (err) {
           
            console.log(err);
            
        }
    },

    async create( request , response ) {
        
        try { 
    
            const { name, email, whatsapp , cidade, uf } = request.body;
            const id =  crypto.randomBytes(4).toString('HEX');
           
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                cidade,
                uf,
            })
    
            return response.json({id});
        
        } catch (erro) {
    
            console.log(erro);
        }
    } 

}
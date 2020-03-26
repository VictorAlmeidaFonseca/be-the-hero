const connection = require('../database/connection');

module.exports = {

    async index ( request , response ){
        
        try {

            const { page  = 1 } = request.query; 

            const [ count ] = await connection('incidents')
            .count();

            const incidentes = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1 ) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.cidade',
                'ongs.uf'
            ]);

            response.header('X-Total-Count', count['count(*)']);
            
            return response.json(incidentes);

        } catch (error) {
            
            console.log(error);
            
        }
    },   
    
    
    async create ( request, response ) {

        try {
            
            const { titulo , description, value } = request.body;
            const ong_id = request.headers.authorization;

            const [id] = await connection('incidents').insert({
                titulo,
                description,
                value,
                ong_id,
            })

            return response.json({id})


        } catch (error) {
            
            console.log(error)
        
        }
    },

    async delete ( request, response ) {
        
        try {

            const { id } = request.params;
            const ong_id = request.headers.authorization;

            const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
               
            if ( incident.ong_id !== ong_id ) {
                
                return response.status(401).json( {error: 'Operation not permitted'})
                
            } else {

                const del =  await connection('incidents').where('id', id).delete();
                return response.status(200).json( {message: 'Incident was deleted.'} );  

                } 
                                           
        } catch (error) {
            
            console.log(error)
        
        }      

    }
};
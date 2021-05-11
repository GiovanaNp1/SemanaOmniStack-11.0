const connection = require('../database/connection')

module.exports = {
    async create (request, response){
        const {id} = request.body;


        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            console.log(id)
            return response.status(404).json({ error: 'no ONG found with this ID' });
        }

        return response.json(ong);
    }
}
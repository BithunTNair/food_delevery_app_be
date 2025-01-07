const mongoose = require('mongoose');

const db = async () => {
    try {
        const database = await mongoose.connect(process.env.DB_URL)
        console.log('Database connected');
    } catch (error) {
        console.log(error);

    }


}

module.exports=db
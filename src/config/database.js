
require ('dotenv').config();

const {Sequelize}= require('sequelize');

    const sequelize = new Sequelize(
        process.env.DB_DATBASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,

        {
            host:process.env.DB_HOST,
            port:process.env.DB_PORT,
            dialect:"postgres",
            logging:false
        }
    );

    async function TestConnection(){

        try {

        await sequelize.authenticate();
        console.log("Data base connection succesfull");
        
        } catch (error) {

            console.error("Data base connectio unsuccesfull");
            process.exit(1);
            
        }

    }
    module.exports={ sequelize,TestConnection };


import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:4000',
    basePath: "/api",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/house.route'];

swaggerAutogen()(outputFile, endpointsFiles, doc);


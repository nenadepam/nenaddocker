import express from 'express'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT || 8080;
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Node-Docker API",
            description: "Node-Docker API Information",
            contact: {
                name: "Nenad the Amazing Developer"
            },
            servers: ["http://localhost:8080"]
        }
    },
    apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Initial path
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/", (req, res) => {
    res.json({ message: "App is running on docker container" })
})


app.listen(PORT, () => {
    console.log('App is running on port ' + PORT);
})
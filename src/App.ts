import * as express from 'express';

// Importamos las rutas
import EjemploRoute from './routes/ejemplo.route';

let bodyParser = require('body-parser');

class App {
  public express

  constructor () {
    this.express = express();
    this.express.use(bodyParser.json());
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router);
    // Rutas especificas
    this.express.use('/ejemplos', EjemploRoute);
  }
}

export default new App().express

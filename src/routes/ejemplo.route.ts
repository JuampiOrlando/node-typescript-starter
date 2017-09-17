import * as express from 'express';

class EjemploRoute {
  public express;
  public router;


  /*
  En este ejemplo, trabajamos con un stub en memoria (datosStub), pero podriamos
  persistir los datos.
  */
  private datosStub = [];

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.router = express.Router();

    this.router.get('/', (req, res) => {
      res.status(200).json({
        message: 'Estas son los resultados!',
        obj: this.datosStub
      })
    });

    this.router.post('/', (req, res) => {

      /*
      Controlamos los casos de error
      */
      if(!req.body.valorEjemplo){

        return res.status(400).json({
          title: 'Error',
          error: 'Explicacion del error'
        });
      }
      else{

        let nuevo = {
          valorEjemplo: req.body.valorEjemplo
        }

        this.datosStub.push(nuevo);

        res.status(200).json({
          message: 'Mensaje de exito de ejemplo!',
          obj: this.datosStub[this.datosStub.length -1]
        })

      }
    });

  }
}


export default new EjemploRoute().router;

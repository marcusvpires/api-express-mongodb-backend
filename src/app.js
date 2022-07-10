import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import middlewares from './middlewares'
class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://security:abretesesamo@matrix.aaphs.mongodb.net/mooncake?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    middlewares(this.server);
    this.routes();
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;

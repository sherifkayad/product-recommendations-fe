/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import renderRecos from './green-recos/render';

const app = express();
app.use(morgan('dev'));
app.use('/green/images', express.static('./images'));
app.use('/green', express.static('./build'));

app.use('/green/green-recos', (req, res) => {
  var recoArray = [];
  if(req.query.recos) {
     recoArray = req.query.recos.split(',');
  }
  res.send(renderRecos(recoArray, req.query.base_url));
});

app.listen(3002);
console.log(`💚  team green running. fragments are available here:
>> http://127.0.0.1:3002/green-recos`);

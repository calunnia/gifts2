import { createServer, Model } from 'miragejs';


let giftAdatok = [

  {
      name         : 'WV Bogar car',
      cost         : '30 000 000 Ft',
      fragile      : false,
      mass         : '1.500 kg',
      packed       : true,
      ageLimit     : 'adult',
      deliveryDate : '2021.03.11T13:00',
  },
  
  {
      name         : 'Vodka 0.5l',
      cost         : '3 000 Ft',
      fragile      : true,
      mass         : '0.5 kg',
      packed       : false,
      ageLimit     : 'adult',
      deliveryDate : '2021.03.01T15:00',
  },
  {
      name         : 'Board Game',
      cost         : '3 000 Ft',
      fragile      : true,
      mass         : '0.5 kg',
      packed       : false,
      ageLimit     : 'child',
      deliveryDate : '2021.05.14T12:30',
  },
  {
      name         : 'Gift card',
      cost         : '5 000 Ft',
      fragile      : false,
      mass         : '0.05 kg',
      packed       : true,
      ageLimit     : 'adult',
      deliveryDate : '2021.03.03T10:00',
  
  },
  
  {
      name         : 'Dummy',
      cost         : '2500 Ft',
      fragile      : true,
      mass         : '0.25 kg',
      packed       : true,
      ageLimit     : 'baby',
      deliveryDate : '2021.03.09T09:30',
  
  },
  {
      name         : 'Plant',
      cost         : '4500 Ft',
      fragile      : true,
      mass         : '1 kg',
      packed       : false,
      ageLimit     : 'adult',
      deliveryDate : '2021.05.15T17:00',
  
  },
  {
      name         : 'Harry Potter',
      cost         : '1500 Ft',
      fragile      : false,
      mass         : '0.5 kg',
      packed       : true,
      ageLimit     : 'child',
      deliveryDate : '2021.05.27T07:45',
  
  },
  {
      name         : 'Fireman Sam',
      cost         : '1500 Ft',
      fragile      : false,
      mass         : '0.5 kg',
      packed       : true,
      ageLimit     : 'baby',
      deliveryDate : '2021.05.27T07:45'
  
  }
  ,
  {
      name         : 'Nappy',
      cost         : '500 Ft',
      fragile      : false,
      mass         : '0.5 kg',
      packed       : true,
      ageLimit     : 'baby',
      deliveryDate : '2021.05.27T07:45'
  
  }
  ]

 

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    seeds(server) { },
    routes() {
      this.namespace = '/api';
      this.timing = 3000

      this.get('gifts', (schema, request) => {
       
          return (giftAdatok);
      });
    },
  });
  return server;
}

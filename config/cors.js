const WHITE_LIST = [
    'http://localhost:8080/',
    'http://localhost:8080/',
  ];
  exports.corsOptions = {
    origin: (origin, callback) => {
      console.log('Origin: ', origin); // eslint-disable-line no-console
      if (WHITE_LIST.includes(origin) || !origin) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  };
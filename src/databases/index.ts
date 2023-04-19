import { DB_DATABASE } from '@config';

//db config object
export const dbConnection = {
  url: `mongodb+srv://ishara:ishara1995@cluster0.3v0bt98.mongodb.net/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

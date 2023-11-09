import * as mongoose from 'mongoose';
const { DB_HOST, PORT = '3000' } = process.env;

export const databaseProviders = [
   {
      provide: DB_HOST,
      useFactory: (): Promise<typeof mongoose> => mongoose.connect('mongodb://localhost/nest'),
   },
];

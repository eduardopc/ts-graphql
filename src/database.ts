import mongoose from 'mongoose';

export default class DatabaseBootstrap {
  DBURI: string;
  
  constructor() {
    this.DBURI = process.env.DB_CONNECTION_STRING as string;
  }

  public async bootstrap(): Promise<void> {
    try {
        await mongoose.connect(
            this.DBURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.error('Database connected successfully');
    } catch (err) {
        console.error('Unable to connect to the database. Error:', err);
    }
  }
}
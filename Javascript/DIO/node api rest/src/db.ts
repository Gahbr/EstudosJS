import { Pool } from "pg";


const connectionString = 'postgres://kyqpkrrq:rCU4FXmedUt2fXIx4ljZRL-sodOvoJfE@kesavan.db.elephantsql.com/kyqpkrrq';

const db = new Pool ({connectionString})

export default db;


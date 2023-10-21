import {Database} from 'sqlite3';
const db = new Database(':memory:')

import { Pool } from 'pg'

const pool = new Pool()

export {db, pool};
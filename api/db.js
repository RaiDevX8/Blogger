import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Charan@1',
  database: 'blogger',
})

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack)
    return
  }
  console.log('Connected to database.')
})

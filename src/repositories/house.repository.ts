import db from "@src/db/db";

const create = async () => {
    db.serialize(() => {
        db.run('CREATE TABLE lorem (info TEXT)');

        const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

        for (let i = 0; i < 10; i++) {
            stmt.run(`Ipsum ${i}`)
        }

        stmt.finalize()
    });
}

export default {
    create,
    getAll() {
        return Promise.resolve([]);
    }
}

// db.serialize(() => {
//     db.run('CREATE TABLE lorem (info TEXT)')
//     const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
//
//     for (let i = 0; i < 10; i++) {
//         stmt.run(`Ipsum ${i}`)
//     }
//
//     stmt.finalize()
//
//     db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
//         console.log(`${row.id}: ${row.info}`)
//     })
// })
//
// db.close()
import {MigrationBuilder} from "node-pg-migrate";

export const up = async (pgm: MigrationBuilder) => {
    pgm.createTable('houses', {
        id: {
            type: "serial",
            primaryKey: true
        },
        name: {
            type: 'varchar(255)',
            notNull: true
        },
        roomsCount: {
            type: 'integer',
            notNull: true
        },
        location: {
            type: 'point',
            notNull: true,
        },
        builtAt: {
            type: 'date',
            notNull: true,
        },
        createdAt: {
            type: 'timestamp with time zone',
            default: pgm.func('current_timestamp'),
        },
        updatedAt: {
            type: 'timestamp with time zone',
            default: pgm.func('current_timestamp'),
        },
    })
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const { DB_HOST, PORT = '3000' } = process.env;
exports.databaseProviders = [
    {
        provide: DB_HOST,
        useFactory: () => mongoose.connect('mongodb://localhost/nest'),
    },
];
//# sourceMappingURL=database.providers.js.map
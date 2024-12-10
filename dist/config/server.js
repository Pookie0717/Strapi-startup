"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: [
            env('APP_KEY_1', '8uRjiUw46u5UpqHxNBbg4w=='),
            env('APP_KEY_2', 'eXHjq8Dnvhm5Th99uq3pdA==')
        ],
    },
});

module.exports = ({ env }) => [
    'strapi::errors',
    {
        name: 'strapi::cors',
        config: {
            origin: ['http://localhost:3000'], // Add your frontend's URL here
        },
    },
    'strapi::security',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];

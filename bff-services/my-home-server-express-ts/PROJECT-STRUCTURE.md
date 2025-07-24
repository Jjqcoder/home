```
├── .dockerignore
├── .env
├── .env.example
├── .nvmrc
├── app.js
├── code.json
├── config
│   └── index.ts
├── config-sample
│   └── index.ts
├── controller
│   ├── blogController.ts
│   ├── dbserviceVersionController.ts
│   ├── englishController.ts
│   ├── index.ts
│   ├── versionController.ts
│   ├── visitController.ts
│   └── weatherController.ts
├── docker-compose.yml
├── dockerfile
├── ecosystem.config.js
├── generate-structure.js
├── lib
│   ├── index.ts
│   ├── prisma.ts
│   └── redis.ts
├── markdown
│   └── dockerfile+pm2.md
├── middlewares
│   ├── index.js
│   ├── loggerMiddleware.js
│   └── recordVisitorsMiddleware.js
├── package.json
├── pnpm-lock.yaml
├── prisma
│   ├── prisma
│   │   └── client
│   │       ├── default.d.ts
│   │       ├── default.js
│   │       ├── edge.d.ts
│   │       ├── edge.js
│   │       ├── index-browser.js
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── libquery_engine-linux-musl-openssl-3.0.x.so.node
│   │       ├── package.json
│   │       ├── query_engine-windows.dll.node
│   │       ├── runtime
│   │       ├── schema.prisma
│   │       ├── wasm.d.ts
│   │       └── wasm.js
│   └── schema.prisma
├── PROJECT-STRUCTURE.md
├── public
│   └── favicon.ico
├── README.md
├── resource
│   └── weather
│       └── AMap_adcode_citycode.xlsx
├── routes
│   ├── blog.ts
│   ├── dbserviceVersion.ts
│   ├── english.ts
│   ├── index.ts
│   ├── version.ts
│   ├── visit.ts
│   ├── weather.ts
│   └── ws.ts
├── rpc
│   └── rabbitmq
│       └── index.js
├── service
│   ├── blogService.ts
│   ├── englishService.ts
│   ├── index.ts
│   ├── onlineCount
│   │   ├── index.ts
│   │   ├── ws.ts
│   │   └── wsAndRedis.ts
│   ├── rpc
│   │   ├── blogService.ts
│   │   ├── dbserviceVersionService.ts
│   │   ├── englishService.ts
│   │   └── visitService.ts
│   ├── version
│   │   ├── getVersion.ts
│   │   └── index.ts
│   ├── visitService.ts
│   └── weatherService.ts
├── tsconfig.json
├── types
│   └── config
│       └── index.ts
└── utils
    ├── index.ts
    ├── R.ts
    ├── test.ts
    └── xlsx.ts
```
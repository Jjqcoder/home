import express from 'express';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json';

const app = express();
app.use(express.json());

// 注册 tsoa 生成的路由
RegisterRoutes(app);

// 提供 Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/users?name=江建清`);
});
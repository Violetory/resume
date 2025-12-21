# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Docker 部署（NPM 构建）

- 构建镜像：`docker build -t resume-web .`
- 运行容器：`docker run --rm -p 8080:80 resume-web`
- 访问：`http://localhost:8080`

也可以用 Compose：`docker compose up --build`（同样暴露到 8080）。

## 生产部署（可重复）

在服务器上：

- 首次部署：
  - `git clone https://github.com/Violetory/resume.git`
  - `cd resume`
  - `docker compose -f docker-compose.prod.yml up -d --build`
- 后续更新：
  - `cd resume && git pull`
  - `docker compose -f docker-compose.prod.yml up -d --build`

默认监听 80 端口；如需改端口：`HOST_PORT=8080 docker compose -f docker-compose.prod.yml up -d --build`

`docker-compose.prod.yml` 默认会把 `web` 服务加入 Nginx Proxy Manager 的外部网络（默认 `npm_default`），方便在 NPM 里直接用容器名反代：

- 如果你的 NPM 网络名不同：`NPM_NETWORK=<你的网络名> docker compose -f docker-compose.prod.yml up -d --build`

如果服务器无法访问 Docker Hub，可指定可用镜像源（示例使用 DaoCloud 镜像）：

- `NODE_IMAGE=docker.m.daocloud.io/library/node:20-alpine \
   NGINX_IMAGE=docker.m.daocloud.io/library/nginx:1.27-alpine \
   docker compose -f docker-compose.prod.yml up -d --build`

也可以在本机一键上传并触发服务器构建（需要你已配置好 `ssh myserver`）：

- `HOST_PORT=8081 ./scripts/deploy-myserver.sh`

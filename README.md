## 数据请求  
前端页面发送请求到后端，后端取到数据后回传给前端，nodejs做中间层  
流程：
- /pages/*中的某个components触发数据请求
- 请求经`reudx action handler` -> `fetch /pages/api/*` -> `github api`
- 响应经`gtihub api` -> `/pages/api/*` -> `redux action handler` -> `redux reducer`  

## Tree
```
.
├── README.md
├── actions
│   └── index.ts
├── assets
│   └── style.css
├── components
│   ├── Helmet.tsx
│   ├── Home.tsx
│   ├── IconFont.tsx
│   ├── Layout.tsx
│   ├── Loading.tsx
│   └── styled
├── config
│   ├── api.ts
│   ├── sdk.ts
│   ├── site.ts
│   └── theme.ts
├── constants
│   └── index.ts
├── db
│   ├── connection.js
│   ├── data
│   │   └── Articles.ts
│   ├── database.sqlite
│   ├── entity
│   │   └── Articles.ts
│   ├── migration
│   └── subscribers
├── fetch
│   ├── fetchInstance.ts
│   └── index.ts
├── lib
│   ├── base64.ts
│   └── gtag.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   ├── home.ts
│   │   └── requestInstance.ts
│   └── index.tsx
├── reducers
│   ├── index.ts
│   └── initialState.ts
├── static
├── store
│   └── index.ts
├── tsconfig.json
└── utils
    ├── crypto.ts
    ├── formatDate.ts
    ├── number.ts
    └── setJs.ts
```

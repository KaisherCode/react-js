# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## ¿Qué es un componente?

## ¿Qué es el estado?

```jsx
  let parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1')) 
  if(!parsedTodos){
    localStorage.getItem('TODOS_V1',JSON.stringify([]))
    parsedTodos=[]
  }
```
```jsx
// const defaultTodos = [
//   { text: 'Hacer 30 minutos de yoga', completed: true },
//   { text: 'Cita con el dentista', completed: false },
//   { text: 'Comprar pan', completed: false },
//   { text: 'Actualización del sitio', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

```

## Deploy

`npm run build`

```jsx

"homepage": "/home/kaisher/developer/platzi/frontend-react/curso-react-js/dist"

```

````jsx

"homepage": "https://KaisherCode.github.io/react-js"

```

Instalar la herramienta gh-pages: `npm install --save-dev gh-pages`

En el archivo package.json.

```

"scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },

```

`npm run deploy`


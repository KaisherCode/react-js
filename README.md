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
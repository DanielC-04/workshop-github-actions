# Workshop: GitHub Actions para CI

## Objetivos

* Comprender qué es un flujo de trabajo _(workflow)_ en **GitHub Actions**.
* Implementar _Integración Continua (CI)_ real sobre un proyecto sencillo.
* Ejecutar pruebas automáticas y validaciones en cada `push`.
* Ver resultados claros en la pestaña _Actions de GitHub_.

## Trabajo 1: Implementación de una GitHub Action

### Paso 1: Clonar (fork) el proyecto

URL: `https://github.com/ecedenyo/workshop-github-actions.git`

### Paso 2: Crear workflow

Crear archivo:

`.github/workflows/ci.yml`

Contenido:

```nodejs
name: CI Workshop

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
```

Commit & push.

### Paso 3: Ver ejecución

1. Ir a pestaña Actions.
2. Ver workflow corriendo.
3. Confirmar que termina en verde ✅.

## Trabajo 2: Ejercicio de fallo controlado

1. Modificar algo en `app.js`, por ejemplo: `return a - b;`
2. Commit & push.
3. Observar ejecución de la _GitHub Action_.

## Trabajo 3: Reto

1. Crear nueva función `multiplica(a,b)`.
2. Crear su prueba automática.
3. Hacer commit.
4. Ver workflow ejecutarse exitosamente.

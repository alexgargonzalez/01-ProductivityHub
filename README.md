# 🚀 Flow Productivity - Pomodoro & Tasks

**Flow Productivity** es una herramienta web minimalista diseñada para optimizar el enfoque y la gestión del tiempo. Combina un temporizador basado en la **Técnica Pomodoro** con una lista de tareas dinámica para mantener un flujo de trabajo constante y organizado.

---

## ✨ Características Principales

* **🍅 Temporizador Pomodoro**: Ciclos de trabajo de 25 minutos con controles de inicio, pausa y reinicio.
* **📝 Gestión de Tareas (CRUD)**:
    * **Añadir**: Creación de tareas con ID único basado en `Date.now()`.
    * **Completar**: Sistema de checkboxes que actualiza el estado de la tarea.
    * **Eliminar**: Borrado de tareas individuales mediante filtrado inmutable.
* **🎉 Feedback Visual**: Celebración con confeti al completar tareas (integrando `canvas-confetti`).
* **🌚 Interfaz Dark Mode**: Estética moderna en tonos oscuros para reducir la fatiga visual.
* **📱 Diseño Responsive**: Adaptado para trabajar cómodamente en diferentes tamaños de pantalla.

---

## 🛠️ Tecnologías y Herramientas

* **Core**: [React](https://reactjs.org/) (Vite)
* **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
* **Estilos**: CSS3 / SCSS con diseño de bloques sólidos.
* **Efectos**: [Canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📦 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/alexgargonzalez/02-PomodoroTimer.git](https://github.com/alexgargonzalez/02-PomodoroTimer.git)
    ```

2.  **Entra en la carpeta del proyecto:**
    ```bash
    cd 02-PomodoroTimer/mi-proyecto-productividad
    ```

3.  **Instala las dependencias necesarias:**
    ```bash
    npm install
    ```

4.  **Instala las definiciones de tipo para TypeScript:**
    ```bash
    npm i --save-dev @types/canvas-confetti
    ```

5.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🧠 Lógica de Desarrollo

### Estructura de Datos
Para permitir el control individual de cada tarea, estas se manejan como objetos dentro de un array de estado:
```typescript
interface Task {
    id: number;
    text: string;
    completed: boolean;
}

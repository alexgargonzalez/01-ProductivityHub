import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './structure/Header'
import { Pomodoro } from './structure/PomodoroTimer'
import { TaskList } from './structure/TaskList'

function App() {
  return (

    <section>
      <Header />
      <main>
        <Pomodoro />
        <TaskList />
      </main>
    </section>
  )
}

export default App

import './global.css'

import styles from './app.module.css'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar />
      </main>
    </div>
  )
}

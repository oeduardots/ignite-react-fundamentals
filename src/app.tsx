import './global.css'

import styles from './app.module.css'
import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar />
        <Post />
      </main>
    </div>
  )
}

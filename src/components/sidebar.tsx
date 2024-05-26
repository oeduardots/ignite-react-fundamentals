import { PencilLine } from '@phosphor-icons/react'

import { Avatar } from './avatar'
import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/oeduardots.png" />
        <strong>Eduardo Tavares</strong>
        <span>Desenvolvedor Front-end</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

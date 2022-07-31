import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/luizguerradev.png" />
                <strong>Luiz Guerra</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    < PencilLine size='20px'/> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
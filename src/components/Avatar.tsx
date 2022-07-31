import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps  extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean; // ? = se a propriedade não é obrigatória 
}

export function Avatar({ hasBorder = true, ...props/*restOperator*/ }: AvatarProps){
    console.log(props)
    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}/*restOperator*/
        />
    )
}
/*SRC não ser estatico - vai ser variavel mantém com propriedade -> props
Propriedade tbm usada para avisar o componentes para usar ou não algum item especifico 
Colocado hasBorder em comment.jsx em Avatar

Antes
export function Avatar(props){
    return (
        <img className={styles.avatar} src={props.src} />
-
Durante 
    <img 
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={props.src} 
        />
    ficou tudo sem borda

Após
Usado o conceito de desestruturação do JS

const user = { name: Luiz }
const { name } = user;

export function Avatar({ hasBorder = true, src }){
    return (
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} 


*/
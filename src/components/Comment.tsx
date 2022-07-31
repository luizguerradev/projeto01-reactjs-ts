import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment:string) => void;

}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0); //sempre começar o useState com uma informação, nunca vazia e sempre seguindo com o tipo que vai receber 
        

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        }); // state para atualizar o valor de likes precisa saber qual o valor anterior de likes, por isso a a alteração de (likeCount + 1) para function acima 
    }
    //ou apagar a function acima e colocar no campo do botão do like a function ao lado  {() => setLikeCount(likeCount + 1)}
    return(
        <div className={styles.comment}> 
            <Avatar hasBorder={false} src="https://github.com/luizguerradev.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Guerra</strong>
                            <time title="18/07/2022 ás 13:52" dateTime="2022-07-18 13:53:47">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}


import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css'; 

/*
author: {avatar_url: "", name: "", role: ""}
publishedAt: Date
content: String

*/

const post = [{
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizguerradev.png',
      name:'Luiz Guerra',
      role: 'Dev Junior'
    },
    content: [ 
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉  Guerra.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-21 23:25:55')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name:'Diego Fernandes',
      role: 'RocketSeat CTO'
    },
    content: [ 
      { type: 'paragraph', content:'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉  Guerra.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-22 15:25:55')
  }
  
];

// iteração -  

export function App() {
  return( 
 
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {post.map(post =>{
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
    </div>
  )
}


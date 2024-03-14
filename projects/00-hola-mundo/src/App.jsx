import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import React from 'react'
import './App.css';

/*

*/

const users = [
    {   
        uuid:1,
        userName: 'gummibeer.dev',
        name: 'Jonathan Bernal',
        isFollowing: true,
      },
    {
      uuid:2,
      userName: 'midudev',
      name: 'gummibeer.dev',
      isFollowing: true,
    },
    {
      uuid:3,
      userName: 'anotherUser',
      name: 'Alice Johnson',
      isFollowing: false,
    },
    {
      uuid:4,
      userName: 'devGuru',
      name: 'John Smith',
      isFollowing: true,
    },
    {
      uuid:5,
      userName: 'codingNinja',
      name: 'Emily Brown',
      isFollowing: false,
    },
  ];
  
export function App(){
    const formatUserName = (userName) => `@${userName}`;

    return (
        /*<React.Fragment>*/
        <section className='App'>

            {
                users.map( ({ userName, name, isFollowing, uuid }) =>(

                        <TwitterFollowCard   
                            userName={userName}  
                            key={uuid} // se debe colocar el key como identificador unico    de ese elemento o compoenente
                            formatUserName={formatUserName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        >{name}</TwitterFollowCard>
                    )
                )
            }



        </section>
        /* </React.Fragment>*/
    );
}
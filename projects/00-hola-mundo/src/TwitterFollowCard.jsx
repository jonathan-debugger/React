import {useState} from 'react'; //Hooks

export function TwitterFollowCard({children, formatterdUserName, userName='unknown', name }){

/*
primera posicion valor del estado
2da posicion function que permite actualizar el estado

React es declarativo javascript es imperativo
*/
const [ isFollowing, setIsFollowing ] = useState(false); 

const buttonClassName = isFollowing
            ? 'tw-followCard-button is-following'
            : 'tw-followCard-button';

const handleClick = () =>{
    setIsFollowing(!isFollowing)
};

const text = isFollowing ? 'Siguiendo' : 'Seguir';


    return (
        <article className='tw-followCard'>
            <header  className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/duckduckgo/${userName}`} 
                    alt="El avatar de jonathan bernal"
                />
                <div className='tw-followCard-info'>
                    <strong >{name}</strong>
                    <span className='tw-followCard-infoUsername' >
                       {formatterdUserName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>
                        {text}
                    </span>
                    <span className='tw-followCard-stopFollow'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    );
}
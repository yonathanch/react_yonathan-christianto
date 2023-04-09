import article from './article'
import React, {useState} from 'react'

const ToggleArtikel = () => {
    const [languange, setLanguage] = useState('en');

    const toogleLang = () =>{
        setLanguage(languange === 'en' ? 'id' : 'en');
    }
    return (
        <div>
            <h3>{article.title[languange]}</h3>
            <p>{article.description[languange]}</p>
            <button className='btn btn-success' onClick={toogleLang}>
                {languange === 'en' ? 'Terjemahan Indonesia' : 'Switch English'}
            </button>
        </div>
    )
}


export default ToggleArtikel
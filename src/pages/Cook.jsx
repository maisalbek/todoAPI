import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cook2 from '../components/Cook2';

const Cook = () => {
    let navigate = useNavigate()
    const [meal, setMeal] = useState('')
    const handleChange=(e)=>{
        if(e.target.value==='Китайский суп'){
            setMeal('Китайский лук, Баранина, перец, сердце крысы')
        }else if(e.target.value==='Японский суп'){
            setMeal('Японский лук, Говядина, водоросли, рыба')
        }else if(e.target.value==='Корейский суп'){
            setMeal('Острый перец, вода, водоросли, рыба')
        }else if(e.target.value==='Узбекский суп'){
            setMeal('Рис, Картофель, перец, лук')
        }else if(e.target.value==='Кыргызский суп'){
            setMeal('Мясо, рыба, морковь, соль')
        }
    }
    return (
                <div style={{borderStyle: 'solid', width:'400px'}}>
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Китайский суп'/>
            <label htmlFor="">Китайский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Японский суп'/>
            <label htmlFor="">Японский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Корейский суп'/>
            <label htmlFor="">Корейский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Узбекский суп'/>
            <label htmlFor="">Узбекский суп</label><br />
            <input onChange={(e)=>handleChange(e)} type="radio" name='a' value='Кыргызский суп'/>
            <label htmlFor="">Кыргызский суп</label>
            <Cook2 meal={meal} />
            <button onClick={()=>navigate(-1)}>prev</button>
            <button onClick={()=>navigate(1)}>next</button>
        </div>
    );
};
export default Cook;
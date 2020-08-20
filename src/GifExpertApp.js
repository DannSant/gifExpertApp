import React, { useState } from 'react';
import  AddCategory  from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ()=>{
    //const categories = ['Age of Empires', 'Warcraft', 'Dragon ball']

    const [categories, setCategories] =  useState(['Age of Empires', 'Dark Souls', 'Bloodborne']);

   /*  const handleAdd = ()=>{
        setCategories([...categories, 'Dark Souls']);
    } */
    return(
        <>
            <h2>GIF Expert App</h2>
            <hr />
          <AddCategory setCategories={setCategories}/>
            <>
                {
                categories.map((category)=>{
                return <GifGrid key={category} category={category} />
                })
                }
            </>
        </>
    );
}

export default GifExpertApp;
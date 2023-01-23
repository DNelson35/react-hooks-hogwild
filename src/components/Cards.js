import React, { useState } from 'react'
import CardInfo from "./CardInfo";

export default function Cards({hogs}) {
    const [filter, setfilter] = useState(false)
    const [sort, setSort] = useState(false)
    const [hogList, sethogList] = useState(hogs)

     
    function sortList(){
        if(sort){
           return (hogList.sort( function (a, b) {
                return a.name === b.name ? 0 : a.name < b.name ? -1 : 1})
            )    
        } else{
            return(hogList.sort(function (a, b) {
                return a.weight === b.weight ? -1 : a.weight > b.weight ? -1 : 1
                })
            )
        }
    }

    
    function onFilter(){
        setfilter(!filter) 
        return (!filter) ? sethogList(hogList.filter(hog => hog.greased? hog : null)) : sethogList([...hogs])
    }

    function onSort(){
        setSort(!sort)
        sortList()
    }

    const CardList = hogList.map(hog => <CardInfo key={hog.name} hog={hog} />)


  
  return (
    <div>
        <label><b>See: </b></label>
        <button onClick={onFilter} vlaue={`${filter}`}>{filter? 'All' : 'greased'}</button>
        <br />
        <br />
        <label><b>Sort By: </b></label>
        <button onClick={onSort}>{sort?  'Name' : 'Weight'}</button>
        <br />
        <br />
        <br />
        {CardList}
    </div>
  )
}


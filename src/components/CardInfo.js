import React, { useState } from 'react'

export default function CardInfo({hog}) {
    const [isDisplayed, setIsDisplayed] = useState(false)

    const hogInfo = <div className='ui five wide column'>
        <ul>
            <li><b>Secialty:</b> {hog.specialty}</li>
            <li><b>Greased:</b> {hog.greased? 'True' : 'False'}</li>
            <li><b>Weight:</b> {hog.weight}</li>
            <li><b>Medals:</b> {hog["highest medal achieved"]}</li>
        </ul>

    </div>
  return (
    <div className="ui grid container" onClick={() => setIsDisplayed(!isDisplayed)}>
        <h2 className='ui five wide column'>
        {hog.name}
        </h2>
        <img className='ui five wide column' src={hog.image} alt="Should be pig"></img>
        {isDisplayed? hogInfo : null}
    </div>
  )
}

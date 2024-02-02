import React from 'react'

export const Listcmp = () => {
    const items = ['item1','item2','item3'];
    var stylelist = {
      backgroundColor : 'lightgreen'
    }
  return (
    <div style={stylelist}>
        <ul>
            {items.map((item) => (<li>{item}</li>))}
        </ul>
    </div>
  )
}

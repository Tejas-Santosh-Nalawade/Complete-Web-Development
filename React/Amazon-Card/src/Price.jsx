import React from 'react'

export const Price = ({oldPrice,newPrice}) => {
  let oldstyle={
    trextDecoation: 'line-through',
    color: 'grey'}
  let newstyle={
    fontWeight: 'bold',
    color: 'black'
  }
  let styles={
    backgroundColor: 'yellow',
    color: 'black',
    innerHeight: '150px',
    innerWidth: '150px',
    padding: '10px', 
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
  }
  return (
    <div style={styles}> 
        <span style={oldstyle}>{oldPrice}</span>
        &nbsp;
        &nbsp;
        <span style={newstyle}>{newPrice}</span>
    </div>

  )
}

export default Price
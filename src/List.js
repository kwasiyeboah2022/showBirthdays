import React from 'react'
//import data from './data'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <h4>{age}</h4>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default List

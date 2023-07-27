import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  //console.log(people)
  // const clearItem = () => {
  //   setPeople([])
  // }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App

// git remote add origin https://github.com/kwasiyeboah2022/birthday_reminder.git
// git branch -M main
// git push -u origin main

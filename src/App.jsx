import Persons from './Persons'
import data from './data'
import {useState} from 'react'

const App = () => {
const [people,setPeople] = useState(data)
 const handleClearButton = ()=> setPeople([])
  return (
    <main>
     <section className='container'>
       <h1>We have {people.length} birthdays today</h1>
       <Persons people={people}/>
       <button type='button' className='btn btn-block' onClick={handleClearButton}>Clear All</button>
     </section>
    </main>
  )
}
export default App
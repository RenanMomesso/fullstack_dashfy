import React, {useState, useEffect} from 'react'
import Candidate from '../../components/CandidateComponent'
import { API } from '../../utils'
import { MainHome, Filter } from './styles'

const Home = () => {

  const [candidatesUsers, setCandidateUsers] = useState(null)
  const [filterText, setFilterText] = useState("")

  const submitSearch = () => {
    if(filterText) {
     return fetch(`${API}/?q=${filterText}`)
     .then(res => res.json())
     .then(data => setCandidateUsers(data))
    } else {
      fetch(API)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCandidateUsers(data)
      })
      .catch(error => console.log(error))
    }
  }

  useEffect(()=>{
    submitSearch()
  },[]);

  return(
    <MainHome>
      <div>
        <h1>CANDIDATES</h1>
        <Filter>
          Filters:
          <input
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Search by country, city, name or position"/>
          <button type="submit" onClick={submitSearch}>Search</button>
        </Filter>
        {candidatesUsers &&  <Candidate candidates={candidatesUsers}/>}
      </div>
    </MainHome>
  )
}

export default Home

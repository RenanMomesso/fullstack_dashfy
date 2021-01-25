import React, {useState,useEffect} from 'react'
import { Link,useParams} from 'react-router-dom'
import { API } from '../../utils'
import {CandidateCard,MainCandidateDiv,TitleAndBackLink} from './styles'

const Candidate = () => {

  const { id } = useParams()
  const [candidate, setCandidate] = useState(null)

  useEffect(()=>{
    fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(data => setCandidate(data))
  },[])

  return(
    <MainCandidateDiv>
      <TitleAndBackLink>
        <Link to="/">
          {"Back"}
        </Link>
      <h1>Candidate</h1>
      </TitleAndBackLink>
      {candidate && (
      <CandidateCard>
        <img src={candidate.avatar}/>
        <div>
          <p><strong>Name: </strong>{candidate.name}</p>
          <p><strong>Country: </strong>{candidate.country}</p>
          <p><strong>City: </strong>{candidate.city}</p>
          <p><strong>Current Position: </strong>{candidate.current_position}</p>
          <p><strong>Proeficiences: </strong>{candidate.proficiencies.map(pro => <ul><li>{pro.name}</li></ul>)}</p>
          <strong>Experiences: </strong>{candidate.experiences.map(exp => <ul>
            <li><strong>Company: </strong>{exp.company}</li>
            <li><strong>Position: </strong>{exp.position}</li>
            <li><strong>Start Date: </strong>{exp.start_date}</li>
            <li><strong>Description: </strong>{exp.description}</li>
            </ul>)}
          <strong>Education: </strong>{candidate.education.map(educ => <ul>
            <li><strong>School name: </strong> {educ.school_name}</li>
            <li><strong>Course: </strong> {educ.course}</li>
            <li><strong>Graduation year: </strong> {educ.graduation_year}</li>
          </ul>)}


        </div>
      </CandidateCard>
     )
      }
    </MainCandidateDiv>
  )
}

export default Candidate;

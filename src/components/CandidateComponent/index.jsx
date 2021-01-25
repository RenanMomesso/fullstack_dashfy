import React from 'react'
import { useHistory } from 'react-router-dom';
import {
  CandidateAvatar,
  CandidateDiv,
  CandidateProfile,
  Container} from './styles'

const CandidateComponent = ({candidates}) => {
  const history = useHistory()
  const candidatePage = (id) => {
    history.push(`/candidate/${id}`)
  }

  const caractFunc = (category, apiCategory) => {
    return(
      <div>
        <strong>{category}</strong>
        <p>{apiCategory}</p>
      </div>
    )
  }

  return(
    <Container>
    {candidates.map(caracts => (
      <CandidateDiv key={caracts.id} onClick={() => candidatePage(caracts.id)}>
        <CandidateAvatar src={caracts.avatar} />
              <CandidateProfile className="sim">
               {caractFunc("Name", caracts.name)}
               {caractFunc("Current Position", caracts.current_position)}
               {caractFunc("City", caracts.city)}
               {caractFunc("Country", caracts.country)}
              </CandidateProfile>
      </CandidateDiv>
    ))}
    </Container> )}



export default CandidateComponent;

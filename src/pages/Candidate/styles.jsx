import styled from 'styled-components'

export const MainCandidateDiv = styled.div`
margin:auto;
background-color:white;
margin-top:50px;
width:50%;
border-radius:40px;
margin-bottom:20px;

@media(max-width: 600px) {
    width:380px;
    margin-bottom:20px;
  }
`
export const TitleAndBackLink = styled.div`
display:flex;
flex-direction:row;
align-items:center;
padding-left:50px;
  a {
  color:blue;
  text-decoration:none;
  padding-right:50px;
}
  h1 {
   color:orange;
   text-align:center;
   margin-left:120px;
}

@media(max-width: 600px) {
    padding-left:20px;
    h1 {
      margin-left:30px;
    }
  }
`
export const CandidateCard = styled.div`
display:flex;
flex-direction:row;
padding:40px;
 img {
  width:85px;
  height:75px;
  border-radius:100%;
  border:1px solid gray;
}
 div {
  margin-left:20px;
  font-size:16px;
  color:#292626;
}
`

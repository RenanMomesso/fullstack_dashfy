import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;

export const CandidateDiv = styled.div`
display:flex;
margin-right:10px;
padding:10px 0px 5px 20px;
flex-direction:row;
margin-bottom:20px;
box-shadow:4px 6px 6px 2px gray;
border-radius:5px;
@media (max-width:600px){
  width:300px;
}
cursor:pointer;
&:hover {
  background-color:#f3d397;
  img {
    background-color:white;
  }
}
`;

export const CandidateAvatar = styled.img`
width:auto;
height:60px;
border-radius:100%;
border:1px solid gray;
`;

export const CandidateProfile = styled.div`
margin-left:30px;
margin-top:0px;
display:flex;
flex-direction:row;
margin-right:20px;
@media (max-width:600px){
    display:flex;
    flex-direction:column !important;
}
div{
  width:100px;
  margin-right:15px;
  word-wrap:break-word;
  @media (max-width:600px){
    margin-bottom:10px;
  }
}
p {
  font-size:18px;
  margin:0px ;
}
`;

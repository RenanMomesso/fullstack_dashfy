import styled from 'styled-components'

export const MainHome = styled.main`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding: 0px 40px;
  border-radius: 40px;
  margin-bottom: 50px;

  @media (max-width:600px){
    div h1 {
      text-align:left;
    }
  }

div h1 {
  color: orange;
  text-align: center;
}
`

export const Filter = styled.div`
  margin-bottom:20px;


  input {
    width:400px;
    height:20px;
    border-radius:5px;
    padding-left:5px;
    margin-left:20px;
  }
  button {
    height:27px;
    background-color:orange;
    border:none;
    margin-left:10px;
    font-weight:bolder;
    border-radius:5px;
  }

  @media (max-width:600px){
    width:300px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-left:0px;

    input {
      width:200px;
      padding-left:0px;
      margin-left:0px;
      margin:5px 0px 5px 0px;
    }
    button {
      padding-left:0px;
      margin-left:0px;
    }
  }
`;

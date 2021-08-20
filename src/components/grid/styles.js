import styled from 'styled-components'

export const Header = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 80px;
  padding: 23px 0 23px 0;
  text-align: center;
  width: 100%;
  button {
    float: right;
    height: 90px;
    box-shadow: 5px 5px 5px;
    transition: ease-out 0.5s;
    // padding-bottom: 5px;
    // width: 250px;
    // padding: 0 0 5px 50px;
    padding-bottom: 7px;
    border-radius: 20px;
    text-align: center;
    font-family: cursive; 
    font-weight: bold;
    font-size: 60px;
    background-color: #25852E;
  }
`

export const Counter = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 5px;
  float: left;
  height: 90px;
  // width: ${props => props.victory ? '400px' : '250px'};
  padding: 0 50px 0 50px;
  border-radius: 20px;
  text-align: center;
  font-family: cursive; 
  font-weight: bold;
  font-size: 60px;
  background-color: orange;
  box-shadow: 5px 5px 5px;
  transition: ease-out 0.5s;
  div {
    float: left;
    height: 80px;
    margin-top: 1px;
  }
  img {
    float: right;
    height: 80px;
    margin-top: 3px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-right: 30px;
  // width: 100%;
  grid-template-columns: repeat(${props => props.cols}, 55px);
  grid-template-rows: repeat(${props => props.rows}, 47px);
  column-gap: 5px;
  row-gap: 5px;
`

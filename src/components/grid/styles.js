import styled from 'styled-components'

export const Header = styled.div`
  display: inline-block;
  height: 140px;
  padding-left: 400px;
  padding-top: 35px;
  text-align: center;
  button {
    float: right;
    margin-left: 100px;
    height: 102px;
    padding-bottom: 5px;
    width: 250px;
    border-radius: 25px;
    text-align: center;
    font-family: cursive; 
    font-weight: bold;
    font-size: 60px;
    background-color: #445f00;
  }
`

export const Counter = styled.div`
  float: left;
  height: 100px;
  width: ${props => props.victory ? '400px' : '250px'};
  border-radius: 25px;
  text-align: center;
  font-family: cursive; 
  font-weight: bold;
  font-size: 60px;
  background-color: orange;
  transition: ease-out 2s;
  img {
    height: 70px;
    margin-left: 10px;
    margin-top: 2px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  // width: 100%;
  // height: 100vh;
  grid-template-columns: repeat(${props => props.cols}, 53px);
  grid-template-rows: repeat(${props => props.rows}, 45px);
  column-gap: 5px;
  row-gap: 5px;
`

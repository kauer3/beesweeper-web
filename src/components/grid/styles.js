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
    height: 110px;
    width: 250px;
    border: 6px solid #033;
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
  width: 250px;
  border: 6px solid #033;
  border-radius: 25px;
  text-align: center;
  font-family: cursive; 
  font-weight: bold;
  font-size: 60px;
  background-color: orange;
  img {
    height: 70px;
    margin-left: 10px;
    margin-top: 2px;
  }
`

export const GridContainer = styled.div`
  // background: brown;
`

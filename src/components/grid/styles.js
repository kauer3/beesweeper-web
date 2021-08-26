import styled from 'styled-components'

export const Header = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 2.5%;
  padding: 23px 0 23px 0;
  text-align: center;
  width: 100%;
  button {
    cursor: pointer;
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
    background-color: #43A047;
    :hover {
      transform: scale(1.05, 1.03);
      filter: hue-rotate(45deg) saturate(250%);
      transition: ease 0.5s;
    }
  }
`

export const Counter = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 5px;
  float: left;
  height: 90px;
  // width: ${props => props.victory ? '400px' : '250px'};
  padding: 0 1.7% 0 2%;
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
    height: 85px;
    transition: ease-out 0.5s;
  }
  :hover {
    filter: saturate(200%);
    img {
      transform: scale(1.1) skew(-2deg, -2deg);
      transition: ease-out 0.5s;
    }
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
  opacity: ${props => props.opacity};
  transition: ease 1s;
`

export const Config = styled.img`
  height: 40px;
  filter: invert(75%);
  position: absolute;
  left: 30px;
  top: 35px;
  transition: ease-out 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.15) rotate(180deg);
    filter: invert(90%);
    transition: ease-out 0.3s;
  }
`

export const Icon = styled.img`
  height: ${props => props.cancel ? '25px' : '30px'};
  padding:  ${props => props.cancel ? '13px 15px 12px 15px' : '12px 15px 13px 15px'};
  transition: ease-out 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    filter: saturate(200%) drop-shadow(0px 0px 15px #${props => props.cancel ? '870000' : '00aa00'});
    transition: ease-out 0.3s;
  }
`

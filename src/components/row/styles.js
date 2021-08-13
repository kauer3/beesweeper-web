import styled from 'styled-components'

export const RowContainer = styled.div`
  display: flex;
  width: auto;
  margin-left: ${(props) => props.rowNumber % 2 === 0 ? '45px' : 'auto'};
  // border: 2px solid grey;
  // background: orange;
  text-align: center;
`

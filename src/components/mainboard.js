import React from 'react'
import styled from '@emotion/styled';
import Pin from './pin';
import './Mainboard.css';
function Mainboard(props) {
//add + button to add new pin

  let {pins}=props;

  return (
    
      <Wrapper>
        <Container className='mainboard__container'>
           {pins.map((pin, index) => {
            let { urls} =pin;
            return <Pin key={index} urls={urls} />
            })}
        </Container>
      </Wrapper>
    
  )
}

export default Mainboard

const Wrapper =styled.div`
    background-color:  ;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
    height: 100%;
`
const Container =styled.div`
    column-gap: 10px;
    margin: 10px auto;
    height: 100%;
    background-color: white;
`

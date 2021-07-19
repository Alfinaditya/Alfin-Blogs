import styled from 'styled-components'

export const Switch = styled.div`
  position: relative;
  margin: 20px;
  display: inline-block;
  width: 80px;
  height: 30px;
  border-radius: 20px;
`
export const ContainerSwitch = styled.div`
  position: fixed;
  bottom: 50%;
  right: 0;
`
// prismjs code higlightigng
export const Label = styled.label`
  border-radius: 20px;
  background-color: #bee5f7;
  width: 100%;
  height: 100%;
  display: block;
  border: 2px solid #84c2d8;
  &:before {
    position: absolute;
    color: white;
    text-align: center;
    font-size: 17px;
    left: 5px;
    top: 2px;
    border-radius: 50%;
    background-color: rgb(243, 243, 85);
    content: '🌞';
    color: rgb(148, 148, 9);
    line-height: 25px;
    width: 25px;
    height: 25px;
    display: block;
  }
`
export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 90px;
  height: 40px;
  cursor: pointer;
  &:checked + ${Label}::before {
    content: '🌛';
    line-height: 25px;
    font-size: 14px;
    background-color: #fffdf1;
    color: white;
    left: 50px;
  }
  &:checked + ${Label} {
    border: 2px solid #202020;
    background-color: #484848;
  }
`

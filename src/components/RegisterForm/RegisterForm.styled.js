import styled from "styled-components"

import { Field, Form} from "formik";

export const StyledForm = styled(Form)`
margin-top:50px;
width:320px;
margin:0;
padding: 0;
display: flex;
margin-bottom: 20px;
flex-direction: column;
gap:20px;

`

export const StyledField = styled(Field)`
border-radius: 5px;
margin-left:10px;
margin-top: 1opx;
width: 350px;
margin-left: 10px;
`
export const StyledLabel = styled.label`
margin-right: 0;
`

export const RegBtn = styled.button`
background-color: lightblue;
padding: 0;
border-radius: 5px;
width:150px;
height:30px;
  font-size: 12px;
  font-weight: 700; 
  border:none;
  outline: solid grey 1px;
  
  &:hover {
 background-color:#3f51b5;
  }

`





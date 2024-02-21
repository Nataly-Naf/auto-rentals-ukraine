import styled from "styled-components";

export const List = styled.ul`
margin-top:10px;
padding: 0;
list-style:none;

`

export const ListItem = styled.li`
margin-top: 10px;
padding: 0;
font-weight: 400;
color: #1a202c;
font-size:18px;


`
export const Number = styled.p`
margin-top: 10px;
display:inline;
padding: 0;
font-weight: 500;
color: #1a202c;
font-size:18px;


`
export const ListBtn = styled.button`
background-color: lightblue;
margin-left: 10px;

padding: 0;
border-radius: 5px;
width:60px;
height:20px;
  font-size: 12px;
  font-weight: 700; 
  border:none;
  outline: solid grey 1px;

  &:hover {
 background-color:lightgreen;
  }

`

import styled from "styled-components";



export const Body = styled.body`
background: rgba(0,10,0);
display: flex ;
flex-direction: column;
align-items:center;
justify-content: center;
min-height:100vh;


`
export const Div = styled.div `
display: flex:
align-items:center;
justify-content: center;
text-align: center;


font-size:1rem ;
font-family:Roboto 'san-serif';
font-weight: 500; 
color: black;

`

export const HomeContainer = styled.main `
display:flex;
gap: 3rem ;
width:100%;
Max-width: calc(100vw - ((100vw - 1180px) / 2));
margin-left: auto ;
min-height: 556px;


`


export const Footer = styled.footer`
  position: absolute;
  bottom: 0.25rem;
  left: 0.25rem;
  right: 0.25rem;
  padding:1.5rem;


  border-radius: 6px;


  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(0,0,0,0.6);

  transform: translateY(110%);
   opacity: 0;
    transition: all 0.2s ease-out;

 

`;

export const Products = styled.a`
background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
border-radius: 8px ;
padding:0.25rem;
cursor: pointer;
position: relative;
overflow: hidden;
min-width:500px;
color: #fff;

display: flex;
align-items: center;
justify-content: center;


img{
  object-fit: cover;
}
&:hover ${Footer}{
  transform: translateY(0%);
  
  opacity: 1;
}

`

export const Strong = styled.strong`
color:#fff
font-size:1.25rem;

`
export const Span = styled.span `
font-size: 1.5rem;
font-weight: bold;
color: rgba(0,170,0)


`
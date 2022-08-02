import styled from "styled-components";

type BotaoProps = {
    small ?: boolean;
    bg : string
}

type ContainerProps = {
    bgColor: string;
}

export const Botao = styled.button<BotaoProps>`
  font-size:${props => props.small ? '15px' : '30px'};
  background-color: ${props => props.bg};

`;

export const Container = styled.div<ContainerProps>`
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.bgColor};
  color: black;
  padding: 20px;
  display: flex;

  span{ font-weight: bold }

  .link {
    color:#ccc;

    &:hover{
    color:pink}
  }
  
  @media (max-width:500px){
    background-color: darkgreen;
    flex-direction: column;

      span{
        color: blue;
      }
  }

`;

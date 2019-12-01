import styled from "styled-components";

const StyledPlayer = styled.div`
  background: ${props => props.theme.bgcolor};
  border: ${props => props.theme.border};
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  transition: all 0.5s ease;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export default StyledPlayer;

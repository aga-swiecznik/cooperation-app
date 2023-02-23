import { Row } from "antd";
import styled from "styled-components";

export const GuttedRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;

  > * {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const StyledAction = styled.div`
  background-color: white;
  margin-bottom: 1rem;
  padding: 0.5rem;

  h2,
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0 0 0.5rem;
  }

  strong {
    opacity: 0.7;
  }
`;

export const LogoStyled = styled.div`
  font-size: 2rem;
  padding: 1.9rem 2.8rem;
  text-transform: uppercase;
  font-weight: 800;
`;

export const StyledActionPage = styled.div`
  dt {
    font-weight: 600;
    opacity: 0.7;
    display: inline-block;
    padding-right: 1rem;
  }

  dd {
    display: inline-block;
    margin: 0 0 0.5rem;
  }
`;

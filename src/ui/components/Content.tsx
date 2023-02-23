import { Layout } from "antd";
import styled from "styled-components";

export const Content = ({ children }: { children: JSX.Element }) => {
  return <StyledContent>{children}</StyledContent>;
};

const StyledContent = styled(Layout.Content)`
  margin: 1rem 1rem 0;
`;

export const ContentBox = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px 0 #dadada;
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

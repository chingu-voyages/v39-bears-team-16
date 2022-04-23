import styled from "styled-components";

export const AuthField = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  min-width: 300px;
  background: rgba(156, 156, 156, 0.329);
  border-radius: 10px;
  margin-bottom: 10px;
  input {
    border: none;
    background: none;
    width: 70%;
    height: 100%;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: grey;
      font-weight: 300;
    }
  }
  .fieldIcon {
    color: white;
  }

`;

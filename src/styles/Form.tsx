import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

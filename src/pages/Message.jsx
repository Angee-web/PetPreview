// import usestate from react
import { useState } from "react";
// import styled to allow styling
import styled from "styled-components";

// using the styled components
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  button {
    border-radius: 10px;
    background: black;
    color: white;
    border: 2px solid white;
    font-weight: bold;
  }
`;

const Message = () => {
  // function to declare a state variable for the message with an initial value
  const [message, setMessage] = useState("Hello, Welcome to Our Shelter!");

  // function to change the message
  const changeMessage = () => {
    setMessage("Thank you for Visiting Us!");
  };

  return (
    <Container>
      <h1>{message}</h1>
      <button onDoubleClick={changeMessage}>Change Message</button>
    </Container>
  );
};

export default Message;

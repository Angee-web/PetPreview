/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  height: auto;

  .imgContainer {
    width: 100%;
    height: 70%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

  .textBody {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    font-size: 20px;
    margin: 2px 0;
  }

  p {
    max-width: 100%;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 92%;
  }
`;

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPets = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://pets-v2.dev-apis.com/pets");
      const data = await res.json();
      setPets(data.pets); //update the pet to render on the UI

      // Wait for 5 seconds to ensure the loading indicator stays visible
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data.pets);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(pets);

  return (
    <Wrapper>
      {pets.map((pet) => (
        <StyledCard>
          <div key={pet.id} className="imgContainer">
            <img src={pet.images[0]} alt="placeholder image" />
          </div>

          <div className="textBody">
            <h2>{pet.name}</h2>
            <p>{pet.description}</p>
          </div>
        </StyledCard>
      ))}
    </Wrapper>
  );
}

export default App;

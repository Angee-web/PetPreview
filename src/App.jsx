/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import PreviewPets from "./component/PreviewPets";
import Button from "./component/Button";

const Wrapper = styled.div`
  display: flex;

  .petListContainer {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 24px;
    height: 100vh;
    // overflow-y: auto;
    overflow-x: hidden;
  }

  .previewContainer {
    flex: 1; /* Takes up half the space of the petListContainer component */
    padding: 24px;
    overflow-y: auto;
  }
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  height: 550px;

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
    gap: 8px;
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

  .preview {
    height: 26px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petPreview, setPetPreview] = useState({});

  const fetchPets = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://pets-v2.dev-apis.com/pets");
      const data = await res.json();
      setPets(data.pets); //update the pet to render on the UI

      // Wait for 5 seconds to ensure the loading indicator stays visible
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data.pets);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handlePreview = (pet) => {
    setPetPreview(pet);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      <div className="petListContainer">
        {pets.map((pet) => (
          <StyledCard>
            <div key={pet.id} className="imgContainer">
              <img src={pet.images[0]} alt="placeholder image" />
            </div>

            <div className="textBody">
              <h2>{pet.name}</h2>
              <p>{pet.description}</p>
              <Button
                text="Preview"
                bg="green"
                color="white"
                className="preview"
                onClick={() => handlePreview(pet)}
              />
            </div>
          </StyledCard>
        ))}
      </div>

      <div className="previewContainer">
        <PreviewPets petPreview={petPreview} />
      </div>
    </Wrapper>
  );
}

export default App;

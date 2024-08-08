/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 0 24px;
  width: 20vw;
  height: 100vh;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .imgContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 50%;
    gap: 20px;
    overflow-flow: auto;
    border-radius: 8px;
  }

  img {
    width: 200px;
    height: fit-content;
  }

  .petContent {
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    width:25vw;

    .petDetail {
      display: flex;
      justify-content: space-between;
      gap:10px;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
  }
`;

const PreviewPets = (props) => {
  const { petPreview: pet } = props;
  console.log("petPreview", pet);
  return (
    <Container>
      <h1>Previewing {pet.name}</h1>

      <div>
        <div className="imgContainer">
          {pet?.images?.map((img, idx) => (
            <img key={idx} src={img} alt={pet.name} />
          ))}
        </div>

        <div className="petContent">
          <div className="petDetail">
            <h3>Pet name</h3>
            <h3>{pet.name}</h3>
          </div>
          <div className="petDetail">
            <h3>Pet breed</h3>
            <h3>{pet.breed}</h3>
          </div>
          <div className="petDetail">
            <h3>Pet animal</h3>
            <h3>{pet.animal}</h3>
          </div>
          <div className="petDetail">
            <h3>Pet city</h3>
            <h3>{pet.city}</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PreviewPets;

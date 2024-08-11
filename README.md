# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


In this group project, we worked on different components using React hooks. 

In the components folder, there is:
1. PreviousPets.jsx

The PreviewPets component provides a clear and organized way to display detailed information about a pet, using modern CSS layout techniques for a polished user interface.

- Imports
* styled: Imported from styled-components to create styled components.
- Styled Component
* Container: A styled div with various CSS properties applied. It serves as the main wrapper for the component.
- Component Definition
* PreviewPets: A functional component that receives props and displays pet details using the styled Container.
. petPreview: Destructured from props and renamed to pet. It represents the pet data passed to the component.

- Rendering
* Container Structure:
. <Container>: The main styled container that holds all the content.
. <h1>: Displays a heading with the pet’s name.
. <div>: Wraps the image container and pet details.
* Image Container (.imgContainer):
. <div className="imgContainer">:
Uses CSS grid to layout the pet images in two columns.
. Images: Maps over pet.images and renders each image. Uses the pet’s name as the alt attribute.
* Pet Content (.petContent):
. <div className="petContent">:
Contains the pet details with margins, borders, padding, and width settings.
. Pet Details (.petDetail): Displays individual pet attributes (name, breed, animal type, city) in a flex layout with spacing and borders.


The App.jsx component is the main container for your application. It manages the state of pet data, handles data fetching, and displays a list of pets along with a preview of the selected pet.

- Imports
* useState, useEffect: Imported from React for state management and side effects.
* styled: Used to create styled components.
* PreviewPets: A component to display detailed information about a selected pet.
* Button: A reusable button component for user interactions.
* ./App.css: Assumed to be a CSS file for global styles (though it's not used directly in the component).

- Component Logic
* State Management:
. pets: Holds the list of pet data.
. isLoading: Tracks whether data is being loaded.
. petPreview: Holds the data for the pet selected for preview.
* Data Fetching:
. fetchPets: Fetches pet data from an API. Updates state with fetched pet data and manages loading state.
* Event Handlers:
. handlePreview:
Sets the petPreview state to the selected pet’s data when the preview button is clicked.
* Effect Hook:
. useEffect:
Calls fetchPets on component mount to load pet data.

- Rendering:
* Loading State: Displays a loading message while data is being fetched.
* Pet List: Maps over the pets array to render StyledCard components for each pet.
Each card contains an image, name, description, and a "Preview" button.
* Preview Container: Displays the PreviewPets component, showing details of the currently selected pet.

Summary:
* State Management: Manages pet data, loading state, and selected pet preview using React's useState and useEffect.
* Data Fetching: Fetches pet data from an external API and updates the component state.
* Styling: Uses styled-components for layout and styling.
* Conditional Rendering: Displays a loading indicator while data is being fetched.
* Interactivity: Allows users to click a button to preview details of a selected pet.
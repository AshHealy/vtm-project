import React, { useState } from 'react';
import Title from '../styles/Title.js';
import StyledLine from '../styles/StyledLine.js';
import StyledButton from '../styles/StyledButton.js';
import FormContainer from '../styles/ForumContainer.js';
import CharacterInfo from './formComponents/CharacterInfo.js';
import CharacterAttributes from './formComponents/CharacterAttributes.js';
import CharacterSkills from './formComponents/CharacterSkills.js';
import CharacterChronicles from './formComponents/CharacterChronicles.js';


const CharacterCreation = () => {
  const [characterInfo, setCharacterInfo] = useState({});
  const [attributes, setAttributes] = useState({});
  const [skills, setSkills] = useState({});
  const [chronicleInfo, setChronicle] = useState({});

  const handleCharacterInfoChange = (event, field) => {
    const { value } = event.target;
    setCharacterInfo(prevCharacterInfo => ({
      ...prevCharacterInfo,
      [field]: value,
    }));
    console.log(`Updated ${field}: ${value}`);
  };
 
  const handleAttributeChange = (event, attribute) => {
    const { value } = event.target;
    setAttributes(prevAttributes => ({
      ...prevAttributes,
      [attribute]: value,
    }));
    console.log(`Updated ${attribute}: ${value}`);
  };

  const handleSkillChange = (event, skill) => {
    const { value } = event.target;
    setSkills(prevSkills => ({
      ...prevSkills,
      [skill]: value,
    }));
    console.log(`Updated ${skill}: ${value}`);
  };

  const handleChronicleInfoChange = (event, chronicleinfo) => {
    const { value } = event.target;
    setChronicle(prevChronicleinfo => ({
      ...prevChronicleinfo,
      [chronicleinfo]: value,
    }));
    console.log(`Updated ${chronicleInfo}: ${value}`);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
  
  }

  return (
    <FormContainer>
      <Title>Character Creation </Title>

      <StyledLine></StyledLine>

    <form onSubmit={handleFormSubmit}>

      <CharacterInfo  
      handleCharacterInfoChange={handleCharacterInfoChange}
      characterInfo={characterInfo}
      />
      <button onClick={() => {console.log({characterInfo})}}>See console log</button>

        <StyledLine></StyledLine>

      <CharacterAttributes
      handleAttributeChange={handleAttributeChange}
      attributes={attributes}
      />

      <button onClick={() => {console.log({attributes})}}>See console log</button>

        <StyledLine></StyledLine>

      <CharacterSkills
      handleSkillChange={handleSkillChange}
      skills={skills}
      />

      <button onClick={() => {console.log({skills})}}>See console log</button>


        <StyledLine></StyledLine>

       

        <CharacterChronicles
        handleChronicleInfoChange={handleChronicleInfoChange}
        chronicleInfo={chronicleInfo}
        />

        <button onClick={() => {console.log(chronicleInfo)}}>See console log</button>

        <StyledButton type="submit">Create Character</StyledButton>



      </form>
    </FormContainer>
  );
};

export default CharacterCreation;



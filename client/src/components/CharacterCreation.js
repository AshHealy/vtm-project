import React, { useState } from 'react';
import Title from '../styles/Title.js';
import DropdownContainer from '../styles/DropdownContainer.js';
import DropdownLabel from '../styles/DropdownLabel.js';
import DropdownSelect from '../styles/DropdownSelcet.js';
import DropdownOption from '../styles/DropdownOption.js';
import StyledInput from '../styles/Input.js';
import StyledLabel from '../styles/Label.js';
import StyledLine from '../styles/StyledLine.js';
import StyledButton from '../styles/StyledButton.js';
import FormContainer from '../styles/ForumContainer.js';
import { Form } from 'react-router-dom';


const CharacterCreation = () => {
  const [attributes, setAttributes] = useState({});
  const [skills, setSkills] = useState({});

  const handleAttributeChange = (event, attribute) => {
    const { value } = event.target;
    setAttributes(prevAttributes => ({
      ...prevAttributes,
      [attribute]: value,
    }));
  };

  const handleSkillChange = (event, skill) => {
    const { value } = event.target;
    setSkills(prevSkills => ({
      ...prevSkills,
      [skill]: value,
    }));
  };

  return (
    <FormContainer>
      <Title>Character Creation</Title>

      <StyledLine></StyledLine>



    <form>
      <div className='characterInfo'>
        <StyledLabel htmlFor="characterName">Character Name:</StyledLabel>
        <StyledInput type="text" id="characterName" />

        <StyledLabel htmlFor="chronicle">Chronicle:</StyledLabel>
        <StyledInput type="text" id="chronicle" />

        <StyledLabel htmlFor="sire">Sire:</StyledLabel>
        <StyledInput type="text" id="sire" />

        <StyledLabel htmlFor="ambition">Ambition:</StyledLabel>
        <StyledInput type="text" id="ambition" />

        <StyledLabel htmlFor="concept">Concept:</StyledLabel>
        <StyledInput type="text" id="concept" />

        <StyledLabel htmlFor="desire">Desire:</StyledLabel>
        <StyledInput type="text" id="desire" />

        <DropdownContainer>
        <DropdownLabel htmlFor="clan">Clan:</DropdownLabel>
        <DropdownSelect id="clan">
            <DropdownOption value="brujah">Brujah</DropdownOption>
            <DropdownOption value="toreador">Toreador</DropdownOption>
            <DropdownOption value="ventrue">Ventrue</DropdownOption>
            <DropdownOption value="gangrel">Gangrel</DropdownOption>
            <DropdownOption value="malkavian">Malkavian</DropdownOption>
            <DropdownOption value="nosferatu">Nosferatu</DropdownOption>
            <DropdownOption value="tremere">Tremere</DropdownOption>
            <DropdownOption value="tzimisce">Tzimisce</DropdownOption>
            <DropdownOption value="lasombra">Lasombra</DropdownOption>
            <DropdownOption value="assamite">Assamite</DropdownOption>
            <DropdownOption value="followers_of_set">Followers of Set</DropdownOption>
            <DropdownOption value="ravnos">Ravnos</DropdownOption>
            <DropdownOption value="giovanni">Giovanni</DropdownOption>
            <DropdownOption value="cappadocian">Cappadocian</DropdownOption>
            <DropdownOption value="samedi">Samedi</DropdownOption>
            <DropdownOption value="salubri">Salubri</DropdownOption>
            <DropdownOption value="baali">Baali</DropdownOption>
            <DropdownOption value="hecata">Hecata</DropdownOption>
        </DropdownSelect>
        </DropdownContainer>

        <DropdownContainer>
        <DropdownLabel htmlFor="predator">Predator:</DropdownLabel>
        <DropdownSelect id="predator">
            <DropdownOption value="Cleaver">Cleaver</DropdownOption>
            <DropdownOption value="Osiris">Osiris</DropdownOption>
            <DropdownOption value="Sandman">Sandman</DropdownOption>
            <DropdownOption value="Eye of the Storm">Eye of the Storm</DropdownOption>
            <DropdownOption value="Shepherd">Shepherd</DropdownOption>
            <DropdownOption value="Whisperer">Whisperer</DropdownOption>
            <DropdownOption value="Ospery">Ospery</DropdownOption>
            <DropdownOption value="Roadside Killer">Roadside</DropdownOption>
            <DropdownOption value="Extortionist">Extortionist</DropdownOption>
            <DropdownOption value="Graverobber">Graverobber</DropdownOption>
            <DropdownOption value="Grim Reaper">Grim Reaper</DropdownOption>
            <DropdownOption value="Montero">Montero</DropdownOption>
            <DropdownOption value="Persuer">Persuer</DropdownOption>
            <DropdownOption value="Trapdoor">Trapdoor</DropdownOption>
        </DropdownSelect>
        </DropdownContainer>
        </div>

        <StyledLine></StyledLine>

        <h3>Attributes</h3>
        <div className='attributes'>
          <label htmlFor="strength">Strength</label>
          <input
            type="number"
            id="strength"
            min="1"
            max="5"
            value={attributes.strength || ''}
            onChange={event => handleAttributeChange(event, 'strength')}
          />

          <label htmlFor="dexterity">Dexterity</label>
          <input
            type="number"
            id="dexterity"
            min="1"
            max="5"
            value={attributes.dexterity || ''}
            onChange={event => handleAttributeChange(event, 'dexterity')}
          />

          <label htmlFor="charisma">Charisma</label>
          <input
            type="number"
            id="charisma"
            min="1"
            max="5"
            value={attributes.charisma || ''}
            onChange={event => handleAttributeChange(event, 'charisma')}
          />

          <label htmlFor="manipulation">Manipulation</label>
          <input
            type="number"
            id="manipulation"
            min="1"
            max="5"
            value={attributes.manipulation || ''}
            onChange={event => handleAttributeChange(event, 'manipulation')}
          />

          <label htmlFor="composure">Composure</label>
          <input
            type="number"
            id="composure"
            min="1"
            max="5"
            value={attributes.composure || ''}
            onChange={event => handleAttributeChange(event, 'composure')}
          />

          <label htmlFor="intelligence">Intelligence</label>
          <input
            type="number"
            id="intelligence"
            min="1"
            max="5"
            value={attributes.intelligence || ''}
            onChange={event => handleAttributeChange(event, 'intelligence')}
          />

          <label htmlFor="wits">Wits</label>
          <input
            type="number"
            id="wits"
            min="1"
            max="5"
            value={attributes.wits|| ''}
            onChange={event => handleAttributeChange(event, 'wits')}
          />

          <label htmlFor="resolve">Resolve</label>
          <input
            type="number"
            id="resolve"
            min="1"
            max="5"
            value={attributes.resolve || ''}
            onChange={event => handleAttributeChange(event, 'resolve')}
          />
        </div>

        <StyledLine></StyledLine>

        <h3>Skills</h3>
        <div className='skills'>
          <label htmlFor="melee">Melee : </label>
          <input
            type="number"
            id="melee"
            min="1"
            max="5"
            value={skills.melee || ''}
            onChange={event => handleSkillChange(event, 'melee')}
          />
          
          <label htmlFor="athletics">Athletics : </label>
          <input
            type="number"
            id="athletics"
            min="1"
            max="5"
            value={skills.athletics || ''}
            onChange={event => handleSkillChange(event, 'athletics')}
          />

          <label htmlFor="brawl">Brawl : </label>
          <input
          type="number"
          id="brawl"
          min="1"
          max="5"
          value={skills.brawl || ''}
          onChange={event => handleSkillChange(event, 'brawl')}
          />

          <label htmlFor="craft">Craft : </label>
          <input
          type="number"
          id="craft"
          min="1"
          max="5"
          value={skills.craft || ''}
          onChange={event => handleSkillChange(event, 'craft')}
          />

          <label htmlFor="drive">Drive : </label>
          <input
          type="number"
          id="drive"
          min="1"
          max="5"
          value={skills.drive || ''}
          onChange={event => handleSkillChange(event, 'drive')}
          />

          <label htmlFor="firearms">Firearms : </label>
          <input
          type="number"
          id="firearms"
          min="1"
          max="5"
          value={skills.firearms || ''}
          onChange={event => handleSkillChange(event, 'firearms')}
          />

          <label htmlFor="larceny">Larceny : </label>
          <input
          type="number"
          id="larceny"
          min="1"
          max="5"
          value={skills.larceny || ''}
          onChange={event => handleSkillChange(event, 'larceny')}
          />


          <label htmlFor="stealth">Stealth : </label>
          <input
          type="number"
          id="stealth"
          min="1"
          max="5"
          value={skills.stealth || ''}
          onChange={event => handleSkillChange(event, 'stealth')}
          />


          <label htmlFor="survival">Survival : </label>
          <input
          type="number"
          id="survival"
          min="1"
          max="5"
          value={skills.survival || ''}
          onChange={event => handleSkillChange(event, 'survival')}
          />

          <label htmlFor="animalken">Animal Ken : </label>
          <input
          type="number"
          id="animalken"
          min="1"
          max="5"
          value={skills.animalken || ''}
          onChange={event => handleSkillChange(event, 'animalken')}
          />

          <label htmlFor="etiquette">Etiquette : </label>
          <input
          type="number"
          id="etiquette"
          min="1"
          max="5"
          value={skills.etiquette || ''}
          onChange={event => handleSkillChange(event, 'etiquette')}
          />

          <label htmlFor="insight">Insight : </label>
          <input
          type="number"
          id="insight"
          min="1"
          max="5"
          value={skills.insight || ''}
          onChange={event => handleSkillChange(event, 'insight')}
          />

          <label htmlFor="intimidation">Intimidation : </label>
          <input
          type="number"
          id="intimidation"
          min="1"
          max="5"
          value={skills.intimidation || ''}
          onChange={event => handleSkillChange(event, 'intimidation')}
          />

          <label htmlFor="leadership">Leadership : </label>
          <input
          type="number"
          id="leadership"
          min="1"
          max="5"
          value={skills.leadership || ''}
          onChange={event => handleSkillChange(event, 'leadership')}
          />

          <label htmlFor="performance">Performance : </label>
          <input
          type="number"
          id="performance"
          min="1"
          max="5"
          value={skills.performance || ''}
          onChange={event => handleSkillChange(event, 'performance')}
          />

          


        </div>

        <StyledButton type="submit">Create Character</StyledButton>

      </form>
    </FormContainer>
  );
};

export default CharacterCreation;



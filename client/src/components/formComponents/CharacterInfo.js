import DropdownContainer from '../../styles/DropdownContainer.js';
import DropdownLabel from '../../styles/DropdownLabel.js';
import DropdownSelect from '../../styles/DropdownSelcet.js';
import DropdownOption from '../../styles/DropdownOption.js';
import StyledInput from '../../styles/Input.js';
import StyledLabel from '../../styles/Label.js';

const CharacterInfo = ({characterInfo, handleCharacterInfoChange}) => {


    return (
        
    <div>
    <div className='characterInfo'>
    <StyledLabel htmlFor="characterName">Character Name:</StyledLabel>
    <StyledInput
      type="text"
      id="characterName"
      value={characterInfo.characterName || ''}
      onChange={event => handleCharacterInfoChange(event, 'characterName')}/>
  
    <StyledLabel htmlFor="chronicle">Chronicle:</StyledLabel>
    <StyledInput
      type="text"
      id="chronicle"
      value={characterInfo.chronicle || ''}
      onChange={event => handleCharacterInfoChange(event, 'chronicle')}
    />
  
    <StyledLabel htmlFor="sire">Sire:</StyledLabel>
    <StyledInput
      type="text"
      id="sire"
      value={characterInfo.sire || ''}
      onChange={event => handleCharacterInfoChange(event, 'sire')}
    />
  
      <StyledLabel htmlFor="ambition">Ambition:</StyledLabel>
      <StyledInput
        type="text"
        id="ambition"
        value={characterInfo.ambition || ''}
        onChange={event => handleCharacterInfoChange(event, 'ambition')}
      />
  
      <StyledLabel htmlFor="concept">Concept:</StyledLabel>
      <StyledInput
        type="text"
        id="concept"
        value={characterInfo.concept || ''}
        onChange={event => handleCharacterInfoChange(event, 'concept')}
      />
  
      <StyledLabel htmlFor="desire">Desire:</StyledLabel>
      <StyledInput
        type="text"
        id="desire"
        value={characterInfo.desire || ''}
        onChange={event => handleCharacterInfoChange(event, 'desire')}
      />
  
  
  
    <DropdownContainer>
      <DropdownLabel htmlFor="clan">Clan:</DropdownLabel>
      <DropdownSelect
        id="clan"
        value={characterInfo.clan || ''}
        onChange={event => handleCharacterInfoChange(event, 'clan')}>
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
        <DropdownSelect
          id="predator"
          value={characterInfo.predator || ''}
          onChange={event => handleCharacterInfoChange(event, 'predator')}>
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
      </div>

     );
}
 
export default CharacterInfo;




  

import FormContainer from '../../styles/ForumContainer.js';
import StyledInput from '../../styles/Input.js';
import StyledLabel from '../../styles/Label.js';



const CharacterAttributes = ({attributes, handleAttributeChange}) => {
    return (  
    <div>
        <FormContainer className='attributes'>
          <StyledLabel htmlFor="strength">Strength</StyledLabel>
          <StyledInput
            type="number"
            id="strength"
            min="1"
            max="5"
            value={attributes.strength || ''}
            onChange={event => handleAttributeChange(event, 'strength')}/>

          <StyledLabel htmlFor="dexterity">Dexterity</StyledLabel>
          <StyledInput
            type="number"
            id="dexterity"
            min="1"
            max="5"
            value={attributes.dexterity || ''}
            onChange={event => handleAttributeChange(event, 'dexterity')}/>

          <StyledLabel htmlFor="charisma">Charisma</StyledLabel>
          <StyledInput
            type="number"
            id="charisma"
            min="1"
            max="5"
            value={attributes.charisma || ''}
            onChange={event => handleAttributeChange(event, 'charisma')}
          />

          <StyledLabel htmlFor="manipulation">Manipulation</StyledLabel>
          <StyledInput
            type="number"
            id="manipulation"
            min="1"
            max="5"
            value={attributes.manipulation || ''}
            onChange={event => handleAttributeChange(event, 'manipulation')}
          />

          <StyledLabel htmlFor="composure">Composure</StyledLabel>
          <StyledInput
            type="number"
            id="composure"
            min="1"
            max="5"
            value={attributes.composure || ''}
            onChange={event => handleAttributeChange(event, 'composure')}
          />

          <StyledLabel htmlFor="intelligence">Intelligence</StyledLabel>
          <StyledInput
            type="number"
            id="intelligence"
            min="1"
            max="5"
            value={attributes.intelligence || ''}
            onChange={event => handleAttributeChange(event, 'intelligence')}/>

          <StyledLabel htmlFor="wits">Wits</StyledLabel>
          <StyledInput
            type="number"
            id="wits"
            min="1"
            max="5"
            value={attributes.wits|| ''}
            onChange={event => handleAttributeChange(event, 'wits')}/>

          <StyledLabel htmlFor="resolve">Resolve</StyledLabel>
          <StyledInput
            type="number"
            id="resolve"
            min="1"
            max="5"
            value={attributes.resolve || ''}
            onChange={event => handleAttributeChange(event, 'resolve')}/>
        </FormContainer>
    </div>
    );
}
 
export default CharacterAttributes ;
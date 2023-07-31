




const CharacterAttributes = ({attributes, handleAttributeChange}) => {
    return (  
    <div>
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
    </div>
    );
}
 
export default CharacterAttributes ;

import StyledInput from '../../styles/Input.js';
import StyledLabel from '../../styles/Label.js';

const CharacterChronicles = ({chronicleInfo, handleChronicleInfoChange}) => {
    return ( 


        <div className='chronicles'>

        <StyledLabel htmlFor="chronicletenents">Chronicle Tenents:</StyledLabel>
        <StyledInput
          type="text"
          id="tenents"
          value={chronicleInfo.tenents || ''}
          onChange={event => handleChronicleInfoChange(event, 'tenents')}
        />

        <StyledLabel htmlFor="touchstones-convictions">Touchstones & Convictions:</StyledLabel>
        <StyledInput
          type="text"
          id="touchstones"
          value={chronicleInfo.touchstones || ''}
          onChange={event => handleChronicleInfoChange(event, 'touchstones')}
        />

        <StyledLabel htmlFor="clanbane">Clan Bane:</StyledLabel>
        <StyledInput
          type="text"
          id="clanbane"
          value={chronicleInfo.clanbane || ''}
          onChange={event => handleChronicleInfoChange(event, 'clanbane')}
        />
        </div>



     );
}
 
export default CharacterChronicles;
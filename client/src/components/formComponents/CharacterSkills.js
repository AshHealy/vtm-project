import StyledInput from '../../styles/Input.js';
import StyledLabel from '../../styles/Label.js';
import FormContainer from '../../styles/ForumContainer.js';


const CharacterSkills = ({ skills ,handleSkillChange}) => {
    return ( 
    
    <div className='skills'>
        <StyledLabel htmlFor="melee">Melee : </StyledLabel>
        <StyledInput
        type="number"
        id="melee"
        min="1"
        max="5"
        value={skills.melee || ''}
        onChange={event => handleSkillChange(event, 'melee')}
        />
        
        <StyledLabel htmlFor="athletics">Athletics : </StyledLabel>
        <StyledInput
        type="number"
        id="athletics"
        min="1"
        max="5"
        value={skills.athletics || ''}
        onChange={event => handleSkillChange(event, 'athletics')}
        />

        <StyledLabel htmlFor="brawl">Brawl : </StyledLabel>
        <StyledInput
        type="number"
        id="brawl"
        min="1"
        max="5"
        value={skills.brawl || ''}
        onChange={event => handleSkillChange(event, 'brawl')}
        />

        <StyledLabel htmlFor="craft">Craft : </StyledLabel>
        <StyledInput
        type="number"
        id="craft"
        min="1"
        max="5"
        value={skills.craft || ''}
        onChange={event => handleSkillChange(event, 'craft')}
        />

        <StyledLabel htmlFor="drive">Drive : </StyledLabel>
        <StyledInput
        type="number"
        id="drive"
        min="1"
        max="5"
        value={skills.drive || ''}
        onChange={event => handleSkillChange(event, 'drive')}
        />

        <StyledLabel htmlFor="firearms">Firearms : </StyledLabel>
        <StyledInput
        type="number"
        id="firearms"
        min="1"
        max="5"
        value={skills.firearms || ''}
        onChange={event => handleSkillChange(event, 'firearms')}
        />

        <StyledLabel htmlFor="larceny">Larceny : </StyledLabel>
        <StyledInput
        type="number"
        id="larceny"
        min="1"
        max="5"
        value={skills.larceny || ''}
        onChange={event => handleSkillChange(event, 'larceny')}
        />


        <StyledLabel htmlFor="stealth">Stealth : </StyledLabel>
        <StyledInput
        type="number"
        id="stealth"
        min="1"
        max="5"
        value={skills.stealth || ''}
        onChange={event => handleSkillChange(event, 'stealth')}
        />


        <StyledLabel htmlFor="survival">Survival : </StyledLabel>
        <StyledInput
        type="number"
        id="survival"
        min="1"
        max="5"
        value={skills.survival || ''}
        onChange={event => handleSkillChange(event, 'survival')}
        />

        <StyledLabel htmlFor="animalken">Animal Ken : </StyledLabel>
        <StyledInput
        type="number"
        id="animalken"
        min="1"
        max="5"
        value={skills.animalken || ''}
        onChange={event => handleSkillChange(event, 'animalken')}
        />

        <StyledLabel htmlFor="etiquette">Etiquette : </StyledLabel>
        <StyledInput
        type="number"
        id="etiquette"
        min="1"
        max="5"
        value={skills.etiquette || ''}
        onChange={event => handleSkillChange(event, 'etiquette')}
        />

        <StyledLabel htmlFor="insight">Insight : </StyledLabel>
        <StyledInput
        type="number"
        id="insight"
        min="1"
        max="5"
        value={skills.insight || ''}
        onChange={event => handleSkillChange(event, 'insight')}
        />

        <StyledLabel htmlFor="intimidation">Intimidation : </StyledLabel>
        <StyledInput
        type="number"
        id="intimidation"
        min="1"
        max="5"
        value={skills.intimidation || ''}
        onChange={event => handleSkillChange(event, 'intimidation')}
        />

        <StyledLabel htmlFor="leadership">Leadership : </StyledLabel>
        <StyledInput
        type="number"
        id="leadership"
        min="1"
        max="5"
        value={skills.leadership || ''}
        onChange={event => handleSkillChange(event, 'leadership')}
        />

        <StyledLabel htmlFor="performance">Performance : </StyledLabel>
        <StyledInput
        type="number"
        id="performance"
        min="1"
        max="5"
        value={skills.performance || ''}
        onChange={event => handleSkillChange(event, 'performance')}
        /> 

        <StyledLabel htmlFor="persuassion">Persuassion : </StyledLabel>
        <StyledInput
        type="number"
        id="persuassion"
        min="1"
        max="5"
        value={skills.persuassion || ''}
        onChange={event => handleSkillChange(event, 'persuassion')}
        /> 

        <StyledLabel htmlFor="streetwise">Streetwise : </StyledLabel>
        <StyledInput
        type="number"
        id="streetwise"
        min="1"
        max="5"
        value={skills.streetwise || ''}
        onChange={event => handleSkillChange(event, 'streetwise')}
        /> 

        <StyledLabel htmlFor="subterfuge">Subterfuge : </StyledLabel>
        <StyledInput
        type="number"
        id="subterfuge"
        min="1"
        max="5"
        value={skills.subterfuge || ''}
        onChange={event => handleSkillChange(event, 'subterfuge')}
        /> 

        <StyledLabel htmlFor="academics">Academics : </StyledLabel>
        <StyledInput
        type="number"
        id="academics"
        min="1"
        max="5"
        value={skills.academics || ''}
        onChange={event => handleSkillChange(event, 'academics')}
        /> 

    <StyledLabel htmlFor="finance">Finance : </StyledLabel>
    <StyledInput
        type="number"
        id="finance"
        min="1"
        max="5"
        value={skills.finance || ''}
        onChange={event => handleSkillChange(event, 'finance')}
        /> 
    <StyledLabel htmlFor="investigation">Investigation : </StyledLabel>
    <StyledInput
            type="number"
            id="investigation"
            min="1"
            max="5"
            value={skills.investigation || ''}
            onChange={event => handleSkillChange(event, 'investigation')}
            /> 

    <StyledLabel htmlFor="medicine">Medicine : </StyledLabel>
    <StyledInput
            type="number"
            id="medicine"
            min="1"
            max="5"
            value={skills.medicine || ''}
            onChange={event => handleSkillChange(event, 'medicine')}
            /> 

    <StyledLabel htmlFor="occult">Ocuult : </StyledLabel>
    <StyledInput
            type="number"
            id="occult"
            min="1"
            max="5"
            value={skills.occult || ''}
            onChange={event => handleSkillChange(event, 'occult')}
            /> 

    <StyledLabel htmlFor="politics">Politics : </StyledLabel>
    <StyledInput
            type="number"
            id="occult"
            min="1"
            max="5"
            value={skills.politics || ''}
            onChange={event => handleSkillChange(event, 'politics')}
            /> 

    <StyledLabel htmlFor="science">Science : </StyledLabel >
    <StyledInput
            type="number"
            id="science"
            min="1"
            max="5"
            value={skills.science || ''}
            onChange={event => handleSkillChange(event, 'science')}
            /> 

    <StyledLabel htmlFor="technology">Technology : </StyledLabel>
    <StyledInput
            type="number"
            id="technology"
            min="1"
            max="5"
            value={skills.technology|| ''}
            onChange={event => handleSkillChange(event, 'technology')}
            /> 



        </div>
    );
}
 
export default CharacterSkills;
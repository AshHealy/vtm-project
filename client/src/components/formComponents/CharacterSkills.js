
const CharacterSkills = ({ skills ,handleSkillChange}) => {
    return ( 
    
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
    );
}
 
export default CharacterSkills;
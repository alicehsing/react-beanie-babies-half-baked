import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((beanieBaby, i) => 
          <BeanieBaby 
            key={`${beanieBaby.title}-${i}`} beanieBaby={beanieBaby}/>)
      }
    </div>);
}

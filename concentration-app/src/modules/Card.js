export default function Card({card, index, clickHandler}){

  const cardClassName = card.status ? 'active' : ''

     return (
       <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
         <img src={card.img} alt={card.name} />
       </div>
     );
}
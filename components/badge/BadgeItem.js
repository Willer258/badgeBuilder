import Link from 'next/link'

function BadgeItem(props){
    const{id,nom,prenom,departement,profilephoto,color}=props;
    const exploreLink = `/badge-content/${id}`;
    return <li className={ color+'-500'}>
        <div>
          <img src={'/' + profilephoto} /></div>
          <div>
            <h3>{nom}</h3>
            <h4>{prenom}</h4>
          </div>
          <div>{departement}</div>

          <button><Link href={exploreLink}>Voir le badge</Link></button>
      </li>
    
}
export default BadgeItem;
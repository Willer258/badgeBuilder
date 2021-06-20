function BadgeItem(props){


    const{id,nom,prenom,sexe,departement,profilephoto,color}=props;

    const exploreLink = `/badge-content/${id}`;
  let gender = null;
    if(sexe==="masculin"){
      gender = "M"
    }
    else {
      gender = "Mme"
    }
    return(
      <li className={ color+'-500'}>
        <div>
          <img src={'/' + profilephoto} /></div>
          <div>

            <h3> <span> {gender} </span> {nom}</h3>
            <h4>{prenom}</h4>
          </div>
          <div>{departement}</div>

          <button><Link href={exploreLink}>Voir le badge</Link></button>
      </li>
    )
}
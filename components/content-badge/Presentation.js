function Presentation(props){
  const{id,nom,prenom,sexe} = props;
  var gender;
  if (sexe === "Feminin"){
    gender = "Mme"
  }
  else{
    gender = "M"
  }
  return (
    <div className={"flex flex-col space-y-6"}>
      <div>Identifiant N {id}</div>
      <div className="flex space-x-5">
        <div><p className="text-xl"> {gender} {nom}</p></div>
        <div>{prenom}</div>
      </div>
    </div>
  )
}
export default Presentation ;
function ProfilePhoto(props){
  const {pp, ppAlt ,color} = props   
  return(
      <div className={"ring-4 ring-"+color+"-500 ring-opacity-50 overflow-hidden w-40 h-40 rounded-full"}><img className={"object-contain"} src={`/${pp}`} alt={ppAlt} /></div>
    )
}export default ProfilePhoto;
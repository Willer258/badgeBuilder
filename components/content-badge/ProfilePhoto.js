import Image from 'next/image'

function ProfilePhoto(props){
  const {pp, ppAlt ,color} = props   
  return(
    <div className = {"ring-4 ring-"+color+"-500 ring-opacity-50 overflow-hidden w-40 h-40 rounded-full"} >
        <Image src={'/'+pp} alt={ppAlt} width={500} height={500} />
    </div>
    )
}export default ProfilePhoto;
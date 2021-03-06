import Link from 'next/link'
import Image from 'next/image'

function BadgeItem(props){
    const{id,nom,prenom,departement,profilephoto,color}=props;
    const exploreLink = `/badge-content/${id}`;
    return <li className={"flex flex-col p-5 m-5 px-5 space-y-5 bg-"+color+'-500'}>
      <div className="flex items-center justify-around space-x-9">
       
        <div className={'rounded-full w-24 h-24 overflow-hidden text-red-' + 500} ><Image src={'/'+profilephoto} alt={nom} width={500} height={500} /></div>

        <div className="flex flex-col">
          <h3 className="text-2xl ">{nom}</h3>
          <h4 className="text-xl">{prenom}</h4>
        </div>
        <div>{departement}</div>

      </div>
      <div className="flex justify-end w-full">
        <button className="p-3 rounded bg-white" ><Link href={exploreLink}>Voir le badge</Link></button>
        </div>
      </li>
    
}
export default BadgeItem;
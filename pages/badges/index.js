import BadgeList from "../../components/badge/BadgeList";
import{getAllBadges} from "../../dummy-data";

function Allbadges(){
  const badge = getAllBadges();
  return (
    <div className="grid justify-items-center align-middle">
      <BadgeList items={badge}/>
    </div>
  )
}export default Allbadges;
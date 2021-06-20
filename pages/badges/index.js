import BadgeList from "../../components/badge/BadgeList";
import { getAllBadges } from "../../dummy-data";

function Allbadges() {

  const badges = getAllBadges();
  return (
    <div>
      <BadgeList items={badges} />
    </div>
  );
} export default Allbadges;
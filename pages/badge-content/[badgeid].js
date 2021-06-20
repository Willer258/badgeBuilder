import {useRouter} from 'next/router';
import { Fragment } from 'react';
import Presentation from '../../components/content-badge/Presentation';
import Citation from '../../components/content-badge/Citation';
import Job from '../../components/content-badge/Job';
import ProfilePhoto from '../../components/content-badge/ProfilePhoto';
import{getBadgeById} from '../../dummy-data'

function Badge() {
  const router = useRouter();
  const badgeid = router.query.badgeid;
  const badge = getBadgeById(badgeid);
  const error = "Ce badge n'existe pas"
  if(!badge){
    return <div className="text-5xl text-center">{error}</div>;
  }

  return (
    <Fragment >
      <div className={"grid m-72 justify-items-center mt-8 bg-"+badge.color +"-100 space-y-14"}>
        <div className="p-5">
          <ProfilePhoto pp={badge.profilephoto} ppalt={badge.nom}  color={badge.color}/>
        </div>
        <div>
          <Presentation nom={badge.nom} prenom={badge.prenom} id={badge.id} sexe={badge.sexe} />
        </div>
        <div>
          <Job departement={badge.departement} travail={badge.role} color={badge.color} />
        </div>
        <div>
          <Citation citation={badge.citation} />
        </div>
      </div>
    </Fragment>
  )
}
export default Badge;
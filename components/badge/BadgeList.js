import BadgeItem from './BadgeItem'

function BadgeList(props) {
  const {items} = props;
  return (
    <div>
      <ul>
        {items.map((badge) => (
          <BadgeItem id={badge.id} nom={badge.nom} prenom={badge.prenom} departement={badge.departement} profilephoto={badge.profilephoto} color={badge.color} />
        ))}
      </ul>
    </div>
  );

}
export default BadgeList;
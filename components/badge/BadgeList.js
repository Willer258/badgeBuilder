import BadgeItem from './BadgeItem'

function BadgeList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((badges) => (<BadgeItem id={badges.id} nom={badges.nom} prenom={badges.prenom} sexe={badges.sexe} departement={badges.departement} profilephoto={badges.profilephoto} color={badges.color} />))}
    </ul>
  );

}
export default BadgeList;
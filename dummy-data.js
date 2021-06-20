const DUMMY_BADGES = [
  {
    id: '355B',
    nom: 'Houinlindjonon',
    prenom: 'Alain Wilfried',
    sexe: 'Masculin',
    departement: 'Devellopement',
    role: 'Devellopeur Front-End',
    profilephoto: 'images/pp/albedo.jpg',
    color: 'blue'
  },

  {
    id: '382Y',
    nom: 'Bakayoko',
    prenom: 'Yaya',
    sexe: 'Masculin',
    departement: 'Management',
    role: 'Franchement je sais pas',
    profilephoto: 'images/pp/zhongli.jpg',
    color: 'gray'
  },


  {
    id: '382Y',
    nom: 'Mouloungui',
    prenom: 'Maria',
    sexe: 'Feminin',
    departement: 'Management',
    role: 'Elle va pouvoir ecrire bientot',
    profilephoto: 'images/pp/yanfei.jpg',
    color: 'red',
  }
];

export function getAllBadges() {
  return DUMMY_BADGES;
}

export function getBadgeById(id) {
  return DUMMY_BADGES.find((badge) => badge.id === id);
}
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I 

const dragonDamage = () => {
  const dragonStrenght = dragon.strength;
  const dragonDamage = Math.floor(Math.random() * dragonStrenght + 1);
  
  return dragonDamage > 15 ? dragonDamage : 15;
}

const maxWarriorDmg = (strength, weapon) => { 
  return strength * weapon;
}

const warriorDamage = () => {
  const warriorStrenght = warrior.strength;
  const weaponDmg = warrior.weaponDmg;

  const warriorDamage = Math.floor(Math.random() * maxWarriorDmg(warriorStrenght, weaponDmg) + 1);
  
  return warriorDamage > warriorStrenght ? warriorDamage : warriorStrenght;
}

const mageDamage = () => {
  if (mage.mana < 15) return mage.damage = 'Não possui manda o suficiente'

  const intelligence = mage.intelligence;
  const damage = Math.floor(Math.random() * (intelligence * 2 + 1));

  mage.damage = damage;
  mage.mana-= 15;

  return mage;

} 

// Parte II

const gameActions = {
  warriorAction(damage) {
    warrior.damage = damage();

    dragon.healthPoints-= warrior.damage;
  },

  mageAction(damage) {
    damage();

    dragon.healthPoints-= mage.damage;
  },

  dragonAction(damage) {
    dragon.damage = damage()

    warrior.healthPoints-= dragon.damage;
    mage.healthPoints-= dragon.damage;
  },
  
  results: () => battleMembers,
  
}

gameActions.warriorAction(warriorDamage)
gameActions.mageAction(mageDamage)
gameActions.dragonAction(dragonDamage)
console.log(gameActions.results())
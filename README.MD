#co-op, #TheN4rdDog, #RyanStartedTheFire, #JulioMansilla

#ArtistBlog

#Text-based-RPG

A new fun roleplaying adventure using a text-based style. Many loveable characters will be created, and you will lose yourself in the experience of playing this game. It is still in development, but we are working as hard as we can. The game will feature several boss fights at the end of each stage, and you will be able to level up your characters as you please. Please be sure to check the game out!

#greeting system based off user*


					Mars 2020:

					Mechanics
STATS- an entity has 6 different stats with an average of 10 per stat - characters start with a stat 18 or below;

	Base stats
		str = 10; 
		dex = 10; 
		con = 10; 
		int = 10; 
		wis = 10; 
		lck = 10; 


	attribute Bonus(AB) <(stat-10)/2>
	*Add flat damage
	*Add AC
	*ADD to saves
	*Hit points

	@creation
	HP = 8 + CB
	AC = 10 + DB + items + {LB}
	MR = CB + (WB * 2) + Items
	Mana = WB + (IB * 2)
	Attack Bonus = Level + SB
	Political Bonus = Blue: (-2 STR, -2 DEX, +2 WIS, +2 INT, 200 Gold, 100 Score) | Red: (+2 STR, +2 DEX, -2 WIS, -2 INT, 100 Gold, 200 Score) | White: (+0 Stats, 9,001 Score)
	Gold = Political Bonus + (1D100 * LB)
	Score = Political Bonus + (1D100 * LB)
	Inventory[] = Blue: (Tool = Lunar Book, Weapon = Cell Phone, Armor = Space Helmet) | Red: (Tool = Solar Book, Weapon = Drill, Armor = Space Helmet) | White: (Nothing)

	@level up
	HP = HP + 1D8 + CB
	AC = 10 + DB + Items + [LB]
	MR = MR + CB + (WB * 2) + Items
	Mana = Mana + WB + (IB * 2)
	Attack Bonus = Attack Bonus + Level + SB
	Political Bonus = (Decisions in the future may affect these numbers)
	Gold = N/A
	Score = N/A
	Inventory[] = N/A

	(HP formula) = base health + armor + AB
	(MP formula) = intelligence + (luck * 2) + class mana bonus
	(AC formula) = HP + class health bonus
	level up = stats * LUCKBONUS

	chr.example
		Attribute Bonus
		str = 11; SB = 0;
		dex = 17; DB = 3;
		con = 13; CB = 1;
		int = 18; IB = 4;
		wis = 18; WB = 4;
		lck = 13; LB = 1;


					Characters:

Cliff - Main Character of Mars 2020. An intelligent wizard who 
almost fell off a cliff when he was a baby, hence his name. He is
the leader of his band of adventurers, and values logic over emotion.
A mix of Spock, Gandalf, and Dumbledore. He fights alongside his
friend Dave the Paladin, and new Warriors, Swift Chris and Beardo
the Berserker. (Potential names/plot)

Stats: (30 points to spend for Heroes, max is 10 for one category)
Strength (11) = (+0)
Dexterity (17) = (+3)
Constitution (13) = (+1)
Intelligence (18) = (+4)
Wisdom (18) = (+4)
Luck (13) = (+1)

Enemies: The enemies of Cliff's band.

Enemy 1: Brute

Stats: (24 points to spend for enemies, max is 8 for one category)
Strength (18)
Dexterity (11)
Constitution (18)
Intelligence (12)
Wisdom (13)
Charisma (12)

Enemy 2: Archer

Stats: (24 points to spend for enemies, max is 8 for one category)
Strength (11)
Dexterity (16)
Constitution (13)
Intelligence (14)
Wisdom (18)
Charisma (12)

Enemy 3: Caster

Stats: (24 points to spend for enemies, max is 8 for one category)
Strength (11)
Dexterity (16)
Constitution (12)
Intelligence (18)
Wisdom (14)
Charisma (13)
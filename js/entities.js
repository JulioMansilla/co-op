var entities = {
	'cliff':
		{
			'stats':
				{	
					'Strength':"16",
					'Dexterity':"16",
					'Constitution':"16",
					'Intelligence':"10",
					'Wisdom':"10",
					'Luck':"10"
				}
		},
	'house-fly':
		{
			'description':"A fly buzzes in the corner, slightly giving you the urge to attack it. You realize that this fly has been here for a while, but are suddenly filled with apathy. [Attack] or [Leave]?",
			'location':"House",
			'image':"img/character-images/Character1.png",
			'stats':
				{	
					'Strength':"20",
					'Dexterity':"20",
					'Constitution':"20",
					'Intelligence':"20",
					'Wisdom':"20",
					'Luck':"20"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/Character1.png",
						'text':"buzz buzzzz......"
					},
					'lose':{
						'img':"img/character-images/Character1.png",
						'text':"buzz."
					},
					'attack':{
						'img':"img/character-images/Character1.png",
						'text':"buzz?"
					},
					'miss':{
						'img':"img/character-images/Character1.png",
						'text':"buzz!"
					}
				}
		},
	'reginald':
		{
			'description':"A man with a strange head starts shouting loudly, and encourages you to Pokemon-GO to the Polls. You start to drown him out, but consider talking to him. [Talk] or [Leave]?",
			'location':"Patio",
			'image':"img/character-images/Character2.png",
			'stats':
				{	
					'Strength':"12",
					'Dexterity':"12",
					'Constitution':"14",
					'Intelligence':"12",
					'Wisdom':"12",
					'Luck':"18"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/Character2.png",
						'text':"Why Can't you see?"
					},
					'lose':{
						'img':"img/character-images/Character2.png",
						'text':"It all could've been so simple."
					},
					'attack':{
						'img':"img/character-images/Character2.png",
						'text':"How dare you?"
					},
					'miss':{
						'img':"img/character-images/Character2.png",
						'text':"Ha, you don't think I'm better than you."
					}
				}
		},
	'r2-flip2':
		{
			'description':"A mindless robot that exists only to flip patties. You can't help but feel sorry for it. [Attack] or [Leave]?",
			'location':"WacDonalds",
			'image':"img/character-images/Character3.png",
			'stats':
				{	
					'Strength':"14",
					'Dexterity':"18",
					'Constitution':"7",
					'Intelligence':"18",
					'Wisdom':"7",
					'Luck':"9"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/Character3.png",
						'text':"Have I failed you Donald WcRonald?"
					},
					'lose':{
						'img':"img/character-images/Character3.png",
						'text':"I'll live to flip another patty!"
					},
					'attack':{
						'img':"img/character-images/Character3.png",
						'text':"0100111101010111"
					},
					'miss':{
						'img':"img/character-images/Character3.png",
						'text':"The odds of that happening are are by my aproximation are 1 in a thousand!"
					}
				}
		},
	'gritty':
		{
			'description':"A weird-looking thing encourages you to seize the means of production. You are unsure what to do next.[Talk] or [Leave]?",
			'location':"Downtown",
			'image':"img/character-images/Character4.png",
			'stats':
				{	
					'Strength':"8",
					'Dexterity':"8",
					'Constitution':"8",
					'Intelligence':"12",
					'Wisdom':"18",
					'Luck':"18"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/blank.png",
						'text':"Phanatic get the T-shirt cannon!"
					},
					'lose':{
						'img':"img/character-images/blank.png",
						'text':"oops!"
					},
					'attack':{
						'img':"img/character-images/blank.png",
						'text':"Sleep with one eye open tonight, Cliff."
					},
					'miss':{
						'img':"img/character-images/blank.png",
						'text':"It me!"
					}
				}
		},
	'testostero':
		{
			'description':"A very old-looking man warns you about the dangers of soy while offering his items that buff your weapons. [Talk] or [Leave]?",
			'location':"Downtown",
			'image':"img/character-images/Character5.png",
			'stats':
				{	
					'Strength':"18",
					'Dexterity':"8",
					'Constitution':"18",
					'Intelligence':"8",
					'Wisdom':"12",
					'Luck':"8"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/blank.png",
						'text':"We will prevail through our natural fluidssss........"
					},
					'lose':{
						'img':"img/character-images/blank.png",
						'text':"Soyboy!"
					},
					'attack':{
						'img':"img/character-images/blank.png",
						'text':"That hit like a wet soysage"
					},
					'miss':{
						'img':"img/character-images/blank.png",
						'text':"If you'd had one of these you would'nt have missed"
					}
				}
		},
	'employee':
		{
			'description':"An employee whose soul has been lost to the Cosmos. You could also give her your soul, but no pressure. [Use] or [Leave]?",
			'location':"SpaceX",
			'image':"img/character-images/Character6.png",
			'stats':
				{	
					'Strength':"8",
					'Dexterity':"10",
					'Constitution':"16",
					'Intelligence':"18",
					'Wisdom':"8",
					'Luck':"15"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/blank.png",
						'text':"You'll be hearing from my lawyer"
					},
					'lose':{
						'img':"img/character-images/blank.png",
						'text':"Your soul is ours, go <i>east</i> to our launchpad."
					},
					'attack':{
						'img':"img/character-images/blank.png",
						'text':"Ha, you think that this will change anything."
					},
					'miss':{
						'img':"img/character-images/blank.png",
						'text':"It's not to late to pledge your soul to us."
					}
				}
		},
	'thief':
		{
			'description':"A thief starts telling you about the treasures that can be found in a dumpster while slowly creeping toward you. [Attack], [Talk], or [Leave]",
			'location':"Behind WacDonalds",
			'image':"img/character-images/Dead7.png",
			'stats':
				{	
					'Strength':"15",
					'Dexterity':"10",
					'Constitution':"10",
					'Intelligence':"7",
					'Wisdom':"16",
					'Luck':"18"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/Dead7.png",
						'text':"I just wanted a big wac!"
					},
					'lose':{
						'img':"img/character-images/lose7.png",
						'text':"You've eaten your last big wac!"
					},
					'attack':{
						'img':"img/character-images/Character7.png",
						'text':"What in the name of the WcRib do you think you're doing"
					},
					'miss':{
						'img':"img/character-images/Miss7.png",
						'text':"float like WcFlurry, sting like a WcSpicy. The hands can't hit what they can't see."
					}
				}
		},
	'robot':
		{
			'description':"A robot reminds you that the fate of the world rests in your incapable hands. Choose unwisely.",
			'location':"Polls",
			'image':"img/character-images/Character8.png",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				},
			'dialogue':
				{
					'win':{
						'img':"img/character-images/blank.png",
						'text':"null"
					},
					'lose':{
						'img':"img/character-images/blank.png",
						'text':"null"
					},
					'attack':{
						'img':"img/character-images/blank.png",
						'text':"null"
					},
					'miss':{
						'img':"img/character-images/blank.png",
						'text':"null"
					}
				}
		}
};
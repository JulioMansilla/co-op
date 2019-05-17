var locations = {
	"house":{
		"img":"img/backgrounds/room1.png",
		"description":"You wake up in this room feeling tired despite the fact that the clock says it's eleven. Then open twitter and see many people complaining about not being able to vote because of a recently passed bill to prevent voter Id fraud. You look up the bill and notice that you are still able to vote despite the bills strange restrictions. With a sense of duty overcoming you, you stand up from your bed and look around the room, and see a <i>Fly</i> as well as your patio to the <i>East you see your patio</i>",
		"objects":{
			"bed":{
				"description":"it's a Bed",
				"interaction": "you sleep!",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"house-fly":{
				"description":"flies around",
				"interaction": "you swat!",
			}
		},
		"pathways":{
			"east":"patio"
		}
	},
	"patio":{
		"img":"img/backgrounds/room2.png",
		"description":"You step outside onto the patio, and feel the cool november air fill your lungs, as you look out and across the road you see your neighbor <i>Reginald</i> that you can't stand. In order to avoid eye contact you you look at the <i>table</i> and <i>chairs</i> To the <i>east</i> you see your favorite restraunt Wacdonalds, and to the <i> south</i> you hear the commotion of people rushing to vote.",
		"objects":{
			"table":{
			"description":"A rickety slanted table covered in cobwebs. The sight of it makes you uneasy",
			"interaction": "you flip the table!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"chairs":{
				"description":"A collection of damp uncomfortable chairs.", 
				"interaction": "You sit in the chair for a short period but get off it quickly due to its poor construction.",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"reginald":{
				"description":"Encouraging you to Pokemon-GO to the Polls", 
				"interaction": "you talk!"
			}
		},
		"pathways":{
			"west":"house",
			"east":"wacdonalds",
			"south":"downtown"	
		}
	},
	"wacdonalds":{
		"img":"img/backgrounds/room3.png",
		"description":"When you you enter you are met with the sweet scent of the deep fryer, as the WacDonalds Robot greets you.",
		"objects":{
			"register":{
			"description":"A new register created for the hands of the new WacDonalds robots",
			"interaction": "the WacDonalds robot tells you not to touch it!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"vending-machine":{
			"description":"A tall vending Machine for big Wacs",
			"interaction": "you sleep!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"r2-flip2":{
			"description":"Existing only ,to flip patties",
			"interaction": "you talk!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			}
		},
		"pathways":{
			"west":"patio",
			"east":"behind wacdonalds"
		}
	},
	"behind wacdonalds":{
		"img":"img/backgrounds/room4.png",
		"description":"I'm hating it",
		"objects":{
			"dumpster":{
			"description":"A disgusting trash filled Dumpster", 
			"interaction": "You hop in the dumpster and only a moment later you are in SpaceX!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"thief":{
			"description":"Looks like a true WacDonalds fan", 
			"interaction": "tells you about the treasures that can be found in the dumpster before mugging you!",
			'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			}
		},
		"pathways":{
			"west":"wacdonalds",
			"in":"spacex"
		}
	},
	"spacex":{
		"img":"img/backgrounds/room5.png",
		"description":"A company that needs you as an employee, because everyone else is at the polls..",
		"objects":{
			"musk recruiter":{
				"description":"A scaley reptillian who finds new SpaceX recruits",
				"interaction":"You are offered a job! Do you accept?",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			}
		},
		"pathways":{
			"out":"behind wacdonalds",
			"east":"downtown",
			"accept":"launchpad"
		}
	},
	"downtown":{
		"img":"img/backgrounds/room6.png",
		"description":"Everyone is yelling and in a hurry for no particular reason.",
		"objects":{
			"gritty":{
			"description":"A large orange bearded wizard",
			"interaction": "You talk!"
			},
			"testostero":{
				"description":"An intense unpleasant snake oil salesman",
				"interaction": "Warning you about the dangers of soy while offering his items that buff your weapons!"
			}
		},
		"pathways":{
			"north":"patio",
			"west":"spacex",
			"east":"polls"
		}
	},
	"polls":{
		"img":"img/backgrounds/room7.png",
		"description":"You can vote here. Nothing else is important.",
		"objects":{
			"vote-bot":{
				"description":"Reminding you that your decision will change the world",
				"interaction": "you talk!"
			},
			"voting machine":{
				"description":"A tall Voting Machine",
				"interaction": "you vote!",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"bed":{
				"description":"it's a Bed",
				"interaction": "you sleep!",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			}
		},
		"pathways":{
			"west":"downtown",
			"east":"launchpad"
		}
	},
	"launchpad":{
		"img":"img/backgrounds/room8.png",
		"description":"You can take off to Mars if you vote first.",
		"objects":{
			"rocket":{
				"description":"A large Rocket bound for Mars", 
				"interaction": "The Rocket takes off!",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			},
			"candidate you chose":{
				"description":"candidate that you chose", 
				"interaction": "you talk!",
				'stats':
				{	
					'Strength':"7",
					'Dexterity':"7",
					'Constitution':"7",
					'Intelligence':"7",
					'Wisdom':"7",
					'Luck':"7"
				}
			}
		},
		"pathways":{
			"west":"polls",
			"south":"spacex"
		}
	}
};

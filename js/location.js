var locations = {
	"House":{
		"img":"img/backgrounds/room1.png",
		"description":"You wake up in this room",
		"objects":{
			"Bed":{
				"description":"it's a Bed",
				"interaction": "you sleep!"
			},
			"House-fly":{
				"description":"flies around",
				"interaction": "you swat!"
			}
		},
		"pathways":{
			"east":"Patio"
		}
	},
	"Patio":{
		"img":"img/backgrounds/room2.png",
		"description":"You enter a patio",
		"objects":{
			"Table":{
			"description":"A rickety slanted table covered in cobwebs. The sight of it makes you uneasy",
			"interaction": "you flip the table!"
			},
			"Chairs":{
				"description":"A collection of damp uncomfortable chairs.", 
				"interaction": "You sit in the chair for a short period but get off it quickly due to its poor construction."
			},
			"Reginald":{
				"description":"Encouraging you to Pokemon-GO to the Polls", 
				"interaction": "you talk!"
			}
		},
		"pathways":{
			"west":"House",
			"east":"WacDonalds",
			"south":"Downtown"	
		}
	},
	"WacDonalds":{
		"img":"img/backgrounds/room3.png",
		"description":"When you you enter you are met with the sweet scent of the deep fryer, as the WacDonalds Robot greets you.",
		"objects":{
			"Register":{
			"description":"A new register created for the hands of the new WacDonalds robots",
			"interaction": "the WacDonalds robot tells you not to touch it!"
			},
			"Vending Machine":{
			"description":"A tall vending Machine for big Wacs",
			"interaction": "you sleep!"
			},
			"R2-Flip2":{
			"description":"Existing only to flip patties",
			"interaction": "you talk!"
			}
		},
		"pathways":{
			"west":"Patio",
			"east":"Behind WacDonalds"
		}
	},
	"Behind WacDonalds":{
		"img":"img/backgrounds/room4.png",
		"description":"I'm hating it",
		"objects":{
			"Dumpster":{
			"description":"A disgusting trash filled Dumpster", 
			"interaction": "You hop in the dumpster and only a moment later you are in SpaceX!"
			},
			"Thief":{
			"description":"Looks like a true WacDonalds fan", 
			"interaction": "tells you about the treasures that can be found in the dumpster before mugging you!"
			}
		},
		"pathways":{
			"west":"WacDonalds",
			"in":"SpaceX"
		}
	},
	"SpaceX":{
		"img":"img/backgrounds/room5.png",
		"description":"A company that needs you as an employee, because everyone else is at the polls..",
		"objects":{
			"Musk recruiter":{
				"description":"A scaley reptillian who finds new SpaceX recruits",
				"interaction":"You are offered a job! Do you accept?"
			}
		},
		"pathways":{
			"out":"Behind WacDonalds",
			"east":"Downtown",
			"accept":"Launchpad"
		}
	},
	"Downtown":{
		"img":"img/backgrounds/room6.png",
		"description":"Everyone is yelling and in a hurry for no particular reason.",
		"objects":{
			"Gritty":{
			"description":"A large orange bearded wizard",
			"interaction": "You talk!"
			},
			"Testostero":{
				"description":"An intense unpleasant snake oil salesman",
				"interaction": "Warning you about the dangers of soy while offering his items that buff your weapons!"
			}
		},
		"pathways":{
			"north":"Patio",
			"west":"SpaceX",
			"east":"polls"
		}
	},
	"Polls":{
		"img":"img/backgrounds/room7.png",
		"description":"You can vote here. Nothing else is important.",
		"objects":{
			"Vote-Bot":{
				"description":"Reminding you that your decision will change the world",
				"interaction": "you talk!"
			},
			"Voting Machine":{
				"description":"A tall Voting Machine",
				"interaction": "you vote!"
			},
			"Bed":{
				"description":"it's a Bed",
				"interaction": "you sleep!"
			}
		},
		"pathways":{
			"west":"Downtown",
			"east":"Launchpad"
		}
	},
	"Launchpad":{
		"img":"img/backgrounds/room8.png",
		"description":"You can take off to Mars if you vote first.",
		"objects":{
			"Rocket":{
				"description":"A large Rocket bound for Mars", 
				"interaction": "The Rocket takes off!"
			},
			"candidate you chose":{
				"description":"candidate that you chose", 
				"interaction": "you talk!"
			}
		},
		"pathways":{
			"west":"Polls",
			"south":"SpaceX"
		}
	}
};
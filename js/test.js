var rooms = 
{
	'House':
		{
			'description':"You wake up in this room",
			'pathways':
				{
					'east':"Patio"
				},
			'img':"img/backgrounds/room1.png",
			'objects':
				{
					'PC':"beep boop",
					'Bed':"You have a blue bed. Too blue",
					'Mirror':"You look nice today"
				}
		},
	'Patio':
		{
			'description':"You step outside onto the patio. It is a chilly afternoon.",
			'pathways':
				{
					'south':"Downtown",
					'east':"WacDonalds",
					'west':"House"
				},
			'img':"img/backgrounds/room2.png",
			'objects':
				{
					'Table':"It's just a table",
					'Chair':"You only have one chair because you're alone.",
				}
		},
	'WacDonalds':
		{
			'description':"You step outside onto the patio. It is a chilly afternoon.",
			'pathways':
				{
					'east':"Patio",
					'west':"Behind-WacDonalds"
				},
			'img':"img/backgrounds/room3.png",
			'objects':
				{
					'Vending-Machine':"Full of beet juice.",
					'Register':"Don't get tempted.",
				}
		}
}
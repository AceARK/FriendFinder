// Array of 'characters'
var friendsList = [
   {
        "name":"Legolas",
        "pic":"images/legolas.jpg",
        "type":"Lord of The Rings",
        "description":"Tireless and persistent yet disarmingly calm, Legolas' skill to handle pressure is matched only by his expert bowmanship.",
        "stats":[
        	5,
         	1,
         	3,
         	3,
         	1,
         	4,
         	2,
         	4,
         	1,
         	1
      	]
   },
   {
	    "name":"Aragorn",
	    "pic":"images/aragorn.jpg",
	    "type":"Lord of The Rings",
	    "description":"Compassionate, yet strong-willed when it comes to fulfilling his destiny. His primary duty is towards his people and ancestors. Aragorn sought to keep his word to Frodo, and was not one to shy away from sacrifices.",
	    "stats":[
         	4,
         	3,
         	2,
	        4,
	        3,
	        4,
	        4,
	        3,
	        1,
	        2
        ]
    },
    {
	    "name":"Gandalf",
	    "pic":"images/gandalf.jpg",
	    "type":"Lord of The Rings",
	    "description":"Wise and powerful, and a friend to the Hobbits. Known by many names, Gandalf's mischievous sense of humor and likable nature, belies the fact that he was one of the greatest powers of Middle Earth.",
	    "stats":[
         	4,
         	2,
         	2,
	        4,
	        2,
	        5,
	        4,
	        4,
	        1,
	        3
        ]
    },
    {
		"name":"Harry Potter",
	    "pic":"images/harryPotter.jpg",
	    "type":"Harry Potter",
	    "description":"Modest and unknown at first, Harry proves himself to be a brave and loyal fighter who rises to every challenge. His only downfall being, his extreme impulsiveness.",
	    "stats":[
         	3,
         	3,
         	3,
	        2,
	        5,
	        3,
	        3,
	        2,
	        1,
	        3
	    ]
	},
	{
		"name":"Ron Weasley",
	    "pic":"images/ronWeasley.jpg",
	    "type":"Harry Potter",
	    "description":"Often overshadowed by his brothers or friends, Ron struggles with issues of self-worth. The state of his barely scraping by pureblood family doesn't help either. He still manages to make his friends laugh, and at the end of the day, is the most loyal friend any of them could ever have.",
	    "stats":[
         	1,
         	2,
         	2,
	        3,
	        3,
	        4,
	        4,
	        3,
	        1,
	        1
	    ]
	},
	{
		"name":"Hermione Granger",
	    "pic":"images/hermioneGranger.jpg",
	    "type":"Harry Potter",
	    "description":"A rule-follower with vast reserves of knowledge that are only matched by her stubbornness and extraordinary skill at wizardry, despite coming from a non-wizarding family. She is loyal and brave and won't back away from any fight.",
	    "stats":[
         	3,
         	5,
         	2,
	        1,
	        3,
	        5,
	        3,
	        4,
	        1,
	        1
	    ]
	},
	{
		"name":"Draco Malfoy",
	    "pic":"images/malfoy.jpg",
	    "type":"Harry Potter",
	    "description":"A pureblood treated as royalty, until all eyes turned toward Harry Potter - 'the boy who lived'. Draco Malfoy instantly made it his life's mission to taunt and trouble Harry and his friends. He always thought he would be on Lord Voldemort's side like his family, but the pride of becoming a Death Eater, soon turned to fear and anguish when it became more than he could bear.",
	    "stats":[
         	1,
         	1,
         	1,
	        1,
	        5,
	        2,
	        2,
	        1,
	        5,
	        4
	    ]
	},
	{
		"name":"Charles Xavier",
	    "pic":"images/profx.jpg",
	    "type":"X-Men",
	    "description":"Professor Xavier, as he is known by the students of his beloved 'School for Gifted Youngsters', believes that mankind and mutant-kind can co-exist if only they gave each other a chance. He believes he can transform society's fear of mutants to respect, by asking mutants to use their power to help humans. Always the optimist, he is forgiving, gentle and believes in hope even where there seems to be none.",
	    "stats":[
         	5,
         	1,
         	3,
	        5,
	        3,
	        5,
	        2,
	        3,
	        1,
	        1
	    ]
	},
	{
		"name":"Jean Grey",
	    "pic":"images/jeanGrey.jpg",
	    "type":"X-Men",
	    "description":"From an early age, Jean showed a talent for empathy. Her compassion is what caused the mighty cosmic 'Phoenix force' to notice her as her young mind struggled to hold on to her dying friend. Fearing that the power that her powers would endanger her and everything else around her, Charles Xavier placed a barrier in her mind. She grew up to be someone who sacrificed her life for her friends at the cost of her own.",
	    "stats":[
         	3,
         	3,
         	3,
	        3,
	        3,
	        3,
	        3,
	        3,
	        2,
	        1
	    ]
	},
	{
		"name":"James Logan/ Wolverine",
	    "pic":"images/wolverinlogan.jpg",
	    "type":"X-Men",
	    "description":"Despite not remembering a thing about his past except traumatic flashes of the Adamantium bonding process, Logan has a distinct persona that is characterized by his instinct. He is a fighter and is prone to violence. He has rage that could've stemmed from the trauma of being treated like an animal and experimented on. And the more he is angered, the more animal-like he becomes. But despite constantly being ripped away from everything that makes him human, he still retains his humanity, and that is the true strength of his character.",
	    "stats":[
         	4,
         	5,
         	2,
	        1,
	        3,
	        4,
	        2,
	        2,
	        3,
	        3
	    ]
	},
	{
		"name":"Eric Lehnsherr/ Magneto",
	    "pic":"images/magneto.jpg",
	    "type":"X-Men",
	    "description":"Erik Lehnsherr, often characterized as being indifferent and uncaring, is in reality, deeply passionate and ruled by his heart. He is capable of great warmth and friendship, but all that is overshadowed by his deep-set anger and hatred. And it is exactly that which drives him. Despite being cynical, he cares greatly for his friend Charles, and hates that they have to be on opposite sides. Nevertheless, he sees mankind as an obsolete race, as opposed to mutants, whom he considers the next step in evolution.",
	    "stats":[
         	5,
         	4,
         	1,
	        2,
	        5,
	        2,
	        1,
	        2,
	        4,
	        3
	    ]
	},
	{

		"name":"Anakin Skywalker",
	    "pic":"images/anakin.jpg",
	    "type":"Star Wars",
	    "description":"As a young child, Anakin showed an exceptional ability to use the Force, which he mysteriously has a strong link to. But after the loss of his mother, he felt fear that ruled the rest of his life. Joining the Jedi made him feel strong and honed his power, but he never felt it enough. He constantly sought to bend the ways of the Order to suit his needs. And when he felt the Jedi ways were too much of a hindrance, the Dark Side seemed to make more sense, with it's freedom and limitless use of power. Anakin's vulnerability to the seduction of the Dark Side, shows that he feels human emotions strongly. And that is exactly what redeemed him in the end.",
	    "stats":[
         	4,
         	5,
         	1,
	        1,
	        5,
	        2,
	        1,
	        1,
	        5,
	        2
	    ]
	},
	{

		"name":"Obi-Wan Kenobi",
	    "pic":"images/obiwan.jpg",
	    "type":"Star Wars",
	    "description":"Obi-Wan is characterized as being a cautious, focussed and very traditional - the values of a typical Jedi. This often put him in conflict with his unorthodox master, Qui-Gon Jinn. Obi-Wan is thoughtful, patient and weighs his options before setting out on a mission. Despite his power, he never felt pride, and wouldn't mind seeking help from others. He proves to be a true mentor, and one of the few who become a Force Ghost and guide Luke Skywalker.",
	    "stats":[
         	5,
         	2,
         	3,
	        4,
	        2,
	        4,
	        3,
	        4,
	        1,
	        1
	    ]
	},
	{

		"name":"Han Solo",
	    "pic":"images/hansolo.jpg",
	    "type":"Star Wars",
	    "description":"Han Solo is an impulsive, charming, con-artist, but also someone who would fight for the greater good. Though reluctant at first, and prone to fleeing, he would jump to action with his trusty friend Chewy when needed, no matter what the cost. The Millennium Falcon is his most prized possession.",
	    "stats":[
         	4,
         	4,
         	3,
	        1,
	        4,
	        3,
	        3,
	        2,
	        2,
	        3
	    ]
	}
];

module.exports = friendsList;
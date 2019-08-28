/***************************
 * Quotes initialisation.  *
 ***************************/
let africanQuotes = ['If you want to go fast, go alone.',
		             'A man who makes trouble for others , ',
					 'You are either alive and proud or you are dead,',
					 ' If the elders leave you a legacy of dignified language,',
					 ' If you think you are too small to make a difference.',
					 ' knowledge is like a garden: if not cultivated',
					 'You know who you love but ',
					 'A cutting word is worse than a bowstring,a cut may',
					 'A flea can trouble a lion more than',
					 'The frown on the face of the goat will not',
					 'A bird that flies off the earth and lands ',
					 ' if the fish come out the water to say the crocodile',
					 'Who think is leading and no one is following is only',
					 'No matter how poweful a man is, he can',
					 'A man who hang around a beautif girl without a word,',
					 'No person is born great - great people',
					 'A family is like a forest, when you are outside it is dense,',
					 'Africa should not just wait to be exploited or influenced.',
					 'No. We should be part of the conversation. We should raise ourselves to a level',
					 'Developmnent is more about than money,or machines, or good policies-',
					 'Only God, who appointed me, will remove me -',
					 'We equally reject attempts to prescribe new rights that are contrary to our values,',
					 'I have died many times - that is where I have beaten Christ.',
					 'The government gives one month to those who illegally possess arms to hand them over,'
					 
					 ];
					 
let africanMidleQuotes =['If you want to go far, go together','is also making trouble for himself.',
						 'and when you are dead, you can’t care anyway.',
						 'you do not abandon it and speak childish language.',
						 'you have not spend a night with a moostito',
						 'it cannot be harvested.',
						 'you can not know who loves you',
						 'heal but the cut of the tongue does not',
						 'a lion can harm a flea',
						 'stop it from being taken to the market.',
						 'on an anthill is still on the ground.',
						 'is ill, no one should doubt it',
						 'taking a walk.',
						 'not make rain fall on his farm alone.',
						 'end up fetching water at her wedding',
						 'become great when others are sleeping.',
						 'when you are inside you see that each tree has its  place.',
						 'where there are certain terms we dictate  conversations because we have a lot to offer',
						 'it is about real people and the life they lead.',
						 'To bring about change, we must change ourselves by being law-abiding citizens',
						 'not the MDC, not the British. Only God will remove me',
						 'norms, traditions, and beliefs. We are not gays',
						 'Christ died once and resurrected once.',
						 'beyond this period, whoever is caught with arms will be punished.',
					    ];
let africanAuthor =['Igbo proverb',
	                'Chinua Achebe.',
                    'Steven Biko',
                    'Ghanaian Proverb',
                    'Yoruba Proverb',
					'bantu Proverb',
					'Nigeria Proverb',
					'Nigeria Proverb',
					'Nigeria Proverb',
					'Mandingue Proverb',
					'Bembe Proverb',
					'Kikuyu Proverb',
					'fulani Proverb',
					'Kalanji Proverb',
					'houssa Proverb',
					'houssa Proverb',
					'Paul Kagame',
					'Paul Kagame',
					'President Buhari',
					'Robert Mugabe',
					'Robert Mugabe',
					'Robert Mugabe',
					'Pierre Nkurunziza'
					];
let businessQuote=['Success is not final; failure is not fatal:',
				  'It is better to fail in originality than',
				  'The road to success and the road to',
				  'Opportunities do not happen.',
				  'Do not be afraid to give up the good',
				  'I find that the harder I work,',
				  'There are two types of people who will tell you that you cannot make a difference in this world:',
				  'Successful people do what unsuccessful people are not willing to do.',
				  'Try not to become a man of success.',
				  'Never give in except to convictions',
				  'Stop chasing the money and',
				  'Success is walking from failure to failure',
				   'If you are not willing to risk the usual,',
				   'The ones who are crazy enough to think they can change the world,',
				  'All progress takes place outside',
				  'The only limit to our realization of tomorrow',
				  'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened,',
				  'The way to get started is to quit',
				  'There are no secrets to success. It is the result of preparation,',
				  ];
let businessMidlequote=['It is the courage to continue that counts.',
					   'to succeed in imitation.',
					   'failure are almost exactly the same.',
					   'You create them.',
					   'to go for the great.',
					   'the more luck I seem to have.',
					   'those who are afraid to try and those who are afraid you will succeed.',
					   'Do not wish it were easier; wish you were better.',
					   'Rather become a man of value.',
					   'of honor and good sense.',
					   'start chasing the passion.',
					   'with no loss of enthusiasm.',
					   'you will have to settle for the ordinary.',
					   'are the ones that do.',
					   'the comfort zone.',
					   'will be our doubts of today.',
					   'ambition inspired, and success achieved.',
					   'talking and begin doing.',
					   'The successful warrior is the average man,',
					   'with laser-like focus.',
					   'hard work, and learning from failure.',
					   ];
let businessAuthor=['Winston S. Churchill',	
				   'Herman Melville',
				   'Colin R. Davis',
				   'Chris Grosser',
				   'John D. Rockefeller',
				   'Thomas Jefferson',
				   'Ray Goforth',
				   'Jim Rohn',
				   'Albert Einstein',
				   'Winston Churchill',
				   'Tony Hsieh',
				   'Winston Churchill',
				   'Jim Rohn',
				   'Anonymous',
				   'Michael John Bobak',
				   'Franklin D. Roosevelt',
				   'Helen Keller',
				   'Walt Disney',
				   'Bruce Lee',
				   'Colin Powell',
				   ];

				
				
				


/********************************************
 *get a single quote from arrays.           *
 *display them in the page code generator.  *
 ********************************************/
function generateQuote( a, b, c)
{
	let randIndex = Math.floor(Math.random()*a.length);	
	//output the quote to the webpage
	let d= document.createElement('div');
	let p = document.createElement('p');
	p.innerHTML = '"' + a[randIndex] +' '+ b[randIndex]+ '' + '<br>';
	p.className = 'quoteOutput';
	p.style.fontFamily = 'Trattatello, fantasy';
	p.style.fontSize = '1.2 rem';
	d.appendChild(p);
	let newP = document.createElement('p');
	newP.innerHTML ='-'+ ' ' + c[randIndex] + '<br>';
	newP.className = 'author';
	newP.style.fontFamily = 'Trattatello, fantasy';
	newP.style.fontSize='1.5 rem';
	d.appendChild(newP);
	d.style.backgroundColor = '#65f7ba';
	d.style.align = 'center';
	d.style.paddingTop = '10px' ;
	d.style.paddingBottom ='10px' ;
	d.style.paddingLeft = '10px';
	d.style.paddingRight = '10px';
	d.style.marginTop = '40px';
	d.style.borderRadius = '50px';
	quoteDisplay.appendChild(d);
}

/*****************************************************
 * get input from the webpage.                       *
 * iterate number requested by the user to display   *
 * quotes on the webpage of quote generator.         *
 * send a message to the user when input is wrong.   *
 *****************************************************/

function displayQuote()
{
	/*get the choice of types and number of quotes*/
	let selector=document.getElementById('quoteSelect');
	let choice= [selector[selector.selectedIndex].value,document.getElementById('nbQuotes').value];
	 document.getElementById('quoteDisplay').innerHTML = "";
	/*get the quotes from array(iterate choice[1] times )*/
	//if(choice[1]== null){alert(undefined);}
	
	if(choice[0]== 'african' )
	{
		for(i=0;i<choice[1] ;i++)
		{
		 generateQuote(africanQuotes,africanMidleQuotes,africanAuthor);
		}
	}
	else
	{
		if(choice[0]== 'business' )
		{
			for(i=0;i<choice[1];i++)
			{
				generateQuote(businessQuote,businessMidlequote,businessAuthor);
			}
		}
		else
		{
			
			alert('Type of quotes is required.');
		}
	}
}
	
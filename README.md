# <span style = "color: yellow; background-color: Black"> SpaceCapades</span> 


![Image of Mockup](assets/images/SpaceCapadesMockup.jpg)

<span style="color: yellow; background-color: Black; font-size: 110%; font-weight: 600;">SpaceCapades</span> is a memory card game that teaches young children <span style = "color: lightpink; font-weight: 600; "> 5-10 </span> about the wonders of the solar sytem, the game is set up into 3 difficulties, <span style="color:green;">Cadet</span>,<span style="color:lightblue"> Pilot</span> & <span style="color: darkred;">Commander</span>. Whereby the player must use their memory to match sets of space related cards before the timer runs out. upon matching a set of cards information or facts about the matched set will display on screen, the information will change as the game progresses instilling a sense of learning and progression for the player. Upon Victory the player will be allowed to move on to the next level. 

# UX

## An Overview of : The Why?

For My second project I set out knowing I wanted to build something highly interactive. It took me sometime to decide whether I wanted to focus on something heavily API based or dive deeper into JavaScript and build something outside of my comfort zone. A project that I could ultimately learn from.  
I settled on the idea of a card game, as I had fond memories growing up and playing many with family. As we interacted and played I'd listen to my older relatives discuss news and ideas and I always left the table knowing a little more then when I sat down. Throughout this project I felt very strongly
about recreating that environment for the user, therefore every decision made was geared towards creating a re-playable experience that would stimulate the user both visually and intellectually. Hence the addition of multiple levels, Incentives in the form of Facts being displayed on every card match and 
garnering a strong sense of community with the creation of a competitive Hi-Score system using Google FireBase/Firestore (I still got to add an API in the end, Hooray!).

## User Goals
 
<span style="color:lightblue;">User goal:</span>  This site's users are expected to be young children between the ages of 5-10 who will use the site recreationally to learn about our planet, the solar sytem and the universe beyond. It is meant purely for the engagement and learning of the user.

<span style="color:violet;">User expectation:</span> 

* The User Can expect to have a clear understanding of the global Game state - Seperate Overlays have been Created At Start, Victory and Loss times. 
  The Victory and loss screens in particular having custom animations that give the user a sense of accomplishment or in the traditional game over sense the incentive/push to try again.
* The start Screen provides a clear indication of level difficulties with universally recognisable colour schemes green for <span style="color:green;">Cadet</span>, indigo/blue for <span style="color:indigo"> Pilot</span> & red for the hardest difficulty <span style="color: darkred;">Commander</span>.  
  The difficulty levels were also named after airforce/NASA related Ranks that players may be familiar with, again to instill and clarify the level of the challenge ahead.
* Each level of difficulty will have more cards to match in the same time parameter, 8 for <span style="color:green;">Cadet</span>, 12 for <span style="color:indigo"> Pilot</span> & 16 for <span style="color: darkred;">Commander</span>.
* The colour gold as well as a trophy image (credit to <a href="https://fontawesome.com/">FontAwesome</a>) was also used to indicate the <span style="color:gold;">Scores</span> button on the start screen where users can expect to see a list of the top ten hi-scores ordered by time remaining.
* Measures where taken to ensure that the facts displayed as the user plays through the game are relevant and diverse, filtering was also used to ensure that each fact although random could not be displayed twice in a row.

<span style="color:lightblue;">Site Owner's goal:</span> is to create a visually appealing & creative experience that will engage with and garner the attention of a younger audience all the while educating and increasing their knowledge of topics such astrology and physics. The site owner wishes to attract parents to the platform to be used as a preferred tool for learning.

<span style="color:violet;">Site Owner's Expectations:</span>

Below are the main questions I asked myself throughout the development process:

* <span style="color:lightblue;">Is this obvious to the user?</span> - specifically when dealing with the overal interactivity of the game and presentation of information,
I.E. how easy is it to get from A to B? are the visual and navigational choices delightful? Is there weight to the animation? Does it relate/re-create a real life model or experience?
More simply - do the cards flipping look like real cards?.
* <span style="color:lightblue;">Is it pretty?</span> - Does the overall UI look inviting? is there an obvious theme or color scheme? Is it attractive to my users, do they engage with the pictures and images used? 
Are the colours vibrant enough for a younger child? Does it stimulate their imagination and would they come back for more?
* <span style="color:lightblue;">Is it interactive?</span> - Does the site offer both visual and audio queues to the user? Are the responses timely? Do they add to the understanding of the user? Do they add to the interactivity of the user and add weight to the users choices?
* <span style="color:lightblue;">Is it fun?</span> - Am I building something enjoyable to play? Is it challenging within reason? Does it offer incentive to return? Is there more value to playing multiple times? Can the user get better at it? Does the user have the ability to increase the level of challenge?

## User Stories

<span style="color:lightblue;">The Parent</span> - I love my child and I care about their development. I'm excited for them to use technology but I want them to develop healthy habits and have good relationships with their devices. I want to encourage them to use websites and applications that compliment their learning at school, as well as engage them and allow them to have fun at the same time.

<span style="color:lightblue;">The Child</span> - I am curious and inquisitive. I'm young and I want to try new things. I'm already developing a strong sense of what I like and dislike. I like playing games on my iPad and my favourites are ones about space or dinosaurs. School is fun but paying attention isn't. My favourite lessons are when we learn about space and the stars and planets. I think I like science and want to be a scientist when I grow up. 


## Poject Scope:

The Project was built to a schedule in order to be submitted by my soft deadline, of 18th of August 2020. It was therefore of the utmost importance that certain features were scoped out in order to do prioritise importance and functionality over embellishment and possible feature creep. I am happy to report however that at the time of writing this I feel as though I've accomplished a project which is well rounded and runs smoothly as expected.

Drawing from my experience studying product management, The features were divided using agile principals in the typical Now,Then, Later fashion as one would see when using the likes of Jira and other agile based frameworks.

## Now
* Research to be made viewing similar projects (as this was my first time writing anything in JS outside of the codeinstitute examples)

* A core game to be designed.
    * Visual Game layout
    * JavaScript style (Object,Oriented)
    * implementing Shuffling function. 
    * start game state
    * failsafes to ensure cards cant be manipulated so as to break the rules or immersion of the user.

* A core UI to be made.
    * Cards
    * Basic functional animations
    * start, win, loose overlays to be implemented.

* A Start screen precluding and announcing the game.
    * Game title
    * functional buttons to act as links to the game page.



## Then
* function getRandomFact() - which pushes facts when called.

* added levels of functionality.
    * cadet level added
    * pilot level added

* Final styles and animations.


## Later
* Hi-Score system to be implemented
    * learning google firebase
    * creating a method to send scores and add them as a visual table of information for the user.

* To be implemented
    * further manipulation and table creation to show scores in relation to their level of difficulty.
    * Perhaps further levels of difficulty with different time goals 
    * Deeper testing using Jasmine





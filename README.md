![Image of Mockup](assets/images/SpaceCapadesMockup.jpg)

<span style="color: yellow; background-color: Black; font-size: 110%; font-weight: 600;">SpaceCapades</span> is a memory card game that teaches young children <span style = "color: lightpink; font-weight: 600; "> 5-10 </span> about the wonders of the solar sytem, the game is set up into 3 difficulties, <span style="color:green;">Cadet</span>,<span style="color:lightblue"> Pilot</span> & <span style="color: darkred;">Commander</span>. Whereby the player must use their memory to match sets of space related cards before the timer runs out. upon matching a set of cards information or facts about the matched set will display on screen, the information will change as the game progresses instilling a sense of learning and progression for the player. Upon Victory the player will be allowed to move on to the next level.

# UX

## An Overview of : The Why?

For My second project I set out knowing I wanted to build something highly interactive. It took me sometime to decide whether I wanted to focus on something heavily API based or dive deeper into JavaScript and build something outside of my comfort zone. A project that I could ultimately learn from.  
I settled on the idea of a card game, as I had fond memories growing up and playing many with family. As we interacted and played I'd listen to my older relatives discuss news and ideas and I always left the table knowing a little more then when I sat down. Throughout this project I felt very strongly
about recreating that experience for the user, therefore every decision made was geared towards creating a re-playable experience that would stimulate the user both visually and intellectually. Hence the addition of multiple levels, Incentives in the form of Facts being displayed on every card match and
garnering a strong sense of community with the creation of a competitive Hi-Score system using Google FireBase/Firestore (I still got to add an API in the end, Hooray!).

## User Goals

<span style="color:lightblue;">User goal:</span> This site's users are expected to be young children between the ages of 5-10 who will use the site recreationally to learn about our planet, the solar sytem and the universe beyond. It is meant purely for the engagement and learning of the user.

<span style="color:violet;">User expectation:</span>

- The User Can expect to have a clear understanding of the global Game state - Seperate Overlays have been Created At Start, Victory and Loss times.
  The Victory and loss screens in particular having custom animations that give the user a sense of accomplishment or in the traditional game over sense the incentive/push to try again.
- The start Screen provides a clear indication of level difficulties with universally recognisable colour schemes green for <span style="color:green;">Cadet</span>, indigo/blue for <span style="color:indigo"> Pilot</span> & red for the hardest difficulty <span style="color: darkred;">Commander</span>.  
  The difficulty levels were also named after airforce/NASA related Ranks that players may be familiar with, again to instill and clarify the level of the challenge ahead.
- Each level of difficulty will have more cards to match in the same time parameter, 8 for <span style="color:green;">Cadet</span>, 12 for <span style="color:indigo"> Pilot</span> & 16 for <span style="color: darkred;">Commander</span>.
- The colour gold as well as a trophy image (credit to <a href="https://fontawesome.com/">FontAwesome</a>) was also used to indicate the <span style="color:gold;">Scores</span> button on the start screen where users can expect to see a list of the top ten hi-scores ordered by time remaining.
- Measures where taken to ensure that the facts displayed as the user plays through the game are relevant and diverse, filtering was also used to ensure that each fact although random could not be displayed twice in a row.

<span style="color:lightblue;">Site Owner's goal:</span> is to create a visually appealing & creative experience that will engage with and garner the attention of a younger audience all the while educating and increasing their knowledge of topics such astrology and physics. The site owner wishes to attract parents to the platform to be used as a preferred tool for learning.

<span style="color:violet;">Site Owner's Expectations:</span>

Below are the main questions I asked myself throughout the development process:

- <span style="color:lightblue;">Is this obvious to the user?</span> - specifically when dealing with the overal interactivity of the game and presentation of information,
  I.E. how easy is it to get from A to B? are the visual and navigational choices delightful? Is there weight to the animation? Does it relate/re-create a real life model or experience?
  More simply - do the cards flipping look like real cards?.
- <span style="color:lightblue;">Is it pretty?</span> - Does the overall UI look inviting? is there an obvious theme or color scheme? Is it attractive to my users, do they engage with the pictures and images used?
  Are the colours vibrant enough for a younger child? Does it stimulate their imagination and would they come back for more?
- <span style="color:lightblue;">Is it interactive?</span> - Does the site offer both visual and audio queues to the user? Are the responses timely? Do they add to the understanding of the user? Do they add to the interactivity of the user and add weight to the users choices?
- <span style="color:lightblue;">Is it fun?</span> - Am I building something enjoyable to play? Is it challenging within reason? Does it offer incentive to return? Is there more value to playing multiple times? Can the user get better at it? Does the user have the ability to increase the level of challenge?

## User Stories

<span style="color:lightblue;">The Parent</span> - I love my child and I care about their development. I'm excited for them to use technology but I want them to develop healthy habits and have good relationships with their devices. I want to encourage them to use websites and applications that compliment their learning at school, as well as engage them and allow them to have fun at the same time.

<span style="color:lightblue;">The Child</span> - I am curious and inquisitive. I'm young and I want to try new things. I'm already developing a strong sense of what I like and dislike. I like playing games on my iPad and my favourites are ones about space or dinosaurs. School is fun but paying attention isn't. My favourite lessons are when we learn about space and the stars and planets. I think I like science and want to be a scientist when I grow up.

## Poject Scope:

The Project was built to a schedule in order to be submitted by my soft deadline, of 18th of August 2020. It was therefore of the utmost importance that certain features were scoped out in order to do prioritise importance and functionality over embellishment and possible feature creep. I am happy to report however that at the time of writing this I feel as though I've accomplished a project which is well rounded and runs smoothly as expected.

Drawing from my experience studying product management, The features were divided using agile principals in the typical Now, Then, Later fashion as one would see when using the likes of Jira and other agile based frameworks.

## Now

- Research to be made viewing similar projects (as this was my first time writing anything in JS outside of the codeinstitute examples)

- A core game to be designed.

  - Visual Game layout
  - JavaScript style (Object,Oriented)
  - implementing Shuffling function.
  - start game state
  - failsafes to ensure cards cant be manipulated so as to break the rules or immersion of the user.

- A core UI to be made.

  - Cards
  - Basic functional animations
  - start, win, loose overlays to be implemented.

- A Start screen precluding and announcing the game.
  - Game title
  - functional buttons to act as links to the game page.

## Then

- function getRandomFact() - which pushes facts when called.

- added levels of functionality.

  - cadet level added
  - pilot level added

- Final styles and animations.

## Later

- Hi-Score system to be implemented

  - learning google firebase
  - creating a method to send scores and add them as a visual table of information for the user.

- To be implemented
  - further manipulation and table creation to show scores in relation to their level of difficulty.
  - Perhaps further levels of difficulty with different time goals
  - Deeper testing using Jasmine
  - Possible Redesign to turn the project into and SPA or single page application.

## Design Structure

The game as well as index page was always to be designed with the idea of a clean cut simple user interface that focuses on the task at hand. This was done inorder not to break user immersion by adding in unnecessary distraction to gameplay. In short I wanted a layout that would incorporate the best from both its design and function. All the game elements are centered. Although bootstrap is used to design the first page. The second page uses mainly CSS grid to style the cards, this change was made due to the ability for css grid to assign random indexes to elements making shuffling the order of my card elements easier.

## Skeleton

I used Adobe XD to create the wire-frames for the game's start page and I based the stucture of the game from a video by youtube user <a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw">WebDevSimplified</a> who can be found credited below in detail as my main inspiration for the stylings of this project.

Please find an example of some of my artboards below.

![Image of wireframe](assets/images/WireframeblkWht.jpg)
![Image of wireframe](assets/images/WireframeColour.jpg)

## Colour scheme

The Colour scheme was kept simple and representative of a nightsky/space environment

- Deep blues mainly : #4b53c6 and #090a19 used for the background and back/face of the cards, the latter used to create a radial gradient on the back face of the card.

- Pure white was used for all the typography as it stood out and was easily readable in contrast to the darker background.

- Universally recognisable colour schemes were used for the difficulty buttons, green for <span style="color:green;">Cadet</span>, indigo/blue for <span style="color:indigo"> Pilot</span> & red for the hardest difficulty <span style="color: red;">Commander</span>.

- By contrast the color schemes for the pictures on the front faces of the cards were very diverse and attempted to stay very true to the real life counterparts of the images.

## Typography

As Always the font choice needed to be specific. I wanted the font to feel both gameified and futuristic, I was really excited when I stumbled upon the BryantPro2 font family. It instantly felt very unique and fit in very well overall in this project, the font is available for download in the assets folder of this project. It is also deployed locally as google fonts don't seem to have it freely available.

# Features

## Existing features

### Site Wide.

- The entire site makes use of the Google Firebase API, which enables me to maintain a server containing hi-scores ready for display. Google's API has great documentation and is implemented by use of the API key found in index.JS.

### Index.HTML

- Here you can find the home screen interface complete with game-title (animated), varying levels of difficulty and trophy/hi-scores button, which triggers an overlay and displays the score inputed by the user at the end of each successful level.
  - The animations for the buttons were done with a mixture of custom jquery and hover CSS
  - The hi-scores are held server-side using Google's firebase API.
  - Query parameters were used in the Href of each level to help tell the game what difficulty to run.
  - bootstrap was used inorder to ensure mobile compatibility as well as a quick easy single column design.
  - Difficulty buttons are also labelled.

### Game.HTML

- Here you can see the main game page, featuring timer-countdown, flip counter and game cards in grid. All cards are animated purely in css using both a mixture of :hover psudo-classes and a few simple event listeners in the script.js folder which add the .visible class. This page also features the games status overlays, such as start game, game over and ofcourse the seperately featured victory-overlay. Upon match a spaceFact will appear dynamically centered at the top of the page.
  - perspective was used in order to make the card flipping animation.
  - custom animations were created for the back of the cards to indicate which card is being selected by the user.
  - The script.js features an function with an array of facts sourced from various space websites that can be found credited below.
  - The shuffling Algorithm - I used the fisher/Yates shuffling algorithm which.
  1. takes an array and works through it backwards from [-1] to [0]
  2.  for each iteration, it creates a random INT which is >= 0 and <= to i.
  3.  it then exchanges the random number created with the position of the one being iterated, And thats the shuffle!

please find this credited below or visit
<a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle">This Wikipedia link</a> to see a fully provided explanation as well as pseudo-code.

- The Victory Overlay is particularly special as it contains the form and calculated end score that it will send to the firebase server. The results to then be displayed on index html

- The startGameLevel() function that I made is one that I am particularly proud of as it uses custom CSS level classes and the games Object oriented code to determine which cards to allow and which to leave out depenting on the difficulty shown by the query parameters.

- The game Features an Object oriented approach which centers around the custom GameLevel class, which acts as a blueprint for the outline of the game and has allowed me to use the properties of encapsulation, Abstraction, inheritance and polymorphism to group sets of functions and execute the games core code very cleanly.

- Sounds - the game also features sounds and backings that can all be executed through a custom class called AudioControls. These are responsive and are implemented accordingly to the actions of the user.

### To be implemented

- further manipulation and table creation to show scores in relation to their level of difficulty.
- Perhaps further levels of difficulty with different time goals
- Deeper testing using Jasmine
- Possible Redesign to turn the project into and SPA or single page application.

# Technologies Used

## HTML5

- Comprising of 52.6% of my entire code was Used to implement the structure and elements essential to my site.

## CSS3

- Was used to style my entire project.
- CSS grid was used to create the table structure of my cards and allowed for the randomIndex property to be added to the shuffling function. Originally if you look far back enough you can see I built the game in pure bootstrap and then had to make the switch due to the limitations in bootstrap.

## JavaScript ES6

- Was used to create the functionality of the game, dynamic level functions as well as connect to the firebase API.

## Jquery

- Used purely to test out some animations on the first page and made the code a little cleaner.

## Bootstrap

- Used to style the navigational index.html page of the website.

## Hover CSS

- Used for the Button animations.

## Git

- Used for implementation and version control.

## GitHub

- Used for the storing of the repositiory.

## GitPod

- The IDE used for the development of the entire project.

## Adobe XD

- Used for the mockups and wireframes.

## Freepik

- Used to source the .PNG card pictures used in the design of this project.

# Testing

## HTML
 All the HTML for the site was tested using https://validator.w3.org/ and returned no errors.
   * only one warning - The type attribute is unnecessary for JavaScript resources.

## CSS
 All the CSS for the site was tested using https://jigsaw.w3.org/css-validator/validator and returned no errors. 
  * However warnings are flagged about certain vendor extensions that the Validator classes as unknown. This however is unimportant to me as tey helped me over-come a massive bug that was causing the css animations to crash on mobile devices. 

  * The vendor extensions such as 
    -webkit-
    -moz-
    -o-
    were all added using https://autoprefixer.github.io/ .

## JS
 All the JavaScript for the site was tested using https://jshint.com/. Presently there are no errors save a few warnings. Which are of no concern as most modern browsers support ECMA 6.
 
 * index.js

   * 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
   * arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
   * 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
   * 'template literal syntax' is only available in ES6 (use 'esversion: 6').

   * Two undefined variables '$' - used for jquery and 'firebase' used for FireBase API

   * One unused variable showHiScores() - which is not called in the code as it is tied to an onclick event in index.html.
  
   * Metrics
    
     There are 8 functions in this file.

     Function with the largest signature take 1 arguments, while the median is 0.5.

     Largest function has 16 statements in it, while the median is 3.5.

     The most complex function has a cyclomatic complexity value of 3 while the median is 1.

* script.js

   * 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
   * arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
   * 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
   * 'template literal syntax' is only available in ES6 (use 'esversion: 6').
   * 'class' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

   * One undefined variable URLSearchParams used to help me identify query parameters which set the level difficulty.

   * Metrics
     
     There are 38 functions in this file.

     Function with the largest signature take 2 arguments, while the median is 0.

     Largest function has 11 statements in it, while the median is 2.5.

     The most complex function has a cyclomatic complexity value of 3 while the median is 1.

  I used <a href="http://ami.responsivedesign.is/">Am I Responsive</a> and <a href="https://www.responsinator.com/">Responsinator</a> to ensure that my app worked on multiple devices. The latter was expecially helpful when wanting to check out horizontal orientations on mobile devices.  

  As well as chrome developer tools, which has the provision to test on:
  * Samsung Galaxy - Responsive
  * Pixel 2 - Responsive
  * Pixel 2 XL - Responsive
  * iPhone 5s/Se/6/7/8/X - Responsive
  * iPad 9.7" - Responsive
  * iPad Pro - Responsive
  * Surface Duo - Responsive
  * Galaxy Fold - Responsive

### Links/Buttons
All links work and are accounted for

### Images
All images render correctly, all image links work.

### Sounds
All sounds functions work on queue as expected. There was a change in the file extensions made from .wav to .mp3 so that all the sounds could be heard on mobile devices.

### Overflow 
Overflow-X begins at < 233px

## Chrome Developer Tools.

This is where the majority of my debugging took place throughout this project I have run into my fair share of hurdles.

<a href="https://www.youtube.com/watch?v=AX7uybwukkk">This Video</a> was recommended to me by one of the tutors at code institute. Its use of the debugger tool together with console logging the bugged variables helped me out of the majority of my bugs with only one major one requiring tutor support. Below are a list of the bugs I encountered and the steps I took to over come them 

* Eventlistener of null - This was perhaps my most consistent issue whilst building this project and it happened to me on two instances.

 The first was when constructing my startLevelDifficulty function which could not read the event listener I was using at the time as the order in my JS scripts was listed incorrectly. I however didnt know this at the time so I used query parameters instead to overcome this.

 The Second was when using FireBase, certain Eventlisteners were listening for elements found only on othe pages, now that I had fixed my issue with the ordering of my script tags I used conditional statements to check if the value of the function was != null before proceeding.

* Vendor specific extensions bug. Quite literally One day before deploying my project I was in the process of testing my website on my iPhone when I found that the css animations for the cards were bugging out, this was found to be consistent on both safari and chrome on mobile. No error was showing up on the console, even when I ran it through the iPhone simulator on my mac. I was unsure what to do so I consulted my tutor who pointed me in the right direction, of looking into vendor specific extensions. After trying to isolate the correct property using https://caniuse.com/#home and adding several extensions myself I was still unsuccessful, it was only when I passed the css through https://autoprefixer.github.io/ did I discover the issue to be resolved.

* the this.cardsArray value was changed from cards to startLevelDifficulty() in order make the value of this.cardsArray equal to this.matchedCards() and for difficulty to be determined.

* .filer method was used in the getRandomFact() was used inorder to fix a bug that caused the same fact to be repeated twice in a row.

* Bootstrap bug - You may notice that bootstrap was traded in for CSS Grid on the game page as bootstrap is not able to randomise the order of elements as easily.


# Deployment

## Deployment To Github Pages

In my account GitHub website, I selected Repositories

I selected SpaceCapades from the GitHub Dashboard.

I navigated to Settings and to the GitHub Pages section.

From the Source section, I clicked on the drop-down menu and selected Master Branch.

Once Master Branch is selected, the page has been automatically refreshed, with a detailed ribbon display GitHub Source Saved Pages indicating the successful implementation.

The live link can be found here -<<DEPLOYED URL IN GH PAGE>>

## PLEASE NOTE

Allow a few minutes to pass before opening your newly deployed link! Clicking this link too quickly may result in a failure to build the site, causing an Error 404 page instead.

Local Deployment

To run locally, you can do one of the following two options

Clone the repository using the git clone <<name of your .git file>> command

Download the zip file, unzip and run it in your favourite local IDE (such as VS Code)

# Credit

* I will start first and foremost by thanking these two Incredible developers <a href="https://github.com/WebDevSimplified">WebDevSimplified</a> and <a href="https://github.com/portexe">Portexe</a>. Whose youtube video series on <a href="https://www.youtube.com/watch?v=3uuQ3g92oPQ">Card</a> <a href="https://www.youtube.com/watch?v=28VfzEiJgy4">Games</a> (those two links specifically) is where I learned to code the core of my game. Watching their two videos thought me greatly about the concepts of object oreiented programming, css grid and using perscpective in CSS. I was then able to adapt their code and customise the ideas into my own version of a Card matching Game and go further by including multiple levels, fact adding functions and Hi-Score support using Google FireBase. Needless to say before coming across these two wonderful guys the idea of making something as complex as a game in Java script was beyond me. But through their tutalage I am now capable of so much more in the language. This would have not been possible without their tutorial.

* The Statisticians Frank Yates FRS and Sir Ronald Fisher for the use of their beautifully made <a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle">Fisher/Yates shuffle.</a> Which I used to shuffle my cards.

* <a href="https://www.youtube.com/watch?v=4d-gIPGzmK4&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB">Net Ninja</a> for his youtube series on using Google firebase and fire store.

* <a href="https://space-facts.com/">This website </a>where I sourced all of my spaceFacts!

* The fine tutors Of Code institute, namely Miklos, Haley, Kevin and Stephen, who had plenty of patience with me when I got stuck on various bugs in my project.

* Special thanks to my mentor Allen Thomas Varghese, who has always encouraged me, guided me and told me that my designs were fancy!

* Youtuber <a href="https://www.youtube.com/watch?v=pTB0EiLXUC8">Mosh Hamedani</a> whose video on the pricipals of Object oriented programing I watched over and over again to make sense of the concepts I was learning.

* <a href= "http://designsbucket.com/free-space-icon-set-50-icons-svg-png/">Freepik</a> for its free set of space Icons that I used and animated over this project.

* My fellow codeinstitute colleague/student Sonia Hussein whose <a href="https://github.com/CodeSonia/CodeSonia_Personal_Portfolio">Readme file</a> structure was used as a basepoint to structure my own.

* codeinstitute advisor Claire Lally for helping me with the deployment part of this write up.

## Personal Reflections

Upon starting this project, I felt a little lost and didn't quite know where to begin. I was worried as although I now had an understanding of the core concepts of Javascript as an imperative programming language, putting them into practice seemed monumentous and a little daunting, especially as css and html came so easily to me. Through research and a lot of hard work its safe to say that I feel as though I am beginning to overcome my initial fear of messing up and trusting in myself as a developer, that given a little time I can always rely on myself to come up with the answer. I now love JavaScript and relish the challenge of fixing my mistakes and trying out new code, I am incredibly eager so as to keep my foot on the gas an develop further javascript projects throughout the remainder of the course as I delve into python and beyond!

Thank you codeinstitute!
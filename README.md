# Mastermind Game

The computer has chosen a secret code that the user must guess. Each digit of the code will be between 0 and 7. The user is allowed 10 guesses. For each guess, the user will be told:

how many digits are correct and in the correct position (denoted by an X)
how many digits are correct and in an incorrect position (denoted by an O)
how many digits are incorrect (denoted by a -)

## How to Run the Program

Access the game online [here](https://mastermindkw.netlify.com/).

You can also run the game on your computer by following these steps.

1. Create a forked copy of this project.
2. Clone your OWN version of the repository in your terminal
3. cd into the project directory
4. Download project dependencies by running yarn
5. Start up the app using yarn start

## Thought Process

### Planning

To ensure an efficient programming experience, I started this project by familiarizing myself with the game of mastermind. Most of the planning was done on pen and paper. The first step was to play a few games of mastermind to familiarize myself with the game structure and the ideal experience a user would want. The process below was written out before a text editor was opened and amended as necessary to smooth development.

### Determination of the guess evaluation function

After playing a few games, I determined that the for the basic game, the two core pieces of data are the code and the guess, and that every other piece of data that the program would need could be determined from the interaction of those two pieces of data. Before building out the user interface, I decided that I wanted a clean algorithm that would allow these two pieces of data to be the only thing I needed to store in state.

To return accurate feedback to the user, the guess evaluation function had to tell the user two things: 1) How many digits were correct and in the correct position, and 2)How many digits were correct and in the incorrect position. Before writing the guess evaluation funciton, I wrote tests for all possible combinations of output for the function.

Since position is key in the game, I decided to store the code and the guess within two separate arrays.To determine how many digits are correct and in the correct position, I evaluate equality between each value in the code array against each value in the same position in the guess array. For each pair that was found to be equal, the digitAndPositionCorrect variable was increased by one. In order to prepare the two arrays for the second step of the process, any matching values in the same position were set to null in a copy of each array.

Now that I have a copy of each array with the correctly positioned digits removed, I evaluate the count of each possible value (0-7) in each array and take the minimum of the count of each array. This value is then added to the onlyDigitCorrect variable. By doing this, I ensure that for each correct digit that the user has entered, it is only added once to the onlyDigitCorrect variable, even if that digit is duplicated in the code or vice versa.

Eventually more pieces of data were added into state as extensions were implemented such as allowing the user to select game difficulty and adding the ability to give hints.

### Building of the Mastermind User Interface

The next step of the planning process was drawing out a basic user interface. Given that this project was created for an interview with LinkedIn, the LinkedIn color scheme and design guidelines (that I could find/determine from looking at their website) were used throughout the process. In addition to aesthetics, the following practices were also prioritized throughout the design and implementation process:

a) The interface should be intuitive. (i.e. The user can press buttons to enter their input or use the keyboard)
b) The interface should be clean and simple. (i.e. The game interface itself is set away from the description of the rules)
c) The interface should be understandable. (i.e. The rules are clearly defined on the main page and the user can always see how many guesses they have left and how many digits are in the code for the mode they have selected)

Before implementing the guess evaluation function, I created all the components for the game using React. To begin with, the App component just included a header and a game component.

### Hooking Up the Function to the User Interface and Fetching the Code

Once the user interface was built out, I imported the guess evaluation function into the game component. To begin with, I had the code stored as a static code [0, 1, 2, 3] to be able to test whether it was rendering correctly to the user interface and whether the feedback was correct.

After I had connected the components and ensured that the user input and feedback was displaying correctly, it was time to fetch the code. This proved to be one of the more challenging parts of making this project. Initially, I had set up the code to fetch in a static variable outside of the component. Unfortunately, API calls do not happen instantaneously, and I found that my component was loading before my code came back. When the code was fed into the function, it couldn't be compared to the guess because it was undefined. After much googling and several hours of learning about promises, I implemented the code as part of state and set it to fetch in the ComponentWillMount method within the game component.

### Refinement of User Interface

Once the game had basic functionality, I had my friends try out the game and give comments on how the user interface could be improved and what additional functionality would be most interesting. Though I had a number of ideas for improvements and extensions, I wanted to get some feedback before prioritizing how to spend my time. From this feedback, I determined that the most important changes to the basic interface were to be able to submit guesses using the 'Enter' key and to have the ability to clear the input in case of a mistake. As far as extending the functionality, my friends said it would be most interesting to be able to have different difficulties (as determined by the length of the code) as well as to be able to get hints.

## Extensions

Hints: The user can request hints up until the entire code is revealed.

Game Modes: Before the main game page launches, the user must select a game mode: Easy (3 digits code), Medium (4 digit code), Hard (5 digit code)

Loading Animation: the ReactLoading library was imported and implemented to let the user know that the game page is loading rather than seeing a blank screen.

## Technologies Used

HTML, CSS, JavaScript, React

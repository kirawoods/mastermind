# Mastermind Game

The computer has chosen a secret code that the user must guess. Each digit of the code is between 0 and 7 (inclusive). The user is allowed 10 guesses. For each guess, the user will be told:

- how many digits are correct and in the correct position (denoted by an X)
- how many digits are correct and in an incorrect position (denoted by an O)
- how many digits are incorrect (denoted by a -)

## How to Run the Program

You can access the game online [here](https://mastermindkw.netlify.com/).

You can also run the game on your computer by following these steps.

1. Clone this repository
2. In the project directory, run `yarn`
4. Start the app by running `yarn start`

## Thought Process

### Planning

To ensure an efficient programming experience, I started this project by familiarizing myself with the game of mastermind. The first step was to play a few games of mastermind to familiarize myself with the game structure and the ideal experience a user would want. The process below was written out on pen and paper and amended as necessary as the project progressed.

### Determination of the guess evaluation function

After playing a few games, I determined that, for the basic game, the two core pieces of data are the code and the guess. Every other piece of data that the program needs can be derived from the interaction of these two pieces of data. Before building out the user interface, I decided that I wanted a clean algorithm that would allow these two pieces of data to be the only thing I needed to store in state.

To return accurate feedback to the user, the guess evaluation function has to tell the user two things: 1) how many digits are correct and in the correct position, and 2) how many digits are correct and in the incorrect position. Before writing the guess evaluation function, I wrote tests for all 15 possible combinations of output for the function (XXXX, OOOO, X---, XX--, XXX-, O---, OO--, OOO-, X0--, XOO-, XOOO, XXO-, XXOO, XXXO, ----).

Since position is key in the game, I decided to store the code and the guess within two separate arrays. To determine how many digits are correct and in the correct position, the function evaluates equality between each value in the code array against each value in the same position in the guess array. For each pair that is found to be equal, the digitAndPositionCorrect variable is increased by one. In order to prepare the two arrays for the second step of the process, any matching values in the same position are set to `null` in a copy of each array.

The next step is to calculate how many digits are correct, but in the incorrect position. Now that I have a copy of each array with the correctly positioned digits removed, I evaluate the count of each possible value (0-7) in each array and take the minimum of the count of each array for that value. This minimum count is then added to the onlyDigitCorrect variable. By using the minimum, I ensure that for each correct digit that the user has entered, it is only added once to the onlyDigitCorrect variable, even if that digit is duplicated in the code or vice versa.

Eventually more pieces of data were added into state as extensions were implemented. These include the length of the code (determined by user-set game difficulty) and how many hints the user has requested.

### Building of the Mastermind User Interface

The next step of the planning process was drawing out a basic user interface. Given that this project was created for an interview with LinkedIn, the LinkedIn color scheme was used. In addition to aesthetics, the following practices were also prioritized throughout the design and implementation process.

- The interface should be intuitive. (i.e. The user can press on-screen buttons to enter their input or use the keyboard.)
- The interface should be clean and simple. (i.e. The game interface itself is set apart from the description of the rules and the game difficulty level is determined separately from the game interface.)
- The interface should be understandable. (i.e. The rules are clearly defined on the main page and the user can always see how many guesses they have left and how many digits are in the code given the mode they have selected)

Before implementing the guess evaluation function, I created all the components for the game using React. To begin with, the App component just included the components Header and Game.

### Hooking Up the Function to the User Interface and Fetching the Code

Once the user interface was built out, I imported the guess evaluation function into the game component. To begin with, I set the code to be `[0, 1, 2, 3]` to be able to test whether it was rendering correctly to the user interface and whether the feedback was correct with various user inputs.

After I had connected the components and ensured that the user input and feedback was displaying correctly, it was time to fetch the code. This proved to be one of the more challenging parts of making this project. Initially, I had set up the code to fetch in a static variable outside of the component. Unfortunately, API calls do not happen instantaneously, and I found that my component was loading before the random code came back. When the code was fed into the function, it couldn't be compared to the guess because it was `undefined`. After much googling and several hours of learning about Promises, I implemented the code as part of state and set it to fetch in the `ComponentWillMount` method within the game component.

### Refinement of User Interface

Once the game had basic functionality, I observed my friends playing the game to see which parts of the interface they struggled with. Though I had a number of ideas for improvements and extensions, I wanted to get some feedback before prioritizing how to spend my time. From this feedback, I determined that the most important changes to the basic interface were to be able to submit guesses using the 'Enter' key and to have the ability to clear the input in case of a mistake.

## Extensions

Hints: The user can request hints up until the entire code is revealed.

Game Modes: Before the main game page launches, the user must select a game mode: Easy (3 digit code), Medium (4 digit code), Hard (5 digit code)

Loading Animation: the ReactLoading library was imported and implemented to let the user know that the game page is loading rather than seeing a blank screen.

## Technologies Used

HTML, CSS, JavaScript, React

import React from 'react';
import {
  FlexBox,
  Heading,
  OrderedList,
  ListItem,
  FullScreen,
  Appear,
  Slide,
  Deck,
  Grid,
  Box,
  Image,
  Notes,
} from 'spectacle';
import ReactDOM from 'react-dom';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END


const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide
      backgroundImage="url(https://raw.githubusercontent.com/olegakbarov/dump/main/goodartists.jpg)"
      backgroundOpacity={0.5}
    >
    <FlexBox alignItems="center" justifyContent="center">
      <Heading margin="0px" >
        History of Frontend State Management 
        </Heading>
      </FlexBox>
      <Notes>
        Let's set the expectations:
        <br />
        <br />
        Talk is more about Why instead of When. 
        <br />
        <br />
        Very much in the spirit of image on this slide — there would be lots of slides stolen from other talks.
        <br />
        <br />
        Good way to make sure that this Presentation was not entierly a GPT-4 generated text.
        <br />
        <br />
        Also I'd like to emphasize that this is not an original research, but 

      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
        Where to begin?
        </Heading>
      </FlexBox>
      <Notes>
        Let's set the Context. Where shall we start? When shall we start?
        With first website? Maybe first computer? First programming language?
      </Notes>
    </Slide>

    <Slide>
      <Box>
        <Heading margin="0px" fontSize="h1">
        1930s
        </Heading>
        <Grid
        gridTemplateColumns="50% 50%"
        height="100%"
      >
        <Box>
          <Image src="https://raw.githubusercontent.com/olegakbarov/dump/main/Church1-480x480.jpeg" />
        </Box>
        <Box>
          <Heading textAlign="left" margin="0px" fontSize="30px">
          Alonzo Church comes up with lambda calculus, first functional programming  language.
          </Heading>
          <Box padding="80px">

          <Appear>
            <Image src="https://raw.githubusercontent.com/olegakbarov/dump/main/images.png" />
          </Appear>
          </Box>
        </Box>
        </Grid>
      </Box>
      <Notes>
        Notice the use of the word "comes up with". 
        This is because the concept of functional programming was not new. 
        It was just not called that. It was called "mathematics".
        <br />
        <br />
        <br />
        Lambda calculus is build around the concept of lambdas (or anonymous functions).
        <br />
        <br />
        If you have numbers you can enumerate charachters. 
        <br />
        <br />
        Which gives you words. 
        <br />
        <br />
        Which gives you... I don't know... everything?
        <br />
        <br /> 
        Not a lot of computers at this point tho
        <br /> 

      </Notes>
    </Slide>


    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          Why would one care?
        </Heading>
      </FlexBox>
      <Notes>
        It sounds unnecessary theoretical. Why would one care?
        <br />
        <br />
        Hold tight, it will all make sense very soon.
        <br />
        <br />
        Before we go any further, let's draw a distintion between imperative and functional programming languages.
        <br />
        <br />
      </Notes>
    </Slide>


    <Slide>
      <Grid
        gridTemplateColumns="50% 50%"
        height="100%"
      >
        <Box>
          <Heading  fontSize="h2">Imperative language</Heading>
          <OrderedList>
            <Appear>
              <ListItem>set of instructions</ListItem>
            </Appear>
            <Appear>
              <ListItem>involve changing the state of variables </ListItem>
            </Appear>
            <Appear>
              <ListItem>
              loops and conditionals control the flow of execution
              </ListItem>
            </Appear>
          </OrderedList>
        </Box>

        <Box>
          <Heading fontSize="h2">Functional language</Heading>
          <OrderedList>
            <Appear>
              <ListItem>functions are first-class citizens</ListItem>
            </Appear>
            <Appear>
              <ListItem>avoid side-effects</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                immutable data structures
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Examples: Haskell, OCaml, LISP dialects (Scheme, Clojure)
              </ListItem>
            </Appear>
          </OrderedList>
        </Box>
      </Grid>
      <Notes>
      In an imperative programming language, a program is a sequence of instructions that tell the computer what to do and how to do it. These instructions typically involve changing the state of variables or data structures, and the order in which they are executed is important. Imperative programming languages often use control structures like loops and conditionals to control the flow of execution. Examples: Java, Python & many others.
      <br />
      <br />
      <br />
      In contrast, a functional programming language emphasizes the use of functions to solve problems. Programs in functional programming languages are composed of functions that take inputs and produce outputs without changing the state of variables or data structures. Functions are treated as first-class citizens, which means they can be passed as arguments to other functions, returned as values, and stored in variables. Functional programming languages also avoid side effects, which are changes to the state of variables or data structures that are not part of the function's output. Examples: LISP and its dialects (Scheme, Clojure), Haskell, OCaml and many more.

      </Notes>
    </Slide>


    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Image src="https://raw.githubusercontent.com/olegakbarov/dump/main/giphy.gif" />
      </FlexBox>
      <Notes>
        This is where I probably should've started my talk. We now get computers, internet and ... JavaScript.
      </Notes>
    </Slide>


    <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
    >
      <Heading margin="0px" fontSize="h2">
        JavaScript comes along
      </Heading>
      <Grid
        gridTemplateColumns="50% 50%"
        height="100%"
      >
        <FlexBox flexDirection="column" justifyContent="space-around">
          <Image width="100%"  src="https://raw.githubusercontent.com/olegakbarov/dump/main/Screenshot%202023-03-13%20at%203.09.29%20PM.png" />
        </FlexBox>

        <FlexBox flexDirection="column" justifyContent="space-around">
        <OrderedList>
            <Appear>
              <ListItem>Wanted to get Scheme to browser</ListItem>
            </Appear>
            <Appear>
              <ListItem>10 days to implement</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Java in name in order to be friends with Sum Microsystems
              </ListItem>
            </Appear>
          </OrderedList> 
        </FlexBox>
      </Grid>
      <Notes>
      The idea of adding a scripting language to web pages is attributed to Brendan Eich, who created the first version of JavaScript while working at Netscape Communications Corporation in 1995. At that time, web pages were mostly static and could only display text and images, but JavaScript enabled web developers to add interactivity and dynamic behavior to web pages. Since then, JavaScript has become one of the most widely used programming languages in the world and has played a key role in the development of web applications and the modern web.
      </Notes>
    </Slide>

    <Slide>
    <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          90s: not a lot of state to manage
        </Heading>
      </FlexBox>
      <OrderedList>
            <Appear>
              <ListItem>dominant by server-side scripting languages like PHP, ASP, and JSP</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                AJAX allowed for partial page updates without requiring a full page reload
              </ListItem>
            </Appear>
          </OrderedList>  
          <Notes>
          AJAX (Asynchronous JavaScript and XML) in the early 2000s enabled developers to create more responsive and interactive web applications. AJAX allowed for partial page updates without requiring a full page reload, which made web applications feel more like native desktop applications.
          <br />
          <br />
          with that advancement a new challenges were introduced
        <br />
      </Notes>
    </Slide> 

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          Rich Hickey, creator of Clojure
        </Heading>
        <Image width="900px" src="https://raw.githubusercontent.com/olegakbarov/dump/main/rich.png" />
      </FlexBox>
      <Notes>
          2011 talk, a few years before React and Flux
          <br />
          <br />
          as a LISPer and functional programmer, he knew that the state management problem is not new
          <br />
          <br />
          let's treat this slide as prophecy
      </Notes>
    </Slide>

    <Slide>
      <Heading margin="0px" fontSize="h2">
        2000s: Web Apps emerge
      </Heading>
      <Grid
          gridTemplateColumns="50% 50%"
          height="100%"
        >
        <Box>
          <Image width="100%" src="https://raw.githubusercontent.com/olegakbarov/dump/main/mvc-scale.png" />
        </Box>
        <Box>
          <OrderedList>
            <Appear>
              <ListItem>Facebook is probably most complext web app </ListItem>
            </Appear>
            <Appear>
              <ListItem>Attempts to re-use existing patterns</ListItem>
            </Appear>
            <Appear>
              <ListItem>MVC doesn't work for large-scale apps</ListItem>
            </Appear>
          </OrderedList>
        </Box>
        </Grid>
        <Notes>
          First large scale Web App challenges at Facebook were reported around 2014. 
        <br />
        <br />
         Attempt to bring MVC to the web and scale it to the Facebook requirements was not successful. 
         <br />
         <br />
         Here's the illustration of where FB engineers end up with MVC (NEXT SLIDE)
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          MVC
        </Heading>
        <Box>

        <Image width="900px" src="https://raw.githubusercontent.com/olegakbarov/dump/main/mvc-mess.png" />
        </Box>
      </FlexBox>
      <Notes>
        this is the system that is very difficult to reason about
        <br />
        <br />
         in general human brain is relatively bad at working with processes that develop in time 
        <br />
        <br />
        At this moment the problem statement was pretty clear
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          React
        </Heading>
        <Image width="900px" src="https://raw.githubusercontent.com/olegakbarov/dump/main/react.png" />
      </FlexBox>
      <Notes>
        At the same time Facebook releases its own UI framework. 
        <br />
        <br />
        It's called React and it offers a different approach to UI development
        <br />
        <br />
        From developer perspective they wanted to stop thinking in terms of imperative DOM mutations, but rather think about UI as a function of state
        <br />
        <br />
        If you look closely at the slide you notice that Pete Hunt talks about "referentially transparent" functions. Those are pure functions that were descirbed by Church and used in FP.
        <br />
        <br />
        Problem applying this approach directly was that DOM is slow and expensive to manipulate
        <br />
        <br />
        So the Virtual DOM was introduced. It calculated minimal number of changes required and translated them into imperatibve DOM operations.
        <br />
        <br />
        Developer focuses on the data correctness and is free from the DOM manipulation
        <br />
        <br />
        React had no assumptions about how you manage apps state so it was common to use frameworks like Backbone (not for Facebook)
        <br />
        <br />
        But as you may remember MVC pattern never worked for Facebook. So how did the ended up solving the state management problem?
      </Notes>
    </Slide>

    <Slide>
      <Heading margin="0px" fontSize="h2">
        Flux
      </Heading>
      <Grid
          gridTemplateColumns="50% 50%"
          height="100%"
        >
        <Box>
        <Image width="100%" src="https://raw.githubusercontent.com/olegakbarov/dump/main/flux.png" />
        </Box>
        <Box>
        <OrderedList>
        <Appear>
            <ListItem>Unidirectional data flow</ListItem>
          </Appear> 
          <Appear>
            <ListItem>Actions are plain object describing mutation</ListItem>
          </Appear> 
          <Appear>
            <ListItem>Dispatcher listens to the actions and updates the Store</ListItem>
          </Appear> 
          <Appear>
            <ListItem>UI is function of store as per React ideology</ListItem>
          </Appear> 
        </OrderedList>
        </Box>
        </Grid>
      <Notes>
        Unidirecrtion data flow was somewhat a novelty at that time
        <br />
        <br />
        the biggest difference between Flux and MVC is that Flux avoids cascading effects by preventing nested updates
        <br />
        <br />
        Flux guarantees future developers can trace where an action starts and its downstream effects.
        <br />
        <br />
        Actions describe what happened
        <br />
        <br />
        dispatcher is a central place where all the actions are processed
        <br />
        <br />
        Slide is inaccurate FLUX had many stores
        <br />
        <br />
        Store UI as react wants
        <br />
        <br />
        Flux was pattern and not a library so at that point communuty picked up and come up with dozens of Flux implementation
      </Notes>
    </Slide>



    <Slide>
        <Heading margin="0px" fontSize="h2">
          Redux
        </Heading>
        <Grid
          gridTemplateColumns="50% 50%"
          height="100%"
        >
        <Box>
          <Image width="100%" src="https://raw.githubusercontent.com/olegakbarov/dump/main/redux.png" />
        </Box>

        <Box>
        <OrderedList>
            <Appear>
              <ListItem>Reducer Flux</ListItem>
            </Appear>
            <Appear>
              <ListItem>single store, one source of truth</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                state can't be mutated directly, immutability
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                middleware to handle side effects and async actions
              </ListItem>
            </Appear>
          </OrderedList>
        </Box>
        </Grid>
      <Notes>
        Ideas from Functional Programming, Dan admits that: pure functions, immutability
        <br />
        <br />
        Changes are made with pure functions: Reducers are pure functions that take the current state and an action and return a new state.
        <br />
        <br />
        Redux become standart for state management in React for a while.
        <br />
        <br />
        Boilerplate was an issue
        <br />
        <br /> 
        Developers need to define actions, action creators, and reducers for every state change, which can lead to a lot of repetitive code and make the codebase harder to maintain.
        <br />
        <br />
        Redux became the standart for a long time
        <br />
        <br />
      </Notes>
    </Slide>


    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          Current state
        </Heading>
        <OrderedList>
          <Appear>
            <ListItem>Context API gone out of beta for React</ListItem>
          </Appear>
          <Appear>
            <ListItem>Redux got absorbed by React and TypeScript</ListItem>
          </Appear>
          <Appear>
            <ListItem>Zustand and Recoil are iterations over redux pattern with its own trade offs</ListItem>
          </Appear>
          <Appear>
            <ListItem>Not a lot of apps need that complex state management</ListItem>
          </Appear>
          <Appear>
            <ListItem>Vendors such as Vercel push their own approaches such as SWR</ListItem>
          </Appear>
        </OrderedList>
      </FlexBox>
      <Notes>
        Redux was used by web version of Twitter
        <br />
        <br />
        Redux used context api since it was undocumented beta feature of React 
        <br />
        <br />
        Now it is available to everyone, it is more flexible but more chaotic
        <br />
        <br />
        TypeScript adds even more overhead
        <br />
        <br />
        Era of extremely large web apps is over with web 2.0
        <br />
        <br />
        web 3.0 not mature enough to build facebook scale apps
        <br />
        <br />
        vendors have it's own agenda and they push their own solutions
         
      </Notes>
    </Slide>


    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          Takeways
        </Heading>
        <OrderedList>
            <Appear>
              <ListItem>Constraints are good</ListItem>
            </Appear>
            <Appear>
              <ListItem>Build your app around data you have and the changes it encounter</ListItem>
            </Appear>
            <Appear>
              <ListItem>Prefer declarative approach and avoid shared mutable state</ListItem>
            </Appear>
            <Appear>
              <ListItem>Don't hesitate to borrow from people smarter than you</ListItem>
            </Appear>
          </OrderedList>
      </FlexBox>
      <Notes>
        pure functions do not allow side effects
        <br />
        <br />
        immutable data structures not as flexible on first glance: but they have a lot to offer 
        <br />
        <br />
        unidirectional data flow is unobvious solution for state management
        <br />
        <br />
        How to build your apps? Well it depends on your data and the changes it encounters
        <br />
        <br />
        If you need inspiration, there's a Functional Programming for that
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading margin="0px" fontSize="h2">
          Questions 
        </Heading>
      </FlexBox>
      <Notes>
        And with that I'm happy to take your questions
      </Notes>
    </Slide>

  </Deck>
);


    // <Slide>
    //   <CodePane language="jsx">{`
    //     import { createClient, Provider } from 'urql';

    //     const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

    //     const App = () => (
    //       <Provider value={client}>
    //         <Todos />
    //       </Provider>
    //     );
    //     `}</CodePane>
    //   <Box height={20} />
    //   <CodePane language="java" showLineNumbers={false}>{`
    //     public class NoLineNumbers {
    //       public static void main(String[] args) {
    //         System.out.println("Hello");
    //       }
    //     }
    //     `}</CodePane>
    // </Slide>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

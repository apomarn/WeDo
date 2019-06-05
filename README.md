
# ![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559274111/WeDo/logo.png)


Planning a wedding can be difficult. WeDo allows you  to manage your guest list easily. It also gives you ideas to plan your perfect wedding by showing you other couple stories to get you inspired .  Get started by answering some questions before you say "I Do".

Try it out by yourself [wedo.anghypomar.com](wedo.anghypomar.com)

![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559627629/WeDo/Screen_Shot_2019-06-04_at_1.52.21_AM_niqk2t.png)

## Introduction

For this project I wanted to put into work everything I've been learning in class and by my own for the last 2 months from scratching the idea, prototyping, designing, coding and deploying.

So let's start.

## Prototype

I normally use Figma to do this kind of job, I love how easy it's to switch from prototyping to actual designing a real project.

I got used to start thinking before actually writing the code (biggest learning from my second project [wikibook]([https://github.com/apomarn/wiki-book](https://github.com/apomarn/wiki-book))) because in the process I can discard features, discover challenges and difficulties and even future bugs.

After this phase were I was planning to build around nine features I ended up choosing only three of them. 

Questionary, Guest List and Wedding Stories.

![figma prototype](https://i.imgur.com/uYPXaxe.png)


## Design

Things are getting funnier in this part,  so first I needed to find my primary and secondary color using [coolors.co]([https://coolors.co](https://coolors.co/)) and then I used [ant design color generator ](https://ant.design/docs/spec/colors) to a generate a palette.

So having my colors ready it's now time to choose the right font, I use [google fonts](https://fonts.google.com) it has a nice way to display and compare many of them at the same time, and the best of all is that Figma support all of them by default.

Now is time to the scaler type, how my fonts will look like and the scaling factor across the app. I use [type-scale.com](https://type-scale.com/) for this.

Now time to create the building blocks of my app, Figma has a feature called components that behaves almost like React components, so thinking on it from the design phase makes me decide on the name they will have and even how my html is going to be structured.

![enter image description here](https://i.imgur.com/eiMlRe4.png)

## The Code  & Deploy

Now the part were I was focused on.

1. I wanted to start using branches, pull requests and doing a proper git workflow, for that I found [github flow](https://guides.github.com/introduction/flow/) which has a pretty small amount of rules to follow.
2. I decided to use [Heroku](https://heroku.com/) to deploy and use review apps and in that way I could have a dedicated environment to test my changes in the pull request.
3. I chose Firebase as my authentication and database solution, I really wanted to use MongoDB and build the api by my own, but didn't have enough time to do it, and I decided more in the frontend part for this project because I already did focus on the backend while building [wikibook]([https://github.com/apomarn/wiki-book]).
4. I used [React](https://github.com/facebook/react) to build all my components, [React Router](https://github.com/ReactTraining/react-router) to handle routing and [Serve](https://github.com/zeit/serve) as my static server to delivery my single page application, also [Styled Components](https://github.com/styled-components/styled-components) as css pre-processor.
5. I used Heroku pipelines to have multiple environments like staging and production.

### Pull Request

![enter image description here](https://i.imgur.com/eQoAFIz.png)

### Heroku Pipelines

![heroku pipelines](https://i.imgur.com/ub1wz0m.png)

Without further explanation here are the steps is you want to try in your local environment.

`$ git clone https://github.com/apomarn/WeDo.git`

`$ npm install`

`$ npm run dev`

### Features

#### Questions

I used the video tag to show a nice marriage planning video while the couple answer the questions, the video is not shown and not rendered in mobile version.

![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559628166/WeDo/Screen_Shot_2019-06-04_at_2.02.31_AM_fqgifx.png)

### Guest List

I stored the guests data in firebase and used their api to listen when a new one was added in render it with React.

![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559627846/WeDo/Screen_Shot_2019-06-04_at_1.57.13_AM_n9inzw.png)

### Wedding Stories

At first I wanted to build a blog engine to allow the couples to write their stories, but due to the deadline I had to only stories in the internet.

Data was stored in a plain JavaScript file.

![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559628325/WeDo/Screen_Shot_2019-06-04_at_2.05.10_AM_vn7qmt.png)

here are some mobile screens.

![enter image description here](https://i.imgur.com/jb5AKwR.png)

the project has much more screens that you can see by trying it by yourself in [wedo.anghypomar.com](http://wedo.anghypomar.com)

## Technologies:

![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/react.js.png)  ![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/express.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266761/portfolio/node.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559273120/portfolio/firebase.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/cloudinary.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/heroku.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/figma.png)![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/style-component.png) ![alt text](https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/parsel.png)

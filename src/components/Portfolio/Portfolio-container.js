
import React from "react";
import PortfolioCard from "./Portfolio-cards";

function PortfolioContainer() {
  return (
    <React.Fragment>
      <section
        className="section portfolio has-text-centered"
        id="portfolio"
      >
        <h2 className="title is-2 is-spaced">My Portfolio</h2>
        <p className="subtitle">
          A complete list of my repositories can be seen here:
          <a href="https://github.com/srad25" target="_blank" rel="noopener">
            GitHub
          </a>
        </p>
        <div className="columns is-multiline">
          <PortfolioCard
            title="Dogwalker"
            deployed="https://dogwalkerapp.herokuapp.com"
            image="/assets/images/dogWalker.png"
            description="This application provides the user to sign up and log into a personalized account where they can add dates/times to a calendar to schedule a walk for their dog with a dog walker. Users can also send direct messages to the dog walker and other dog owners to plan play dates."
            github="https://github.com/jarretebarnett/dogwalker"
          />
          <PortfolioCard
            title="Book Hunt"
            deployed="https://srad25.github.io/Book-Hunt"
            image="/assets/images/bkhunt.png"
            description="Designed with avid readers in mind, a one stop shop application that provides the user with a number of choices to find the prefect book, with option to buy. Users can also save a book to their wishlist and return to it at a later date. Books can also be deleted from the list."
            github="https://github.com/srad25/Book-Hunt"
          />
          <PortfolioCard
            title="Employee Directory"
            deployed="https://srad25.github.io/EmployeeDirectory"
            image="/assets/images/emp1.png"
            description="This app allows the user to view their company's entire employee directory. The directory can be viewed alphabetically, giving the user quick and easy access to employee information, which also includes a headshot of the employee. It can also filter employees by their name or email address."
            github="https://github.com/srad25/EmployeeDirectory"
          />
          <PortfolioCard
            title="Weather Dashboard"
            deployed="https://srad25.github.io/WeatherDashboard/"
            image="/assets/images/fiveDay.png"
            description="This app allows the user to view the current weather in any named city. The app will also display the next five days forecast so that the user can know the up coming weather in that area and plan accordingly. Previous searches are stored and easily accessed from the search bar."
            github="https://www.github.com/srad25/weatherDashboard"
          />
          <PortfolioCard
            title="Quiz Game"
            deployed="https://srad25.github.io/Quiz-Game"
            image="/assets/images/codeQuizStart.png"
            description="An interactive quiz. Ten seconds is added to time with each correct answer, an incorrect response will get ten seconds subtracted from score. Highscores can be saved at the end of quiz."
            github="https://github.com/srad25/Quiz-Game"
          />
          <PortfolioCard
            title="Budget Tracker"
            deployed="https://budgettrackerrapp.herokuapp.com"
            image="/assets/images/budget0.png"
            description="This app allows the user to add expenses and deposits to their budget with or without a internet connection. User can enter transactions offline and the total will populate when brought back online"
            github="https://github.com/srad25/BugetTracker"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default PortfolioContainer;
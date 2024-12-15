import React from "react"
//import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
//import { NavBarMovil } from "./components/NavBarMovil"




function App() {

  return (
    <main className="px-4 pt-6">

      <section className="relative">
        <Header />
  
        <div className="lg:flex sm:gap-8 ">
          <MainArticle />
          <NewContainer />
        </div>
        <ArticlesContainer />
      </section>


    </main>
  )
}

export default App

import React from 'react'
import "./portfolio.css"
import IMG1 from "../../image/portfolio1.jpg"
import IMG2 from "../../image/portfolio2.jpg"
import IMG3 from "../../image/portfolio3.jpg"
import IMG4 from "../../image/portfolio4.jpg"
import IMG5 from "../../image/portfolio5.png"
import IMG6 from "../../image/portfolio6.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "Hello World",
    github: "https://github.com",
    demo: "https://facebook.com"
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
                  <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
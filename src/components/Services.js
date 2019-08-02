import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel commodo sem. Curabitur quis nisi lacinia, pretium mauris et, condimentum turpis. Donec lectus nunc"
        },
        {
          icon: <FaHiking />,
          title: "Hiking Trails",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel commodo sem. Curabitur quis nisi lacinia, pretium mauris et, condimentum turpis. Donec lectus nunc"
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttles",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel commodo sem. Curabitur quis nisi lacinia, pretium mauris et, condimentum turpis. Donec lectus nunc"
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel commodo sem. Curabitur quis nisi lacinia, pretium mauris et, condimentum turpis. Donec lectus nunc"
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, i) => {
            return (
              <article key={i} className="services">
                <span>{item.icon} </span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

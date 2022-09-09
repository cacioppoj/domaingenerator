/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { javascript } from "webpack";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "nuestro"];
  let adj = ["great", "big", "super", "bello"];
  let noun = ["puedes", "malcom", "paco"];
  let domain = ["com", "net", "us", "co"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          if (noun[k].endsWith(domain[l])) {
            console.log(
              pronoun[i] +
                adj[j] +
                noun[k].slice(0, -1 * domain[l].length) +
                "." +
                domain[l]
            );
          } else {
            console.log(pronoun[i] + adj[j] + noun[k] + ".com");
          }
        }
      }
    }
  }
};

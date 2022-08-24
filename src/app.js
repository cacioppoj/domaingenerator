/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var domain = [".com", ".net", ".us", ".io"];
window.onload = function() {
  //write your code here
  const random = number => Math.floor(Math.random() * number);

  const generateDomain = (arr1, arr2, arr3, arr4) => {
    return (
      arr1[random(arr1.length)] +
      arr2[random(arr2.length)] +
      arr3[random(arr3.length)] +
      arr4[random(arr4.length)]
    );
  };
  console.log(generateDomain(pronoun, adj, noun, domain));
};

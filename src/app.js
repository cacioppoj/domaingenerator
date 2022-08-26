/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our", "nuestro"];
var adj = ["great", "big", "super", "bello"];
var noun = ["jogger", "racoon", "puedes", "malcom", "paco"];
var domain = ["com", "net", "us", "io", "es", "co"];
const random = number => Math.floor(Math.random() * number);

const hack = (sNouns, arrDomain) => {
  let result = "";
  let sFinalCharacter = "";
  for (let index = 0; index < arrDomain.length; index++) {
    let element = arrDomain[index];
    if (sNouns.length > element.length) {
      sFinalCharacter = sNouns.slice(-1 * element.length);
      if (sFinalCharacter === element) {
        result = sNouns.slice(0, -1 * element.length) + "." + element;
        return result;
      }
    }
  }
  return sNouns + ".com";
};

const hackRandom = (sNouns, sDomain) => {
  let result = sNouns + "." + sDomain;
  let sFinalCharacter = "";
  if (sNouns.length > sDomain.length) {
    sFinalCharacter = sNouns.slice(-1 * sDomain.length);
    if (sFinalCharacter === sDomain) {
      result = sNouns.slice(0, -1 * sDomain.length) + "." + sDomain;
    }
  }
  return result;
};
window.onload = function() {
  //write your code here

  const generateDomain = (arr1, arr2, arr3, arrDomain) => {
    return (
      arr1[random(arr1.length)] +
      arr2[random(arr2.length)] +
      hack(arr3[random(arr3.length)], arrDomain)
    );
  };
  const generateRandomDomain = (arr1, arr2, arr3, arrDomain) => {
    return (
      arr1[random(arr1.length)] +
      arr2[random(arr2.length)] +
      hackRandom(arr3[random(arr3.length)], arrDomain[random(arrDomain.length)])
    );
  };
  console.log(generateDomain(pronoun, adj, noun, domain));
  console.log(generateRandomDomain(pronoun, adj, noun, domain));
};

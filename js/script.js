// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-04-JS/sw.js", {
    scope: "/ICS20-Unit-6-04-JS/",
  });
}

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search);

  // input
  const radius = params.get("r");
  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const dimensions = "<ul>\n<li>Radius = " + radius + "</li>\n</ul>";
  // output
  document.getElementById("dimensions").innerHTML = dimensions;
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³";
};

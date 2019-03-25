# Problem
`React Hooks`, unlike `Class Components`, provide <b>low-level</b> building blocks for optimizing and composing applications with minimal boilerplate.

Without <b>in-depth knowledge</b>, performance problems can arise and <b>code complexity</b> can increase due to <b>subtle bugs</b> and <b>leaky abstractions</b>.


# Case Study: Implementing Interval

This <b>12 part case study</b> is trying to demonstrate common problems using `React Hooks` and ways to fix them.

The goal is to implement counter that starts from `0` and increases every `500ms`. Three control buttons should be provided: `start`, `stop` and `clear`.

# Getting Started

`> npm install`

`> npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Gotchas

Application is intended to crash in some examples due to memory leaks, infinite recursion, starvation or other bugs. Purpose of this demo is to show common pitfalls with `React Hooks` and how to avoid them.

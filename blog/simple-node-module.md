# Node & NPM Basics via a Simple Module
#### Jessica Lord
#### 2014-09-06
#### Node.js, NPM, Development

The other day I wrote a simple node module and thought it may be useful and digestible enough to look into and learn about some Node and NPM Basics. If you have some questions about this module, you can [open an issue](http://www.github.com/jlord/cli-boilerplate/issues) on the repo jlord/cli-boilerplate.

## The Need

When I start a new website I usually go and dig up some boilerplate HTML. I wanted to make "dig up" a little less work and since the boilerplate isn't but a couple dozen lines or so I thought it would be nice if I could just type a command and have it copied to my clipboard so that I could paste it into a new file. This is how `cli-boilerplate` was born.

## Initialize

[npm](http://www.npmjs.org) (nice people matter) is Node.js's package manager. It's what you use if you want publish your project so that others can easily use it. It's a registry of all the published modules and their versions, you can see the latest activity here [npmjs.org](https://www.npmjs.org) (at time of writing, 93,291 packages!). You can write projects in node and run it on your computer without NPM, but if you intend to publish it, as we do, you'll use NPM.

### Create a new folder project and npm init

Because the project needs somewhere to live. Now in your terminal, navigate to that folder and run `npm init`. This kicks off a process that gets your `package.json` file started for you. This file is like the title page, glossary, index and copyright page of a book rolled into one. It's in the JSON format which you can read more about here, but you can easily get a sense of by checking out the `package.json` in existing files.

```bash
# make a new folder
$ mkdir cli-boilerplate
# go inside of folder
$ cd cli-boilerplate
# initialize!
$ npm init
```

You can fill out the information in terminal or hit enter and fill it out later in your text editor. When it's done you'll have a `package.json` file in your folder.

#### Beyond the basics

Because I want to create a module that runs from the commandline, I need to add a section in my `package.json`

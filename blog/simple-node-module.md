# Node & npm Basics via a Simple Module
#### Jessica Lord
#### 2014-09-06
#### Node.js, NPM, Development

The other day I wrote a simple node module and thought it may be useful and digestible enough to look into and learn about some Node and NPM Basics. If you have some questions about this module, you can [open an issue](http://www.github.com/jlord/cli-boilerplate/issues) on the repo.


## The Need

When I start a new website I usually go and dig up some boilerplate HTML. I wanted to make "dig up" a little less work and since the boilerplate isn't but a couple dozen lines or so I thought it would be nice if I could just type a command and have it copied to my clipboard so that I could paste it into a new file. This is how `cli-boilerplate` was born.

## Initialize

[npm](http://www.npmjs.org) (nice people matter) is Node.js's package manager. It's what you use if you want publish your project so that others can easily use it. It's a registry of all the published modules and their versions, you can see the latest activity here [npmjs.org](https://www.npmjs.org) (at time of writing, 93,291 packages!). You can write projects in node and run it on your computer without npm, but if you intend to publish it, as we do, you'll use npm.

### Create a new folder project and npm init

Because the project needs somewhere to live. Now in your terminal, navigate to that folder and run `npm init`. This kicks off a process that gets your `package.json` file started for you. This file is like the title page, glossary, index and copyright page of a book rolled into one. It's in the JSON format which you can read more about [here](), but you can easily get a sense of by checking out the `package.json` in existing projects (see here, here and here).

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

Because I want to create a module that runs from the command line, I need to add a section in my `package.json` called `bin` which will allow me to define what file gets run when _x_ word (command) is typed into terminal. I chose `boilme`. Haaa. I also added where the repository and issues are on GitHub as well as keywords for when people search npmjs.org.

```javascript
{
  "name": "cli-boilerplate",
  "version": "1.0.1",
  "description": "add html boilerplate to you clipboard for pasting wins",
  "keywords": ["HTML5", "boilerplate", "cli", "command line"],
  "repository": {
    "type": "git",
    "url": "http://github.com/jlord/cli-boilerplate.git"
  },
  "bugs": {
    "url": "http://github.com/jlord/cli-boilerplate/issues"
  },
  "main": "index.js",
  "bin": {
    "boilme": "./index.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jessica Lord",
  "license": "BSD"
}
```

## Create the boilerplate

We want to create the boilerplate HTML that we'll have copied to the clipboard for us when this module is used. This is easy as creating a new HTML file and filling it with the boilerplate:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Title</title>
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="assets/style.css">
  </head>
  <body>
  </body>
</html>
```

## Write the code

Now we'll create the actual code in a file named `index.js`, which is a common name for your main file. Below is the full code, it's pretty short! A lot of node modules are simple and do just one thing, like this one. We'll go through each part.

```javascript
#!/usr/bin/env node

var fs   = require('fs')
var path = require('path')
var exec = require('child_process').exec

fs.readFile(path.join(__dirname, 'boilerplate.html'), function read(err, data) {
  if (err) return console.log(err)
  var command = "echo '" + data.toString() + "' | pbcopy"
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
})
```

### The Environment

#!/usr/bin/env node Remember in `package.json` we set "./index.js" as the file we wanted to run after someone types `boilme`? This is the finishing touch, so that your computer executes immediately `#!/` (shebang) the code in the file using node.

### Require other modules

Node.js comes with a [core set of modules](http://nodejs.org/api/) that help you do lots of things. If there is something that is outside of the scope of core, that's when you'll use NPM to find something created by someone else. This project, being simple, just uses core modules. In this section we are requiring the core modules we want and giving them a name:

```javascript
var fs   = require('fs')
var path = require('path')
var exec = require('child_process').exec
```

When you require a module, all of the functions inside of it become accessible through the name you set for it. For instance, I can use the things that come with `fs` when I use the variable `fs` in my script. If you come to my house with cake, that cake is in my house so I can get to it, cut it and eat it...

**fs** is a module for the file system this lets us read or write files (and more!) on a computer

**path** is a utility for working with file paths

**child_process** allows us to run another process, outside of the one we're already in. Using the `exec` portion of it allows us to specifically run a shell (command line) process.

### Action!

Next we'll actually use this modules to:

1. Read the contents of the boilerplate HTML file.
2. Create a _string_ of the command we'd type in terminal if we were manually giving it text to send to the clipboard.
3. Use `exec` to create a shell process running independently and give it our command.

Let's break it down some more.

```javascript
fs.readFile(path.join(__dirname, 'boilerplate.html'), function read(err, data) {
  if (err) return console.log(err)
  var command = "echo '" + data.toString() + "' | pbcopy"
  exec(command, function clipboarded(err, stdout, stdrr) {
    if (err) return console.log(err)
    console.log("Copied!")
  })
})
```

#### Read file

We use `fs` to read the file, it wants to know where the file is and what to do after it has read it, the callback. The callback is a function that is run after the main task (reading the file contents) has completed. It will automatically get passed in first an error, if there was one, and the the contents of the file, but buffered, which means numbers (we'll change that later). Here's what the basic format looks like: `fs.readFile('filelocation', callback)`.

The `boilerplate.html` will be located wherever this module exists on the users computer, so we'll use `__dirname` to get the location of the module on the computer and `path.join` to add `boilerplate.html` to that. That gives us the full address of the file on the computer.

Then we pass in our callback, a function we create called 'read' because it's going to get run when the file has finished being read. Next is a common pattern in Node -- we check to see if there were any errors reading the file. If there were, we want give up because there's no use doing the rest of the work. So if there is an error, we return, but we print with `console.log()`out what the error was.

But, if there were no errors, we'll move right along!

#### Run copy command

We create a string to contain what the full command would be in terminal if we were doing this manually. In Mac terminals you can type `echo "Hello World!"` and it will print out the string you gave it. You can feed that text directly into another function using a "pipe" which is this "|" character. We want to feed it into the copy command which is `pbcopy` on Macs. So typing `echo "Hello World!" | pbcopy` will put "Hello World" in our clipboard and and the next time we paste, we'll get "Hello World".

Since `fs.readFile` returns a buffer of numbers, we'll use the JavaScript method `.toString()` to turn it into the letters and spaces we recognize.

Using `exec` we spawn a new independent shell process to which we can give our shell command. It also takes in a callback, a function for what to do after it's run that command. We want it to quit and print the error if there was an error, but if there was no error, print "Copied!".

## Try it out and Publish

Now that the file is done, we can test it by running it on our computer. If we're in the `cli-clipboard` directory we can type `npm link` so that NPM will use this version we've made as the global module.

```bash
$ cd cli-clipboard
$ npm link
# it will print text about the linkage
$ boilme
# it should work!
```

Next publish what you've done to your NPM account (if you don't have one, [set one up]()):

```bash
$ npm publish
```

## Tada

That's the whole thing! We have a `package.json` so that we can register our module with NPM and others can use it, we have our `boilerplate.html` file with our dream boilerplate, and we have the itty bitty `index.js` script to make what we want to happen, happen.

This post is way longer than I thought it would be and hopefully that's not too distracting. I tried to save space and didn't mention it, but you should also being using Git when you're building something and checking-in often to save your work and push it to GitHub.


### Other files

The project also has a `README.md` and `LICENSE.md` file. They're not required to make a module, but they're really important files to have in a project. The former tells people how to use your project and the later shows the license the project is under. Some places can't use un-licensed projects, so it's important to add one!

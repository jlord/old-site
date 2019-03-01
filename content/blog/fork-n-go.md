# Fork-n-go
#### Jessica Lord
#### 2013-08-11
#### github, pages, open source, sheetsee.js

![fork-n-go](http://jlord.s3.amazonaws.com/wp-content/uploads/forkngoheader.png)

I began [Sheetsee](http://jlord.github.io/sheetsee.js) last year as an effort to make wider use of existing, free and easy to use web technologies. I'm always hacking on it and always trying to make it easier to use.

![ss diagram](http://jlord.s3.amazonaws.com/wp-content/uploads/ss-diagram.png)

I think that using a Google Spreadsheet as a database can quickly and easily solve a lot of the initial barriers to getting-going that prevent even savy developers from starting even a simple website if it requires a database. More so I think that using Google Spreadsheet as a database can bring simple and easy control to many people.

Because you can easily pick contributors, viewers; share raw or connect to a Google Form - collaborating on information can become really, really easy. When connected to a templated website, the information becomes more meaningful.

Currently there is [sheetsee-cache](http://www.github.com/jlord/sheetsee-cache), a node.js caching version, [Sheetsee](http://jlord.github.io/sheetsee.js), the basic client-side version which is much more accessible. Recently I've started getting excited about an iteration even more approachable, making use of the free and easy hosting through [GitHub Pages](http://pages.github.com).

**All it takes to get a website going for a repository on GitHub is a branch named gh-pages containing web files. You also don&#8217;t need a master branch, you can have a repo with just one branch named gh-pages. Here is what I think is really cool, if you fork a project with just a gh-pages branch, you&#8217;re only a commit away from having a live version yourself. If this repo being forked is using sheetsee.js then everyone is a fork, commit and spreadsheet away from having a live website connected to an easy (a familiar spreadsheet UI and no 'publish' flow because Google autosaves) to use database that they manage (control permissions, review revision history).**

### Hack Spots

![hack-spots](http://jlord.s3.amazonaws.com/wp-content/uploads/hack-spots-ss.png)

For example, I made [this website](http://jlord.github.io/hack-spots) to collect hack spots all over the world from friends and friends of friends (the spreadsheet is wide open, so you can add some, too!). It's using sheetsee to power the table, map and other elements of the page. Its source is in [this repo](http://www.github.com/jlord/hack-spots), with just a gh-pages branch. To create an instance of this site for yourself all you need to do:

*   Create a Google spreadsheet with the same headers (just copy and paste header row from the original).
*   Fork the original source.
*   Edit the HTML file directly on GitHub.com to replace the original spreadsheet&#8217;s unique key with your spreadsheet&#8217;s key (found in your spreadsheet&#8217;s URL).
*   Commit your change.

Now you have the same site connected to a spreadsheet that you manage - it's live and can be found at *yourGitHubName.github.io/theReposName*.

![fork and commit](http://jlord.s3.amazonaws.com/wp-content/uploads/forkcommit1.png) 

### Potential

I think there could be many potential uses for web developers and designers to use this for small projects that catch their fancy, but I'm really interested in this as a way to make creating a live website with collaborative data available to people who think setting up a website is far beyond their grasp (or not free). All it takes is a designer/developer to create one working version for a use case to enable many to easily replicate it. Could this help civic organizers? Cities? Neighborhood groups?

![tool lending](http://jlord.s3.amazonaws.com/wp-content/uploads/lending-ss.png)

So I'm wondering, what are the possible use cases? For instance, I'm currently working on a site for [managing lending tools](http://www.github.com/jlord/sheetsee-tool-lending) in a group of friends or neighborhood. This information can be easily stored in a spreadsheet but made much more useable through a website. Any group could use the steps mentioned above and get this going for themselves in minutes. No installation and after one person forks the site, all other collaborators only need interact with the spreadsheet.

*Edit:* Also! There are lots of  automation into Google spreadsheets possibilities through [ifttt.com](https://ifttt.com/) (which I use for the Pocket reads and Instagrams on the [front](http://jlord.dev) of my site).

Hit me up on [Twitter](http://www.twitter.com/jllord), [email](mailto:to.jlord@gmail.com)</a> or on [GitHub](http://www.github.com/jlord) if you've got thoughts or ideas for this!

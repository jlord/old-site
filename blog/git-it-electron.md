# Git-it Electron
#### Jessica Lord
#### 2016-04-19
#### Git-it, Development

It's a great new Git-it day! Today I retire the original Git-it and (finally) release the new Git-it, a desktop app built with [Electron](), and make it the one I maintain henceforth.

It's hard to believe it's been more than two years!  A lot about Git-it is actually staying the same. The challenges and the [page of Git-it completers](http://jlord.us)—that's all still the same. Over 8,000 have completed Git-it!

![completers](https://cloud.githubusercontent.com/assets/1305617/14665471/5684b864-0688-11e6-9dcb-ff4dfad25300.png)
_People who have completed Git-it_

The [original Git-it](http://github.com/jlord/git-it), which runs in terminal and is built on the [workshopper](http://github.com/rvagg/workshopper) paired with a web guide, will stay up for posterity. I've turned off Issues (relevant ones have been ported over to the new repository) and updated the `readme` to point to the new app. I still link to the original `readme` there because if you're still interested, please check it out and use it—still works.

![platforms](https://cloud.githubusercontent.com/assets/1305617/14665194/0c398390-0686-11e6-900a-36181bccd29f.png)
_Screenshots from Linux, Mac and Windows_

But the new one is great! This new Git-it is a desktop app that works on Mac, Windows and Linux because it's now built on [Electron](http://electron.atom.io). The web guide has essentially become the app—though it's been refreshed and polished—with the verifying built in.

![verified](https://cloud.githubusercontent.com/assets/1305617/14665714/fe00e30a-0689-11e6-8fb9-6c7378025aef.png)
_A passing challenge_

## Building it on Electron

Building this on Electron was a great. The app was already a set of Node.js files and web files, which exactly what Electron apps are comprised of. I started by just dumping them all into a [barebones Electron app](https://github.com/electron/electron-quick-start) and built it up from there. Since the bulk of copy and verifying scripts were already there, most of the work was spent wiring up the verifying with all the new UI comonents (what things should happen after verified? After passing? After not passing? If the internet or request is slow? If they are partially done with challenges?) and tweaking the UI components.

![welcome screen](https://cloud.githubusercontent.com/assets/1305617/14665757/458cd3d2-068a-11e6-81c5-b02a25dc86d1.png)
_Welcome screen_

## So Much More

There are dozens of things I still want to add or improve in this project. If I had to rattle off a few (the scopes vary wildly):

- Take this and make a generalized tutorial-making app.
- Make it a faster loading single page app.
- Clean up all my horrible code.
- Update the language views. They still work but they have the old styles.
- Make it easier to add languages.
- Tweak the CSS so that it feels more like a desktop app and less like a website.

![app details](https://cloud.githubusercontent.com/assets/1305617/14666822/87857432-0690-11e6-9294-40a6f2b50f66.png)
_App details_

## Labor of Love

I've worked on this in spurts. I've come close to burning out on open source and have tried to give myself many more evenings to do anything else. But I really believe in Git-it. I think there still aren't a lot of great tools for learning Git and GitHub. I still believe in the philosophy behind Git-it, to teach by having you do (rather than read or have it done for you) and by using the real tools (rather than emulating them). So it's been slow and it's not as polished and pristine as I'd like but I am still quite proud of it. Thank you for everyone who has used it or contributed! <3

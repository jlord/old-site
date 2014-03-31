# Dat
#### By Jessica Lord
#### 2013-03-07
#### web dev, open data, science, gov

![dat diagram](http://jlord.s3.amazonaws.com/dat-diagram.png)

_Disclaimer: I know [@maxogden](http://twitter.com/maxogden) very well, but that doesn&#8217;t mean I like everything that he does. But I do like [Dat](http://www.github.com/maxogden/dat)._

It's really exciting to see all the discussion that's started based on one [GitHub readme](https://github.com/maxogden/dat#dat). The more perspectives, the better Dat will be. In the back and forth I've noticed a few misunderstandings about Dat and as it often goes for me, I felt the urge to diagram.

The diagram above illustrates that Dat will be an ecosystem of modules that can be tacked on and synced with different datasets; importantly, this includes very big datasets. Modules and combination of modules can be shared. These modules will use a common API but can be written in any language and hosted anywhere. The ecosystem exists for the benefit of data consumers and lives outside the realm of data producers.

### Dat and Government

Dat is being built to solve a problem that exists today without a good solution: collaborating on really large datasets and sharing data transformations. While Dat can be used by anyone and government certainly fits the *anyone* bucket, it isn&#8217;t *a new tool for government*. It is a **new tool for those who work everyday with data**, government or other.

Because Dat will be a platform that works with **any** type of tabular data, it prefers no one type, it is completely **independent of the government data standards and liberation efforts** that are ongoing. And yes, this effort is a cultural effort. I [know this to be very true](http://jlord.us/a-government-more-like-the-people/) as I've been involved with government all of my career from the City of Boston to Code for America ([apply now](http://www.codeforamerica.org/apply)!) and am still active in this important cultural shift.

Dat will exist outside of and in parallel to whatever comes of this effort and therefore will work no matter what standards emerge from the effort; that's awesome!

### Build Dat

Because nothing like Dat exists today, I absolutely believe someone should give something like Dat a go. I believe we should always try to make things -- because things make other, better things possible. E.O Wilison says it much more eloquently:

> The reason is that the adoption of any one innovation made adoption of certain others possible, which then, if useful, were more likely to spread. Bands and communities of bands with better combinations of cultural innovations became more productive and better equipped for competition and war. _Wilson, Edward O. (2012-04-02). The Social Conquest of Earth (Kindle Locations 1496-1498). Norton. Kindle Edition_

### Git

Remember, Git wasn't the first version control and most of us wouldn't know it like we do today if weren't that years after it was built someone built an interface on top of it.

While Git works for many of us, it doesn't work for everyone. And those that it doesn't work for are doing awesome work in the civic, science or legal space. They have huge, huge datasets that move slow on Git. They have realtime data constantly updating and yielding too many commits for Git to handle. They have no good way to share this data or the transformation algorithms they used. This transformation algorithm aspect is really awesome because it also helps the majority of us who work with small or medium sized datasets that are routinely published in the same file and text formats that require frequent transforming. With Dat you can create a transformation module in your favorite language that can be hooked up to your data sync so that you don't have to constantly re-transform -- and you can share that modules with others. It's simply a script hosted somewhere. There is a [place for hosting code](https://github.com/blog/1504-jessica-lord-is-a-githubber) that I love.

### Open + Community Built

I'm excited that Dat will not only be built in the open but embody its own ideals and be structured so that contributing is easy. Similar to [NPM](http://www.npmjs.org), the package manager for the [Node.js](http://www.nodejs.org) community, Dat will be made up of small modules related through a common API. The community can submit modules to transform data or submit pull requests to the API. There are already [pull requests](https://github.com/maxogden/dat/pulls?direction=desc&page=1&sort=created&state=closed) and [issues](https://github.com/maxogden/dat/issues) (and forks?!) on the readme.

### <3

Dat doesn't change how groups are publishing data -- it changes how people interact with it and share it with others.  I can't wait to see what comes from all the brains on this!
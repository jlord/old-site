function buildInsta(data) {
  var compiledTemplate = Handlebars.templates['instagram']
  var html = compiledTemplate({"rows": getLast(data,4)}, {});
  document.getElementById('instagram').innerHTML = html
}

function buildTweet(data) {
  var lastTweet = data[data.length - 1]
  var date = lastTweet.date
  var parsedTweet = {
    'tweet': findLinks(lastTweet),
    'date': date }
  var template = Handlebars.templates['twitter']
  var html = template({"rows": parsedTweet}, {});
  document.getElementById('tweet').innerHTML = html
}

function buildQuote(data) {
  var template = Handlebars.templates['quote']
  var html = template({"rows": data.reverse()[0]}, {});
  document.getElementById('quote').innerHTML = html
}

function buildPocket(data) {
  var template = Handlebars.templates['pocket']
  var html = template({"rows": getLast(data,  4)}, {});
  document.getElementById('pocket').innerHTML = html
}

function getLast(array, howMany) {
  start = array.length
  cut = start - howMany
  array = array.splice(cut)
  return array.reverse()
}

// parse tweets
// move to sep. file

function findLinks(tweet) {
  if (!tweet.tweet) return
  var linkPattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

    if (!tweet.tweet.match(linkPattern)) {
      return tweetMentions(tweet.tweet)
    } else {
      var links = tweet.tweet.match(linkPattern)
      var linkLinks = linkLink(links)
      var newTweet = injectLinks(tweet.tweet, links, linkLinks)
      return tweetMentions(newTweet)
    }
}

function tweetMentions(tweet, date) {
  if (!tweet) return
  var mentionPattern = /\B@[a-z0-9_-]+/gi

  if (tweet.match(mentionPattern)) {
    var mentions = tweet.match(mentionPattern)
    var linkMentions = linkMention(mentions)
    var newTweet = injectLinks(tweet, mentions, linkMentions)
    return newTweet
  } else { return tweet }
}

function linkMention(mentions) {
  if (!mentions) return
  var linkMentions = []
  mentions.forEach(function(mention){
    var wrap = "<a href='http://www.twitter.com/" + mention + "' target='_blank'>" + mention + "</a>"
    linkMentions.push(wrap)
  })
  return linkMentions
}

function linkLink(links) {
  if (!links) return
  var linkLinks = []
  links.forEach(function(link) {
    link = '<a href="' + link + '" target="_blank">' + link + '</a>'
    linkLinks.push(link)
  })
  return linkLinks
}

function injectLinks(tweet, mentions, linkMentions) {
  for (var i = 0; i <= mentions.length; i++) {
    tweet = tweet.replace(mentions[i], linkMentions[i])
    if (i === mentions.length) return tweet
  }
}

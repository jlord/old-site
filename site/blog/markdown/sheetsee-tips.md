# Sheetsee.js Tips
#### Jessica Lord
#### 2013-09-15
#### web dev, open source, sheetsee.js

![google maps](http://jlord.s3.amazonaws.com/wp-content/uploads/querystring.png)

There are lots of ways you can take data from you Google Spreadsheet and use it in a website in cool ways. I&#8217;m going to do a few posts on such things. Neat!

If your spreadsheet contains address information, using templates ([Sheetsee.js](http://jlord.github.io/sheetsee.js) uses a form of [Mustache](https://github.com/janl/mustache.js)), you can embed those elements into a Google Maps URL query string (this is the same URL that is generated when you type in an address into the search bar yourself) and create links/buttons that will open locations up directly in Google Maps on desktops and phones. Similarly you can put them in Yelp queries, too.

The basic elements are: *a spreadsheet with address info + HTML template to create the query string*.

### Par Exemple

The Sheetsee [Hack-Spots](http://jlord.github.io/hack-spots/) is an does such a thing. Here is the [spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0Ao5u1U6KYND7dFVkcnJRNUtHWUNKamxoRGg4ZzNiT3c#gid=0), with address information:

![spreadsheet](http://jlord.s3.amazonaws.com/wp-content/uploads/Screen-Shot-2013-09-15-at-6.49.19-PM.png)

In the HTML template for the table on the [Hack-Spots page](http://jlord.github.io/hack-spots/), the button's links look like this:

```HTML
<a class="button" href="https://maps.google.com/maps?q={{address}},{{city}},{{state}}" target="_blank">View in Google Maps</a>
<a class="button" href="http://www.yelp.com/search?find_desc={{name}}&find_loc={{city}},{{state}}" target="_blank">Find on Yelp</a>
```

[Here](https://github.com/jlord/hack-spots/blob/gh-pages/index.html#L62) is the exact line of code on GitHub.

We're inserting the **address**, **city**, and **state** details from the spreadsheet into the structure of a query string for Google maps and Yelp. You can figure out the query string of a service by just using it (type in an address in Google Maps) and looking at the resulting URL.

With a some CSS and such, the resulting website has a table with the hack spots and a button for viewing in Google Maps or Yelp:

![table](http://jlord.s3.amazonaws.com/wp-content/uploads/Screen-Shot-2013-09-15-at-6.43.54-PM.png)


When the page builds, it creates the correct link for each row. When someone clicks on the buttons it takes them directly to the Google Map search result for that address. BAM!
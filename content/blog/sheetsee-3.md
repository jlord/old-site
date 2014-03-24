# Sheetsee.js v3.0
#### By Jessica Lord 
#### 2014-28-02
#### Open Source, Sheetsee.js

![penny](http://jlord.s3.amazonaws.com/wp-content/uploads/pennyzoom.png)

I've just updated [Sheetsee.js](http://www.github.com/jlord/sheetsee.js) with new features and all new docs. I've been waiting to ship this, it feels like, for far too long. I&#8217;m hoping now Sheetsee is at a solid enough place that I can focus spare time on making more [fork-n-go](http://www.jlord.us/fork-n-go) examples.

I'll get straight to the most exciting point: the new [sample data](https://docs.google.com/spreadsheet/ccc?key=0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc&amp;usp=drive_web&amp;pli=1#gid=0) for the demos is of my [flattened penny collection](http://www.flickr.com/photos/jessllord/sets/72157640471928365/). Below are the other things.

### New Features
Yay!

#### Tables: Pagination, Multi Table Sorting and Filtering

Tables can now be paginated so that you don&#8217;t have to display your entire spreadsheet of data in one go. Unless you want to.

Tables now supports having multiple tables with sorting and filtering. So long as you keep your table IDs straight, you&#8217;re golden.</p>
See: [table demo](http://jlord.github.io/sheetsee.js/demos/demo-table.html)

#### Maps: Polygons and Lines

Maps now support polygons and lines. So long as you have the correct coordinate structure in your cells, Sheetsee will add them to the geoJSON it creates for your maps. More details for coordinates of lines and polygons in geoJSON are [here](http://leafletjs.com/examples/geojson.html), but briefly:

A linestring:
```
[-122.41722106933594, 37.7663045891584], [-122.40477561950684, 37.77695634643178]
```
A polygon:
```
[-122.41790771484375, 37.740381166384914], [-122.41790771484375, 37.74520008134973], [-122.40966796874999, 37.74520008134973],[-122.40966796874999, 37.740381166384914], [-122.41790771484375, 37.740381166384914]
```
A Multipolygon:
```
[[-122.431640625, 37.79106586542567], [-122.431640625, 37.797441398913286], [-122.42666244506835, 37.797441398913286],[-122.42666244506835, 37.79106586542567], [-122.431640625, 37.79106586542567]],
[[-122.43352890014648, 37.78197638783258], [-122.43352890014648, 37.789031004883654], [-122.42443084716797, 37.789031004883654], [-122.42443084716797, 37.78197638783258], [-122.43352890014648, 37.78197638783258]]
```
See: [map demo](http://jlord.github.io/sheetsee.js/demos/demo-map.html).

### Documentation

I redid the documentation and website for Sheetsee. Instead of one _gigantic_ readme file/website, all of the different elements are given their own file/page. Now you can find docs, demos, tips and such all filed away nicely here in the [repository](http://www.github.com/jlord/sheetsee.js) and on the [website](http://jlord.github.io/sheetsee.js).

### Modules

The other big thing that has happened to Sheetsee is that I've taken each component (core, maps, tables and charts) and made them into their own Node.js module. This makes for smaller, more manageable code files and it makes it so that users can build their own version of Sheetsee with just the elements they want to use. For instance, if you're only making maps, just build a Sheetsee with the map component.

All builds come with the `sheetsee-core` module which contains all of the data organizing functions.

The module `sheetsee` is a command line module that builds your custom sheetsee for you.

If you're not interested in Node modules or building anything, that's ok, too. I'll always keep a full build (with all the components) here in [the sheetsee.js repository](https://github.com/jlord/sheetsee.js/tree/master/js) (which from here on out exists to be the consolidated documentation and source of a full build).

If you need to file an issue for a bug or feature, try and file it on the repository with the component it relates to (they each have their own repository now):
- [sheetsee-maps](http://www.github.com/jlord/sheetsee-maps)
- [sheetsee-tables](http://www.github.com/jlord/sheetsee-tables)
- [sheetsee-charts](http://www.github.com/jlord/sheetsee-charts)
- [sheetsee-core](http://www.github.com/jlord/sheetsee-core)
- [sheetsee](http://www.github.com/jlord/sheetsee)

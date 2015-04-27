# KML from Google Maps
#### By Jessica Lord
#### 2015-04-26
#### maps, web dev

I wanted to make a map of a [little trek](https://jlord.exposure.co/rivendell-kaitoke) I did to Rivendell in New Zealand (NBD!). Here is what I learned about getting map data out of Google Maps (KML) to create a [Mapbox](http://www.mapbox.com) map.

<iframe width='100%' height='300px' frameBorder='0' src='https://a.tiles.mapbox.com/v4/jllord.m08a6002/attribution,zoompan,geocoder,share.html?access_token=pk.eyJ1Ijoiamxsb3JkIiwiYSI6IkVwNUd4eWsifQ.dxpWPAYZle0eUvwXWGi8Cw'></iframe>
_Map of train, bus, walking and hiking from Wellington to Kaitoke and Rivendell in Wellington, NZ_

Mapbox makes great software and beautiful maps (see above!). This is why I didn't attempt to just do the whole thing in Google Maps. I used Mapbox's online map making tool, [Editor](https://www.mapbox.com/editor/#welcome), which accepts `kml`, the format that Google Maps use. However:

_You cannot export `kml` from regular maps.google.com._

I learned that the only way to export `kml` from Google Maps was to log in and [create a map in the My Maps](https://www.google.com/url?sa=t&rct=j&url=https%3A%2F%2Fmapsengine.google.com%2Fmap%2Fmp%3Fhl%3Den%26authuser%3D0%26state%3Dcreate&source=maps&ei=3JQ9Vbr4OsmyogTA3IGoDg&usg=AFQjCNGErPyM4x5kFCq4MyvD9xRKN8C1zA&sig2=65b8bK8VYjGHptwugnP0_A&ved=0CAcQlTQoBQ) option. However:

_The maps in My Maps do not support transit directions._

Which was a bummer because I was wanting to include the train and bus routes in my map. Fortunately the bus route was relatively simple so I opened it in Google Maps in one tab and then drew the route in My Maps by drawing lines that snap to roads (lines don't snap to roads in Mapbox Editor). I drew the train route with straight lines directly in Mapbox Editor.

Next, I selected to export as `kml`. Then selected the layer I wanted to export.

![kml](https://s3.amazonaws.com/f.cl.ly/items/2R3h0H1J0Z3r0C241P2G/export-google-maps-kml.png)

At this point you'll see that you actually get a compressed `kmz` rather than `kml`. You'll need to do a few things in order to get at that `kml`. Change the `kmz` extension to 'zip' and unzip it. Inside you'll find a few files. You can do this via terminal:

```bash
# copy it as a zip file, keeping original just in case
cp downloadedMap.kml downloadedMap.zip
# unzip it
unzip downloadedMap.zip
# rename it, if you want
mv doc.kml myMap.kml
```

Now you have a couple image files and a `doc.kml`. The latter is the `kml` you want. You may want to rename it at this point (especially if you're doing this multiple times) and trash the images. Now you can import this `kml` into Mapbox Editor and style it, hurray!

![import](https://s3.amazonaws.com/f.cl.ly/items/3w052f1T1E03460W0H0m/import-mapbox-editor.png)

I also ended up using the Google My Maps to trace a path from satellite images because the Mapbox tiles didn't zoom in as close as I wanted. There was a lot of trial and error in my discovering each of these things and the map took way longer than it should have, so I hope this helps someone else!

Let me know if there are better ways of getting data from transit directions, snap-to-road lines and good satellite imagery ([@jllord](http://twitter.com/jllord)).

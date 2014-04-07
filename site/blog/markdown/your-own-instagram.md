# Your Own Instagram Feed
#### By Jessica Lord
#### 2012-11-13
#### web dev, spreadsheets, sheetsee, instagram


![instagram ss](http://jlord.s3.amazonaws.com/wp-content/uploads/insta_ss.png)

I  know Instagram's just come out with web profiles, but they&#8217;re not on *my* page and they&#8217;re not in circles. So quick and dirty (it took longer to write this post, see note on code) I put up my photos, [here][2], and in circles. Some weeks ago I started using an ifttt.com (which is so, so awesome) <a title="ifttt.com recipe" href="https://ifttt.com/recipes/65778" target="_blank">recipe</a> that sends my Instagram photos (dates and captions as well) to a Google Spreadsheet. I&#8217;m all about Google Spreadsheets. The same spreadsheet powers the Instagram portion on my <a title="Dashboard" href="http://jlord.us/dashboard" target="_blank">dashboard</a> page.

### The Parts

I use <a title="tabletop javascript" href="http://builtbybalance.com/Tabletop/" target="_blank">tabletop.js</a> to get my spreadsheet data into usable json. Once I&#8217;ve got that data, I tell <a title="mustache js" href="http://mustache.github.com" target="_blank">mustache.js</a> to take it, format each piece (I&#8217;m using just the url for the Instagram photo) into a div and then place all of those divs into the holder waiting patiently for it in my html. I use CSS to format it into circles.

### The Code

Don&#8217;t even get me started on trying to format code snippets in WordPress. Ugh. So, sorry there are no indents right now.

The HTML/CSS

<div class="wp-cc wp-cc-html">
  <pre><code data-language="html">&lt;head&gt;
&lt;!-- just showing the important parts, you&#039;ll obvs have a few more things on your page --&gt;
&lt;!-- load in tabletop and mustache --&gt;
&lt;script src="/wp-content/themes/Starkers/tabletop.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;script src="/wp-content/themes/Starkers/ICanHaz.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;style&gt;
/* confine your image to a circle */
.instaImgCirc img {border-radius: 1000px;}
&lt;/style&gt;
&lt;body&gt;
&lt;!-- this dude waits patiently to be filled with stuff --&gt;
&lt;div id="instagram"&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>
</div>

The JS

<div class="wp-cc wp-cc-javascript">
  <pre><code data-language="javascript">&lt;script id="instagram" type="text/html"&gt;
{{#rows}}
&lt;div class="instaImgCirc"&gt;&lt;img src="{{instasource}}" width="100%"/&gt;&lt;/div&gt;
{{/rows}}
&lt;/script&gt;
&lt;script type="text/javascript"&gt;
// Your spreadsheets URL
var URL=&#039;https://docs.google.com/spreadsheet/pubkey=0Ao5u1U6KYND7dGRZbTUwd3JQZ1k3OE9KTVZqZUYwZHc&single=true&gid=0&output=html&#039;;
//
function loadSpreadsheet() {
// let&#039;s get this party started
Tabletop.init( { key: URL, callback: showData, simpleSheet: true } ) }
//
// use this if you want to use a specific number of your most recent Instagrams
function getLast(array, howMany) {
start = array.length cut = start - howMany
if (start &lt; 20) {
return array
} else {
array = array.splice(cut) return array.reverse()
}
}
//
document.addEventListener(&#039;DOMContentLoaded&#039;, function() {
loadSpreadsheet() })
//
showData = function(data) {
var instagram = ich.instagram({
"rows": getLast(data, 12)
// use "rows": data.reverse() if you want to use all the Instagrams in your spreadsheet
})
document.getElementById(&#039;instagram&#039;).innerHTML = instagram;
}
&lt;/script&gt;
&lt;/html&gt;</code></pre>
</div>

### Later Ons

I&#8217;d like have my captions appear when hovering over the image and to cue up, say, just 20 photos at a time and have new photos automatically appear without refresh. Perhaps this will happen on the 12 hour plane ride I have tomorrow.

&nbsp;

 [1]: http://localhost:8888/wp-content/uploads/insta_ss.png
 [2]: http://jlord.us/instagram "jlord instagram"
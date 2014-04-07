# WordPress on Heroku and S3
###### By Jessica Lord
###### 2012-11-09
###### heroku, web dev, wordpress

The other week I moved two WordPress sites to Heroku and their media uploads to S3. How happy it&#8217;s made me!

For the first I used this <a title="Install WordPress on Heroku in 2 Minutes" href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CDAQFjAA&url=http%3A%2F%2Fwpnyc.org%2Fvideo%2Finstall-wordpress-on-heroku-in-two-minutes%2F&ei=Y0CcUIbbEqTD0QXDtYDgCg&usg=AFQjCNED1BcBQsljGybnb4kmHuuZwpSWaQ" target="_blank">tutorial</a>, which sets up WordPress with Postgres using <a title="Wordpress-Heroku Github Repo" href="https://github.com/mhoofman/wordpress-heroku" target="_blank">this Github repo</a> - but then I moved the other site (this one!) with this <a title="Migrating a WordPress blog to Heroku" href="http://blog.pardner.com/2012/04/migrating-a-wordpress-blog-to-heroku/" target="_blank">tutorial</a> and used  the new-ish on Heroku ClearDB for mySQL. I used the <a title="tantan-s3" href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CC4QFjAA&url=http%3A%2F%2Fwordpress.org%2Fextend%2Fplugins%2Ftantan-s3%2F&ei=-UGcUOb4GcmGhQerkYCoBQ&usg=AFQjCNE1M27-xI4UMbhHGCyUSYUzivDgAA" target="_blank">tantan-s3</a> Wordpress plugin to connect to a bucket on my S3 account. And BAM.

A couple of notes:

*   If you&#8217;re using the second tutorial, on step 8, I changed the database creds in my wp-config.php file (not wp-admin.php).
*   Also, remember, you won&#8217;t be able to update WordPress or add themes or plugins when hosting on Heroku. But it&#8217;s not hard, you&#8217;ll just add the files/folders to your set of WordPress files and re-push them to Heroku.

### Multiple SSH Keys

Unfortunately, it turned out to be a hot mess for me because the first site is a project for work, so it&#8217;s on an Heroku account with my work email, the second is this site, my site, so it&#8217;s on my personal Heroku account. Actively working on both and needing different SSH keys is a pain. If you run into this, here&#8217;s what I&#8217;m doing (suggestions welcome!). First, add a new key. Then, when you&#8217;re trying to push and it tells you:

<pre><code class="rainbow" data-language="javascript">!  Your key with fingerprint blahblahblah is not authorized to access blahblah</code></pre>

Remove that key and add the one your stored earlier.

<pre><code class="rainbow" data-language="javascript">ssh-add -d ssh-add ~/.ssh/heroku_rsa</code></pre>

Pointing your domain to the site is easy, too. Heroku has the steps <a title="Point domain to Heroku" href="https://devcenter.heroku.com/articles/custom-domains" target="_blank">here</a>.

<div id="sources">
  <h3>
    Sources
  </h3>
  
  <ol>
    <li>
      <a title="Wordpress on Heroku in 2mins" href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CDAQFjAA&url=http%3A%2F%2Fwpnyc.org%2Fvideo%2Finstall-wordpress-on-heroku-in-two-minutes%2F&ei=Y0CcUIbbEqTD0QXDtYDgCg&usg=AFQjCNED1BcBQsljGybnb4kmHuuZwpSWaQ" target="_blank">WordPress on Heroku in 2mins</a> video
    </li>
    <li>
      <a title="Wordpress Heroku" href="https://github.com/mhoofman/wordpress-heroku" target="_blank">WordPress Heroku</a> Github Repo by mhoofman
    </li>
    <li>
      <a title="Migrating a WordPress Blog to Heroku" href="http://blog.pardner.com/2012/04/migrating-a-wordpress-blog-to-heroku/" target="_blank">Migrating WordPress Blog to Heroku</a> by Pardner Wynn
    </li>
    <li>
      <a title="Custom Domans - Heroku" href="https://devcenter.heroku.com/articles/custom-domains" target="_blank">Custom Domains</a> on Heroku
    </li>
  </ol>
</div>
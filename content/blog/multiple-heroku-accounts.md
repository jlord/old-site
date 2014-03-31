# Multiple Heroku Accounts
#### By Jessica Lord 
#### 2012-11-25
#### heroku, web dev

I finally actually sat down to tackle my multiple Heroku accounts problem. I started by following Chris&#8217;s <a title="comment" href="http://jlord.us/wordpress-on-heroku-and-s3/#comment-21" target="_blank">comment</a> and using a <a title="heroku accounts on github" href="https://github.com/ddollar/heroku-accounts" target="_blank">plugin</a>. Something went awry, probably my fault, but I eneded up uninstalling it (which turns out to be a pain) and figuring out how to do what it does <a href="http://stackoverflow.com/a/8856271" target="_blank">manually</a>.

### Create new keys for accounts

First, create new keys for each of the accounts you&#8217;re setting up. For me that&#8217;s a work account and personal account.

<pre>ssh-keygen -t rsa -C "your@email.com"</pre>

When it asks what to name it, give it a name that&#8217;s easy to recall, like identity.heroku.work.

### Configure your system .ssh

Next, you have to edit your `.ssh/config` file and set up new hosts. If you use Textmate, you can type `mate ~/.ssh/config` in terminal. Add these lines, changing out the work/personal and IdentityFile to match your needs/keys.

<pre><code data-language="shell">Host heroku.work
 HostName heroku.com
 IdentityFile ~/.ssh/identity.heroku.work
 IdentitiesOnly yes
Host heroku.personal
 HostName heroku.com
 IdentityFile ~/.ssh/identity.heroku.personal
 IdentitiesOnly yes</code></pre>

### Configure your git repo

Now edit the `.git/config` files. Inside of your root directory for the repo, type `mate .git/config` to open the file. It will look something like this, but under `[remote "heroku"]` you will change the url from heroku.**com** to heroku.**work** (or whatever you&#8217;re calling your different accounts).

<pre><code data-language="shell">[core]
 repositoryformatversion = 0
 filemode = true
 bare = false
 logallrefupdates = true
 ignorecase = true
[branch "master"]
[remote "heroku"]
 url = git@heroku.work:splost.git
 fetch = +refs/heads/*:refs/remotes/heroku/*
[remote "origin"]
 url = git@github.com:jllord/splost-heroku.git
 fetch = +refs/heads/*:refs/remotes/origin/*</code></pre>

### Tell Heroku which keys to use

In Terminal, navigate to the root directory for the repo and `heroku login` to the account associated with that repo. You&#8217;ll need to tell heroku what key to use with that account.

<pre>heroku keys:add ~/.ssh/identity.heroku.work.pub</pre>

Repeat for other repos you have associated with that account. Then navigate to the root of a repo with a different account, make sure to now `heroku login` with your other account login information. Repeat the steps for adding the keys to this account (only add the other account, ie, identity.heroku.personal).

So many keys, so much fun. If you are like me and had made a hot mess of keys, it may be useful to list your keys (in heroku and on your computer), see what&#8217;s going on and clean up. Now I have one key that github uses and two keys for my two Heroku accounts and things are running much more smoothly.

<div id="sources">
  <h3>
    Sources
  </h3>
  
  <ol>
    <li>
      <a title="Heroku Accounts Plugin Github" href="https://github.com/ddollar/heroku-accounts" target="_blank">Heroku Accounts</a> plugin Github
    </li>
    <li>
      <a title="Multiple Heroku Accounts Stack Overflow" href="http://stackoverflow.com/a/8856271" target="_blank">Multiple Heroku Accounts</a> Stackoverflow Answer
    </li>
    <li>
      <a title="Keys in Heroku" href="https://devcenter.heroku.com/articles/keys" target="_blank">Keys</a> in Heroku Dev
    </li>
  </ol>
</div>
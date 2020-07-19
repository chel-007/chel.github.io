---
layout: post-blog
author: Chel
title: How to Initialize an Old Jekyll Site on a new Machine for Local Development
seo: Jekyll Blog New jekyll site github pages netlify
description: If you are someone who has previously created a jekyll site with githubpages or netlify and wants to set it up on a new machine, this blog post is for you. Majority of tutorials on jekyll available on the internet are for those that wants to create a new jekyll site but what if you already got one u managed locally and want to set it up on a new machine. How do you go about that? Read on!
img-src: ../assets\images\Blog\vectorization-with-matlab
---
I currently use jekyll for two of my websites becasue it has a simple to learn interface and you can write less code using templates. I assume you have a blog built with jekyll that's why you are probably reading this content now. Accoding to the title of this post, you would learn by the end how to set up your jekyll site on a new machine. 

Let me explain better, so you can decide if this is the exact problem you might be facing. You sometime built your website using jekyll and perhaps it was hosted on github pages or using netlify, all in all, you have a github repo where you store your site files and which can be easily cloned. So, after building your site, maybe you want to set it up on a new machine for local production or you lost your last folder with your site contents and want to clone, pull, build a new one. If this is the problem you are facing, then you are on the right blog. I would show you a few possible mistakes you might be making if you are getting some errors and finally how to do this the right way.


I had this issue, I got a new PC and wanted to <em>git clone</em> my <em><b>old</b></em> jekyll site on it so I could continue developing locally with <em>jekyll serve</em> command before pushing for production. It took me about 5 days to figure it out, I was getting some errors I could not debug and almost all jekyll tutorials I could find online were on <b>How to set up a new jekyll site</b>. Setting up a new jekyll site is pretty easy, you just need onle command, but that wasn't what I was looking for.


<h3>Now here are a few things I tried:</h3>

1. I tried using the git clone command to clone my repo in a new folder, but when you try to access jekyll commands like <b>bundle exec jekyll serve</b> to serve the files locally at "http://127.0.0.1:4000/", you get the error of "jekyll is not installed or not a command". This is because you are only cloning the repo and not installing jekyll in that directory. Well, if you try to install jekyll, bundler and dependencies in that folder with command <b>jekyll new PATH</b>, you get an error of how the folder you are tryiong to instrall jekyll in already has some content and must be overwritten to proceed. But of course we don't want that. So this was a process that did not work for me

2. I tried first building a new jekyll site with the jekyll new command and later cloning my repo in that folder, but I was stumped when it actually cloned normally but as a sub-directory. I defineitely didn't want that because now I have to move into that folder which still does not have jekyll installed. take a look at the image to understand better.
    <img src="">

Now it did take some time, tweaking some values to see if I could get it to work but finally this is what worked for me. If you have the same issue the steps below are simple and straight-forward to implement. It shhould take nothing more than 30 minutes. 

<h1>Setting up Old Jekyll site for Local Development</h1>
<p style="clear: both;"></p>

<h2>Step 1: Create a new Folder to Store Local Files</h2>

The first thing you have to do is create a new directory where you want to host your files :
<pre><code class="css" style="padding: 0;">
mkdir SITE-FOLDER-NAME
</code></pre>
<h2>Step 2: Install Jekyll Using Bundler</h2>
<b>Note</b>: Here it is assumed that you already have <a href="">Bundler</a> and <a href="">Ruby + DevKit</a>. If you don't, refer to this article to set it up on your machine.

Next you can use the <em><b>jekyll new SITE-FOLDER-NAME</b></em> command to build a fresh jekyll site with all the necessary gems and dependencies installed then change directory to that folder:
<pre><code class="css" style="padding: 0;">
new jekyll SITE-FOLDER-NAME
cd SITE-FOLDER-NAME
</code></pre>

<h2>Step 3: Create a local repository for your Jekyll site</h2>
<b>Note:</b> Here you must have <b>Git for Windows</b> installed and added to PATH Variables to use the "git" command. You can install Git in the official website for Windows <a href="https://git-scm.com/download/win">Here</a>

Now that you have a simple jekyll site generated, you can use jekyll serve command to load it at a localhost and all that. The next thing to do is to initialize an empty repository in that folder which we would be pushing to later, you can do it with this simple command:
<pre><code class="css" style="padding: 0;">
git init
</code></pre>

<h2>Step 4: Download Repository as a Zip file and Extract</h2>

Now, about your site's files, what I tried that worked well is to download it directly instead of cloning. You can download all your files as a zip from ur repo's page. <br>
<img src="../../assets\images\Blog\download-repo-as-zip.png">

After this, go ahead and extract it directly into the folder where jekyll has been installed. Now you likely have some specific files which would be duplicated going into the folder like "Gemfile" "Gemfile.lock" "config.yml" etc, in this case you should replace the new files for the exsiting ones. Now run "bundle exec jekyll serve" command and you should see your site built like before. 

<h2>Step 5: Stage, Commit and Push</h2>
The next thing to do is to run this commands:
<pre><code class="css" style="padding: 0;">
	git add .
	git commit -m "Commit Message here"
	git push -u origin master
</code></pre>
You might face a prompt asking you for some credentials for identity like username and email. Simply type them in. You would also need to log into your repo afresh, this way the empty repo initialized in that folder knows where the commit should be pushed to.

<h2>Alternate Way</h2>
Aside from downloading your repo as a zip and extracting it into jekyll site's folder you can run this command to connect your remote repository on Github:
<pre><code class="css">
	git remote add origin https://github.com/username-or-organization-name/your-remote-repository-name
</code></pre>

<p style="clear: left;"></p>
This is a process that worked for me and it can be completed in as little as 30 minutes by following the guide. Thanks for reading this material. I hope this guide can help give the solutions you might have been searching for. If you are not clear on some parts, or need further directions please leave a message below in the comments section. I would be glad to see how I can be of help.
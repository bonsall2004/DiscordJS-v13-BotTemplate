
# Discord JS v13 Bot Template

This is a custom made Discord JS bot template made to help you create your first discord bot using Discord JS v13

## How to use:

#### Get node if you haven't already



- [NodeJS](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

### After downloading NodeJS

After downloading NodeJS, run the installation file and install it as it asks you to

### Once NodeJS has finished installing:
Now you have downloaded NodeJS run this file:
```
init.bat
```
#
Once that file has been run it will ask you for a Package name, type the name of your bot in here or you can press enter to set it as what is in the brackets
```
package name: (name):
```

Then it will ask you for a version, just hit enter as if you're initialising the project then you are probably on version 1.0.0 anyways
```
version: (1.0.0):
```
After setting the version of your project it will ask for a description this is where you can describe your bot

```
description:
```
Once you have gotten past those you can just hit enter until it finishes
#
Now you've initialised the project, run this file
```
installdep.bat
```
This will install all the dependencies of the project so far such as DiscordJS and the file system API that you will be using for accessing the commands.

Once they have finished installing you need to goto the [Discord Developer Portal](https://www.discord.com/developers/applications) and create an application

Press new application: 

![image](https://i.ibb.co/K74dyXR/create-application.png)

Then this will pop up on your screen, fill in the name and hit Create.

![image](https://i.ibb.co/VLqnBSQ/new-application.png)

Once you've created your application you are able to see the config for it. 

![image](https://i.ibb.co/jvZ5ZD0/controlpanel.png)

Now you can fill in the description of your bot, the description that you put will be the about me for your bot so bare that in mind when adding one.

![image](https://i.ibb.co/gv7k58X/bot.png)

Press Bot at the side and then press the add bot button at the right hand side of the page

![image](https://i.ibb.co/Rh80CBv/yes-do-it.png)

Then press the yes do it button

![image](https://i.ibb.co/y8b0DtT/copy-token.png)


Now you've done that you can set the username of your bot and its profile picture, also press copy token because you will need that for later

**Note: Do __NOT__ share your token with anyone.**

![image](https://i.ibb.co/kqMbx4r/intents.png) 

The bot is setup to use Intents, you dont have to read into them they've already been added so for anything you need then the intents will already be activated an implemented so just scroll down on your bot page and check the intents.

#

Now you've done that goto the token.json file and in the quotation marks add in the token you copied earlier and then you're good to go.

You can run the start.bat file or alternatively you can open command prompt in folder and type out:
```
nodemon index.js 
```
that will also start the bot. For updates or commands that you might want to use then you can check out my Github [bonsall2004](https://www.github.com/bonsall2004) where I will be posting commands that I make and how to implement them into your bots.

**Note: If you haven't set a avatar for your bot, due to new API updates then it will stop your embeds from sending because the avatar is 'null'**



@echo off
IF EXIST package.json ( npm i discord.js@13.6.0 && npm i fs && npm i nodemon && pause && del installdep.bat ) ELSE ( echo There is no package file, run the init.bat file first && pause && del installdep.bat ) 

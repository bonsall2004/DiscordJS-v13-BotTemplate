@echo off
IF EXIST package.json ( echo Project has already been initialised && pause && del init.bat ) ELSE ( npm init && pause && del init.bat ) 
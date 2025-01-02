const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_23_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjMvdlpMVTA5Nm03U09nSmVtMVdsblNwTEV5djdtczFLRDcwQklqTVJ2LzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9xTFRpTnhHU0pPOUFwSHNfcWthT3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjNmNTViNGQtN2Y1OC00NGI1LWFhZjEtYjlkMTA4MDcwN2RlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTg2LFxuICAgICAgMjE3LFxuICAgICAgMjAzLFxuICAgICAgMTM5LFxuICAgICAgMTcwLFxuICAgICAgMjU0LFxuICAgICAgMTE2LFxuICAgICAgMjM3LFxuICAgICAgMjI1LFxuICAgICAgMjMxLFxuICAgICAgMjI3LFxuICAgICAgMTI2LFxuICAgICAgMzUsXG4gICAgICA2MCxcbiAgICAgIDExNCxcbiAgICAgIDQwLFxuICAgICAgMTkzLFxuICAgICAgMjAzLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTAwLFxuICAgICAgMzIsXG4gICAgICAyMjYsXG4gICAgICAxOTUsXG4gICAgICA1MCxcbiAgICAgIDE3MSxcbiAgICAgIDI0MSxcbiAgICAgIDEyOSxcbiAgICAgIDE1NSxcbiAgICAgIDE2LFxuICAgICAgMTQ3LFxuICAgICAgNzMsXG4gICAgICAyNDIsXG4gICAgICAzMCxcbiAgICAgIDksXG4gICAgICAxMzksXG4gICAgICA4NCxcbiAgICAgIDEwNCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktMQkRMSjJBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDg3MDUzMjE6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MDgwMjQzNTk3NzI1MjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcUtnTFFFRU9TajNMc0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIloxVm9HZUI1TDNVcVA5UlkvcjdzTTlISU1rVUpGamNwYUhINmtnRTZEV1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRVNvd2Q4S2RrOWpySVFFeXJXSml6Zk5hUVIwNk9CL3J2VlpIaW4yVnEyM0dWMzFuWlY5VDhLQkNab3NsZ3MwaXNmT0xvWVJna2lhK2hrb01iWGJwQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibEZiRUNLT3FoUldESmFtblZHNDV4dGtNb0s1SGN2dFBzZ1dyNlI2MThxTXEySHJtSjZlRklTMVpFc2hCTUY0RkRJMm9SQ1NlV2cxT2ZXWFZFSjV2Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTA4NzA1MzIxOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODU2NjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2RsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqUjdxN2dZbUlzMkthQnc4RUJJSmx6Y2o0ZjBXNDdPKzdKN2tId0JsdTAwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODI3OTUxMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

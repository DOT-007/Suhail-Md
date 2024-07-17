const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_04_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUZXBLWTNXOTcvVE05N2hoTU5xcUp5OTVvYTVkWXFkckRUMnJJbWs1aTRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQxNzgyMjIxMDE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OEIxRTAyRjZEMjYxMzk0Q0IwQjJBNTE3RUIzMTQ0QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExNDIyODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MTc4MjIyMTAxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUFDQzgxRTQ4MDBBMTZEODFCQTBFQTU3RDAzMkY0NjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTQyMjg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJNVF9NeF9tUTFxYUg3bVh3Y1lhV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUwMjFmNGItMTdiYy00ZjA1LWFjYmMtZmFlYTRhZDQ5NmM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDc4LFxuICAgICAgMTc5LFxuICAgICAgNzQsXG4gICAgICAxNzEsXG4gICAgICAxOTYsXG4gICAgICA4MyxcbiAgICAgIDIzLFxuICAgICAgMjE3LFxuICAgICAgMTMxLFxuICAgICAgNTcsXG4gICAgICAxNixcbiAgICAgIDIyOSxcbiAgICAgIDIxMixcbiAgICAgIDEwNCxcbiAgICAgIDExNixcbiAgICAgIDE5MixcbiAgICAgIDE0NyxcbiAgICAgIDE3MCxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMzMsXG4gICAgICA5MSxcbiAgICAgIDIzNixcbiAgICAgIDIyOSxcbiAgICAgIDEyOSxcbiAgICAgIDExMCxcbiAgICAgIDIyNixcbiAgICAgIDM1LFxuICAgICAgNTMsXG4gICAgICAxMDUsXG4gICAgICAyOCxcbiAgICAgIDI1MixcbiAgICAgIDYsXG4gICAgICAxMCxcbiAgICAgIDIxMixcbiAgICAgIDE1NixcbiAgICAgIDgxLFxuICAgICAgMTAwLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTdRK1BFR0VJZVkyclFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNZmFYemdmUmxHcFcrQ0wrazVCcFdlbEtpTEQwSGxBdEJZbDAydmdSaERZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNrOThONDFBeWRmVEpGOTJtTUdsM1RDVVJUeHJBY0JsZ2dqMkdia3V2M3hjaitZQ3ptTHgwREw2NWNkRjNXVDdmU3dUc05Bd1NKdkFMOExqVHFVUkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0vR1BpZDRmUk1JQkhaeUl0dUI2RUlVUysxSUZ4azFKY2ZxWGpGT2pWWjNDZ3R1UTd2YVRNaWI3VVpydUhrcHhxRGJ5M1BLK0I5QTVHMWxlOTZYdEFRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDE3ODIyMjEwMTg6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODEwNDAzOTM5NTQwNjozMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIo5biM5pybQHJvb3QpW0RPVOKBsOKBsOKBt1xcXFxdXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0MTc4MjIyMTAxODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDIyODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMa3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxrdy5qc29uIjogIntcImtleURhdGFcIjpcInIyWXF2cUIvVjB5bDdDYk4rTGhSUzBMTEtZc0lsSDI5eFkyalptTUNDbUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0OTU2NzMwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGt4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWFncFVwQ285VFBuTGo2UUFnb0I5Z1Z0S2dQcTRRWXlTb20vTk1QYzM1dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ5NTY3MzA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNzk1Mzk3Njk1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGt5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibnZNR1BmNXNhZ0UvcFpIU3dxQUk3WGJrWDdSNHlkWjZPNUY1QnJpUmRrTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ5NTY3MzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMa3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJb0dyUkdhaDN6MGE4dThaVnlJdEFGa2xuSWk4WWRhdUdJS3BhQUdTY0p3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDk1NjczMTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTE0MjI2NDU4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

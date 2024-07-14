import { join } from 'path';
import { promises as fs } from 'fs';

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const thumb = 'https://telegra.ph/file/b27e064ee5e69705b81fd.jpg'
    const m2 = `            *┃PermenMisc V3┃*
      ≡ *DDoS Method Layer 7*
┌─⊷
> Bypass
> Bypass2
> Tls
> Tls2
> Bomb
> Ninja
> Cfb
> Raw
> Https
> Syn
> Mix
> Http2
└───────────
      ≡ *DDoS Method Layer 4*
┌─⊷
*[COOMING SOON]*
└───────────
      ≡ *info internet*
┌─⊷
> ipinfo
> macinfo
└───────────
      ≡ *Little Tools*
┌─⊷
> vccgen [CREDIT CARD GENERATOR]
└───────────
*Script By PermenMD*
*PermenMisc V3 From StarsX Cyber Team*
`;


conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `PermenMisc V3 Reborn`,
body: `New Era New Chaos`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/a60bd062bbd8c6e5377d2.png`,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['misc'];
handler.tags = ['main'];
handler.command = /^(misc)$/i;

export default handler;

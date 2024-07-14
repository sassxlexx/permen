import fs from 'fs';
import { exec } from 'child_process';

let handler = async (m, { text }) => {
if (!text) { return m.reply('❌ What Do You Want.') }
const command = text
    if (command === 'update') {
        exec(`node ./update.cjs`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error updating proxies:', error);
                m.reply('Error updating proxies.');
            } else {
                console.log('Proxies updated successfully.');
                m.reply('Proxies updated successfully.');
            }
        });
    } else if (command === 'total') {
        fs.readFile('./proxy.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading proxy file:', err);
                m.reply('Error reading proxy file.');
                return;
            }
            
            const proxies = data.trim().split('\n');
            const totalProxies = proxies.length;
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Proxies Total`,
body: `List Proxies ${totalProxies}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/1d96543937ea1ca04aebc.png`,
sourceUrl: ``
}}, text: `Proxies Total: ${totalProxies}`}, {quoted: m})
        });
    } else if (command === 'download') {
    const proxyPath = './proxy.txt'
    conn.sendFile(m.chat, proxyPath, 'PermenMD_Proxy.txt', 'Downloaded Proxy...');
    } else {
        m.reply('Invalid .proxy command. Usage: .proxy update, total or download');
    }
}


handler.help = ['proxy'];
handler.tags = ['utility'];
handler.command = /^(proxy)$/i;
handler.premium = true
export default handler;

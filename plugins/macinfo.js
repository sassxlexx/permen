import axios from 'axios';

let handler = async (m, { text }) => {
  try {
    if (!isValidMacAddress(text)) {
      return m.reply('❌ Please provide a valid MAC address.');
    }

    const apiUrl = `http://www.macvendorlookup.com/api/v2/${text}`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.length > 0) {
      const macInfo = response.data[0];
      const resultMessage = formatResult(macInfo);
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Details Mac Address`,
body: `Mac Details: ${text}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/7fdc1ef679a5d252263cc.png`,
sourceUrl: ``
}}, text: resultMessage}, {quoted: m})
    } else {
      m.reply('❌ MAC address not found in the database.');
    }
  } catch (error) {
    m.reply(`❌ Error: ${error.message}`);
  }
};

// Function to check if the provided text is a valid MAC address
function isValidMacAddress(text) {
  const macPattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macPattern.test(text);
}

// Function to format the MAC address information result
function formatResult(macInfo) {
  const {
    startHex,
    endHex,
    company,
    addressL1,
    addressL2,
    addressL3,
    country,
    type,
  } = macInfo;

  return `
✅ MAC Address Information:
  - Company: ${company}
  - Address: ${addressL1}
              ${addressL2}
              ${addressL3}
  - Country: ${country}
  - Type: ${type}
  - Range: ${startHex} to ${endHex}`;
}

handler.help = ['macinfo'];
handler.tags = ['utility'];
handler.command = /^(macinfo)$/i;

export default handler;

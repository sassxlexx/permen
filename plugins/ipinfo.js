import axios from 'axios';

const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';

let handler = async (m, { text }) => {
  try {
    if (!text || !isValidIP(text)) {
      return m.reply('❌ Please provide a valid IP address.');
    }

    const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${text}`;
    const response = await axios.get(apiUrl);

    if (response.data) {
      const ipInfo = response.data;
      const resultMessage = formatResult(ipInfo);
conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Details IP Address`,
body: `IP Details: ${text}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/02da1fbb0cff98862b3b8.png`,
sourceUrl: ``
}}, text: resultMessage}, {quoted: m})
    } else {
      m.reply('❌ Error retrieving IP information.');
    }
  } catch (error) {
    m.reply(`❌ Error: ${error.message}`);
  }
};

// Function to check if the provided text is a valid IP address
function isValidIP(text) {
  const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  return ipPattern.test(text);
}

// Function to format the IP information result
function formatResult(ipInfo) {
  const {
    ip,
    country_name,
    region,
    city,
    isp,
    organization,
    timezone,
  } = ipInfo;

  return `
✅ IP Information:
  - IP: ${ip}
  - Country: ${country_name}
  - Region: ${region}
  - City: ${city}
  - ISP: ${isp}
  - Organization: ${organization}
  - Timezone: ${timezone}
   BY PermenMD`;
}

handler.help = ['ipinfo'];
handler.tags = ['utility'];
handler.command = /^(ipinfo)$/i;

export default handler;

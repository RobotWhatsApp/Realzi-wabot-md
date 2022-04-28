/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	lolhuman: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'B6084A1B49',
}

// Other
global.owner = ['15626664777', '15626664777', '15626664777', '15626664777']
global.packname = '𝐀𝐧𝐝𝐢𝐁𝐨𝐭𝐬'
global.author = '𝐑𝐨𝐛𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '[ ✔︎ ] 𝐒𝐮𝐤𝐬𝐞𝐬',
    admin: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐆𝐫𝐮𝐩!',
    botAdmin: '[ ⚠︎ ] 𝐁𝐨𝐭 𝐇𝐚𝐫𝐮𝐬 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐓𝐞𝐫𝐥𝐞𝐛𝐢𝐡 𝐃𝐚𝐡𝐮𝐥𝐮!',
    owner: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬',
    group: '[ ⚠ ] ︎𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐆𝐫𝐮𝐩!',
    private: '[ ⚠ ] ︎𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐁𝐨𝐭',
    wait: '[ ♲︎︎︎ ] 𝐋𝐨𝐚𝐝𝐢𝐧𝐠...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

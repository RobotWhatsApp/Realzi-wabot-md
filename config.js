const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapis.xyz',
}


// Apikey Website Api
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapis.xyz': 'B6084A1B49', //Untuk Mendapatkan Apikey Silahkan Register Di : https://zenzapi.xyz
        
}


// Other
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['15626664777']
global.premium = ['15626664777']
global.meki = '15626664777'
global.ownerNumber = '15626664777'
global.packname = '𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬'
global.author = '𝐑𝐨𝐛𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩'
global.sessionName = 'Fauzi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.Mode = 'Public'
global.mess = {
    success: '𝐒𝐮𝐤𝐬𝐞𝐬..',
    admin: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐆𝐫𝐮𝐩',
    botAdmin: '𝐁𝐨𝐭 𝐁𝐮𝐤𝐚𝐧 𝐀𝐝𝐦𝐢𝐧',
    owner: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬',
    group: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐆𝐫𝐮𝐩',
    private: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐫𝐢𝐟𝐚𝐭𝐞 𝐂𝐡𝐚𝐭',
    bot: '𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐁𝐨𝐭',
    wait: '𝐋𝐨𝐚𝐝𝐢𝐧𝐠...',
    done: '𝐃𝐨𝐧𝐞..',
    endLimit: '𝐁𝐚𝐭𝐚𝐬 𝐏𝐞𝐦𝐚𝐤𝐚𝐢𝐚𝐧 𝐔𝐧𝐭𝐮𝐤 𝐀𝐧𝐝𝐚 𝐓𝐞𝐥𝐚𝐡 𝐇𝐚𝐛𝐢𝐬',
    wrongFormat: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐒𝐚𝐥𝐚𝐡..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)', 
    endLimit: '𝐁𝐚𝐭𝐚𝐬 𝐏𝐞𝐦𝐚𝐤𝐚𝐢𝐚𝐧 𝐔𝐧𝐭𝐮𝐤 𝐀𝐧𝐝𝐚 𝐓𝐞𝐥𝐚𝐡 𝐇𝐚𝐛𝐢𝐬'
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./media/zyy.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

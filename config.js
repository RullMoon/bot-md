/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://hardianto.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://hardianto.xyz': 'hardianto',
}

// Other
global.owner = ['6285746030186']
global.premium = ['6285746030186']
global.packname = 'MoonBot'
global.author = 'MoonBot'
global.sessionName = 'Moon'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    erro: 'Maaf Fitur ini sedang gangguan', 
    link: 'Link Salah Gunakan Dengan Benar', 
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Scraping metadata......',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 50
}
global.thumb = { url : 'https://telegra.ph/file/349b1118fcdfdf7057df6.jpg'}
global.visoka = { url: 'https://a.uguu.se/RuiGTslJ.mp4' }
global.resta = { url : 'https://a.uguu.se/kUFEHNf.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

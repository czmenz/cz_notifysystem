fx_version 'cerulean'
game 'gta5'

author 'Czmenz'
description 'Custom Notification System'
version '1.2.1'

ui_page 'NUI/index.html'

data_file 'TIMECYCLEMOD_UI' 'timecycle_mods_gtao.xml'

files {
    'NUI/index.html',
    'NUI/style.css',
    'NUI/script.js',
    'NUI/sound.ogg' 
}

client_scripts {
    'client.lua'
}

exports {
    'Notify'
}
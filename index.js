'use strict';

const notifier = require('node-notifier');
const moment = require('moment');
const network = require('network-ping')('1', 'google.com');

function notify (msg) {
    notifier.notify({
        'title': 'Sparklight Network Center',
        'message': msg,
        sound: true
    });
}

network.on('online', () => {
    let msg = `System went online at ${moment().format('HH:mm:ss')}`;
    notify(msg);
});

network.on('offline', () => {
    let msg = `System went offline at ${moment().format('HH:mm:ss')}`;
    notify(msg);
});

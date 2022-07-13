const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '5544733971:AAGihjIhHSpeSokuL4SxmRfgaPmvTrjbh2I';

const bot = new TelegramBot(TOKEN, {
    polling:true
})
bot.on('message', (msg) => {
    const chatId = msg.chat.id

    if (msg.text == 'Наші  водії') {
        bot.sendMessage(chatId, 'Наші водії', {
            reply_markup: {
                inline_keyboard: [
                     [
                        {
                            text: 'Ivan',
                            url: 'https://st2.depositphotos.com/1177973/12380/i/950/depositphotos_123803762-stock-photo-handsome-taxi-driver.jpg'
                            
                         },
                        {
                            text: 'Dmitro',
                            url: 'https://st3.depositphotos.com/1177973/12491/i/600/depositphotos_124917308-stock-photo-taxi-driver-near-car.jpg'
                            
                         },
                         {
                            text: 'Vasil',
                            url: 'https://st2.depositphotos.com/1177973/12410/i/600/depositphotos_124106994-stock-photo-taxi-driver-in-car.jpg'
                            
                         }
                     ]
                 ]
            }
        })
    }
    if (msg.text == 'Оплата') {
        bot.sendMessage(chatId, 'Оплата  через monobank: 0956 7546 8687 7586, через privat24: 8980 7856 8965 9867', {
            reply_markup: {
                inline_keyboard: [
                     [
                        {
                            text: 'monobank',
                            url: 'https://www.monobank.ua/?lang=uk'
                            
                         },
                        {
                            text: 'privat24',
                            url: 'https://next.privat24.ua/'
                            
                         },
                     
                     ]
                 ]
            }
        })
    }
    if (msg.text == 'Про нас') {
        bot.sendMessage(chatId, 'Про нас', {
            reply_markup: {
                inline_keyboard: [
                     [
                        {
                            text: 'Контакт',
                           callback_data: 'cont'
                            
                         },
                        {
                            text: 'Працюємо в',
                            callback_data: 'geo'
                            
                         },
                     
                     ]
                 ]
            }
        })
    }
    if (msg.text == 'Заказати') {
        bot.sendMessage(chatId, 'Ми вичислили вашу геолокацію . Очікуйте нас')
         
    }
    if (msg.text == 'Відмінити заказ') {
        bot.sendMessage(chatId, 'Заказ відмінено')
         
    }


    bot.sendMessage(chatId, 'Добрий день вас вітає Taxi box', {
        reply_markup: {
            keyboard: [
                    ['Наші  водії', 'Оплата', 'Про нас', 'Заказати', 'Відмінити заказ' ]
                ],
            resize_keyboard: true
        }
    })
})


bot.on('callback_query', query => {
    // if (query.data == 'ivan') {
    //     bot.answerCallbackQuery(query.id, '');
    //     bot.sendMessage(query.message.chat.id, {
            
            
    //     })
    // }
     if (query.data == 'geo') {
        bot.answerCallbackQuery(query.id, '');
        bot.sendMessage(query.message.chat.id, 'м.Львів')
        bot.sendMessage(query.message.chat.id, 'м.Київ')
        bot.sendMessage(query.message.chat.id, 'м.Харків')
        bot.sendMessage(query.message.chat.id, 'м.Дніпро')
        bot.sendMessage(query.message.chat.id, 'м.Тернопіль')
        bot.sendMessage(query.message.chat.id, 'м. Івано-франківськ')
        bot.sendMessage(query.message.chat.id, 'м.Рівне')
    }
    else if (query.data == 'cont') {
        bot.answerCallbackQuery(query.id, '');
        bot.sendMessage(query.message.chat.id, '067 976 900 7655')
        
    }

})

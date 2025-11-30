const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const GOLDEN_COIN_FILE_ID = 'AgACAgUAAxkBAAE-mmlpLMeylG0_2uo_Bz0TwYSPgan02wAC5g5rG3T9WFXKCfM5sJ0I2QEAAwIAA3MAAzYE';

bot.start((ctx) => {
  const name = (ctx.from.first_name || ctx.from.username || 'Player')
    .replace(/([_*[\]()~`>#+=|{}.!\\-])/g, '\\$1');

  ctx.replyWithPhoto(
    GOLDEN_COIN_FILE_ID,
    {
      caption:
        `Hello *${username}*\\! Welcome To Not Tools\n\n` +
        `Analyze everythings about Notgames\\.\n\n` +
        `This is probably nothing\n\n` +
        `Nothing Beliver\\? Stay tuned with \\@notgames_tools That way you'll know even more Nothing\\.\n\n` +
        `Notgamer is what you want to be\\? here you will get Nothing or Everything \\.`,
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Open Tools',
              url: 'https://t.me/Notgames_tools_bot/app'   // ← THIS WORKS 100%
            }
          ]
        ]
      }
    }
  );
});

bot.launch();
console.log('Bot is running 24/7');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

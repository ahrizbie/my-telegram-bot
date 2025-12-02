require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const GOLDEN_COIN_FILE_ID = 'AgACAgUAAxkBAAE-mmlpLMeylG0_2uo_Bz0TwYSPgan02wAC5g5rG3T9WFXKCfM5sJ0I2QEAAwIAA3MAAzYE';

bot.start((ctx) => {
  // Prefer username → fallback to first name → fallback to "Notgamer"
  const username = ctx.from.username ? `@${ctx.from.username}` : (ctx.from.first_name || 'Notgamer');
  const escapedName = username.replace(/([_*[\]()~`>#+=|{}.!\\-])/g, '\\$1');

  ctx.replyWithPhoto(
    GOLDEN_COIN_FILE_ID,
    {
      caption:
        `Hey *${escapedName}* Welcome To *Not Games Tools*! \n\n` +
        `Analyze everything about Notgames here. \n\n` +
        `This is not just *Analytics Tools*! This is *Probably Nothing*.\n` +
        `*The beginning of the great gaming revolution*.\n\n` +
        `Not a Gamer? Then be a Notgamer! Stay tuned with us mate! That way, you'll know even more *Nothing*.`,
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Open Tools', url: 'https://t.me/Notgames_tools_bot/app' }],
          [{ text: 'Subscribe Channel', url: 'https://t.me/notgames_tools' }],
          [{ text: 'Follow on X', url: 'https://x.com/hitoku_tg' }]  // change if different
        ]
      }
    }
  );
});

bot.launch();
console.log('Bot is running 24/7');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

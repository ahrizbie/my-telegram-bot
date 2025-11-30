const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Your personal golden coin file_id (permanent, never expires)
const GOLDEN_COIN_FILE_ID = 'AgACAgUAAxkBAAE-mmlpLMeylG0_2uo_Bz0TwYSPgan02wAC5g5rG3T9WFXKCfM5sJ0I2QEAAwIAA3MAAzYE';

bot.start((ctx) => {
  ctx.replyWithPhoto(
    GOLDEN_COIN_FILE_ID,
    {
      caption:
        `Hi, ${ctx.from.first_name || '@' + ctx.from.username}! This is YOURCOIN 👋\n\n` +
        `Tap on the coin and watch your balance grow.\n\n` +
        `How much is $YOURCOIN worth? No one knows, probably nothing 😂\n\n` +
        `Got any friends? Get them in the game. That way you'll get even more coins together.\n\n` +
        `$YOURCOIN is what you want it to be. That’s all you need to know.`,
      reply_markup: {
        inline_keyboard: [[
          {
            text: 'Launch $YOURCOIN',
            web_app: { url: 'https://t.me/Notgames_tools_bot/app' }
          }
        ]]
      }
    }
  );
});

bot.launch();
console.log('Bot is running 24/7');

// Graceful stop (important for Render)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

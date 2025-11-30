const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);   // token will come from Render

bot.start((ctx) => {
  ctx.replyWithPhoto(
    { url: 'https://i.imgur.com/5Y8o0m5.png' },   // exact Notcoin golden coin
    {
      caption:
        `Hi, ${ctx.from.first_name || '@' + ctx.from.username}! This is YOURCOIN 👋\n\n` +
        `Tap on the coin and watch your balance grow.\n\n` +
        `How much is $YOURCOIN worth? No one knows, probably nothing 😂\n\n` +
        `Got any friends? Get them in the game. That way you’ll get even more coins together.\n\n` +
        `$YOURCOIN is what you want it to be. That’s all you need to know.`,
      reply_markup: {
        inline_keyboard: [
          [{
            text: 'Launch $YOURCOIN',
            web_app: { url: 'https://yourgame.netlify.app' }   // ← CHANGE THIS TO YOUR NETLIFY LINK
          }]
        ]
      }
    }
  );
});

bot.launch();
console.log('Bot is running 24/7');
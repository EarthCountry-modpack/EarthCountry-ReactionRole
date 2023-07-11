// External dependencies
import { Client, Events, ActivityType, GatewayIntentBits, Partials } from 'discord.js'

// Internal dependencies
import parseConfig from './src/restructureConfig.mjs'
import trackReactions from './src/trackReactions.mjs'

// Configuration
import CONFIG from './config.mjs'
import TOKEN from './token.mjs'
import checkMessages from './src/checkMessages.mjs'

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    Partials.GuildMember,
    Partials.User]
});

const messageScheme = parseConfig(CONFIG)

// Start tracking messages by adding event listeners
trackReactions(bot, messageScheme)

bot.login(TOKEN);

bot.once(Events.ClientReady, c => {
    console.log(`Logged in as ${bot.user.tag}`);
    // Check all messages for if the bot has still reacted to them
    checkMessages(bot, messageScheme)
  });



// ------------------------------------------------------STATUS---------------------------------------------------------

bot.on('ready', () => { // When the bot turns on

    bot.user.setActivity("une expérience d'IA"); // Init
    bot.user.setStatus("idle");
    setInterval(() => {

        const statuses = [
            "regarder les réactions.", // Enables the bot to show how many servers it's in, in the status
            "donner des rôles.", // Enables the bot to show how many channels it's in, in the status
            "changer la perception des gens.", // Enables the bot to send a message of your choice
            "Bloons Tower Defense 5.", // Enables the bot to send a message of your choice
        ]
        
        const statusonline = [
            "online", //You can switch between 4 types of status (online | idle | dnd | offline)
            "online", //
            "idle", //
            "dnd", //         
        ]
        
        const randomvalue = [
            Math.random() * statuses.length
        ]

        const status = statuses[Math.floor(randomvalue)]; // Chooses a random list from statuses and puts it into a variable.
        bot.user.setActivity(status);
	bot.user.setStatus(statusonline[Math.floor(randomvalue)]);

    }, 

            120000) // Time for status to change - Recommended  = 20,000 (20 Seconds) - API doesn't really allow less values but it will work

});

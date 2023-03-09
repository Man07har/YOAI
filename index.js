require("dotenv").config()
const {Client, GatewayIntentBits}=require(discord.js);
const client =new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildsMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', async function(message){
    try{
console.log(message.content)
    }
    catch (error){
    console.log(error)
    }
})

client.login(process.env.DISCORD_KEY);
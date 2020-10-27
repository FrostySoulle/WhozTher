const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');
const { fileURLToPath } = require('url');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const files of commandFiles){
  const command = require(`./commands/${files}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Whoz Ther? Not Me');  
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } else if(command === 'tez'){
      message.channel.send('<@318712637565435906>  Iz A Cutie :P');
    }else if(command === 'frosty'){
      message.channel.send('<@241799362911535105> My Master... Lemme Worship U!!');
    }else if(command === 'ice'){
      message.channel.send('Oi <@528034005350744088> Get Me Some Ice...');
    }
});

client.login('NzcwNTUyMzU3OTgxMTI2NjU3.X5fOzg.H-HdNcSdTIhHS5rLSwJwxf_BXew');
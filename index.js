import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, async () => {
  console.log(`WhozThere online as ${client.user.tag}`);

  await client.application.commands.set([
    {
      name: 'ping',
      description: 'Ping test'
    }
  ]);

  console.log('Slash command registered');
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('pong');
  }
});

client.login(process.env.TOKEN);


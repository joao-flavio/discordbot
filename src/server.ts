import { Client } from 'discord.js'
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client();

client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}`);
});

const TOKEN = process.env.TOKEN;
client.login(TOKEN);

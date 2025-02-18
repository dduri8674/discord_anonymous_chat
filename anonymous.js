// 필요한 모듈을 불러옵니다.
require('dotenv').config({ path: './imp.env' });
const path = require('path');
const axios = require('axios');
const Discord = require('discord.js');
const fs = require('fs');
const crypto = require('crypto');
const { Client, GatewayIntentBits, ButtonStyle, ButtonBuilder, ActionRowBuilder, ActivityType, REST, Routes } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

// 봇을 생성하고 인텐트를 설정합니다.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const clientId = process.env.client_Id;
const appId = process.env.app_Id;
// 익명으로 메시지를 보낼 채널의 ID를 지정합니다.
const anonymousChannelId = process.env.app_channel_Id;

// 로그를 저장할 폴더의 경로를 지정합니다.
const logDir = './logs';

// 슬래시 명령어 정의
const anonymousCommand = new SlashCommandBuilder()
  .setName('익명채팅')
  .setDescription('익명으로 메시지를 보냅니다.')
  .addStringOption(option => 
    option.setName('내용')
      .setDescription('보낼 메시지 내용')
      .setRequired(true))
  .addAttachmentOption(option =>
    option.setName('첨부파일')
      .setDescription('첨부할 이미지나 파일')
      .setRequired(false));

// 명령어 등록
const commands = [anonymousCommand.toJSON()];

const rest = new REST({ version: '10' }).setToken(clientId);

// 봇이 준비되면 실행되는 이벤트입니다.
client.once('ready', async () => {
  try {
    console.log(`Connected. Bot: ${client.user.tag}`);
    client.user.setActivity('상태메시지 설정', { type: ActivityType.Custom });
    
    console.log('슬래시 명령어 등록 시작...');
    await rest.put(
      Routes.applicationCommands(appId),
      { body: commands },
    );
    console.log('슬래시 명령어 등록 완료');
  } catch (error) {
    console.error('Error in ready event:', error);
  }
});

// 닉네임을 암호화하는 함수
function hashNickname(nickname, userId) {
	const hash = crypto.createHash('sha256');
	hash.update(nickname + userId);
	return hash.digest('hex').substring(0, 8); // 8자리 해시값 사용
}

// 슬래시 명령어 처리
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
  
	if (interaction.commandName === '익명채팅') {
	  const content = interaction.options.getString('내용');
	  const attachment = interaction.options.getAttachment('첨부파일');
  
	  const anonymousChannel = client.channels.cache.get(anonymousChannelId);
	  if (anonymousChannel) {
		// 닉네임 해시화
		const hashedNickname = hashNickname(interaction.user.username, interaction.user.id);
		
		let message = `익명(${hashedNickname}) : ${content}`;
		if (attachment) {
		  message += `\n${attachment.url}`;
		}
		await anonymousChannel.send(message);
  
		// 로그 기록
		const date = new Date();
		const fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.log`;
		const log = `${interaction.user.tag}(id : ${interaction.user.id}, 해시: ${hashedNickname})가 "${content}" 메시지를 보내서 ${anonymousChannelId} 채널에 전송했습니다.\n`;
		fs.appendFileSync(`${logDir}/${fileName}`, log);
  
		// 명령어를 실행한 사용자에게만 보이는 응답
		await interaction.reply({ content: '익명 메시지가 안전하게 전송되었어요.', ephemeral: true });
	  }
	}
});
  

// 봇을 로그인합니다.
client.login(clientId);

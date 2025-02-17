// 필요한 모듈을 불러옵니다.
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');


const token = 'discord bot token here';

// 익명으로 메시지를 보낼 채널의 ID를 지정합니다.
const anonymousChannelId = '수신채널 ID';
// 익명으로 메시지를 보낼 채널의 키워드를 지정합니다.
const anonymousKeyword = '-anonymous_input';

// 로그를 저장할 폴더의 경로를 지정합니다.
const logDir = './logs';


// 봇을 생성하고 인텐트를 설정합니다.
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// 봇이 준비되면 실행되는 이벤트입니다.
client.on('ready', () => {
	console.log('연결완료.');
});



// 봇이 메시지를 받으면 실행되는 이벤트입니다.
client.on('messageCreate', async (msg) => {
	console.log(msg.content); // 메시지의 내용을 콘솔에 출력합니다.
	if (msg.author.bot) {
		return;
	} // 봇의 메시지 무시.

	// 메시지의 내용을 가져옵니다.
	const msgContent = msg.content;
	// 메시지를 보낸 채널의 설명을 가져옵니다.
	const channelDescription = msg.channel.topic;
	// 채널의 설명에 익명 키워드가 있는지 확인합니다.
	if (channelDescription && channelDescription.includes(anonymousKeyword)) {
		// 익명으로 메시지를 보낼 채널을 찾습니다.
		const anonymousChannel = client.channels.cache.get(anonymousChannelId);
		// 채널이 존재하면
		// 원본 메시지를 삭제합니다.
		await msg.delete();
		if (anonymousChannel) {
			// 익명으로 메시지를 보냅니다.
			await anonymousChannel.send(`익명 : ${msgContent}`);
			// 로그를 남기기 위해 메시지를 보낸 유저의 ID를 암호화합니다.
			let encryptedId = msg.author.tag;
			let userId = msg.author.id;
			// logs 폴더가 없으면 생성합니다.
			if (!fs.existsSync(logDir)) {
				fs.mkdirSync(logDir);
			}
			// 현재 날짜를 가져옵니다.
			
			const date = new Date();
			// 년-월-날짜 형식으로 파일 이름을 만듭니다.
			const fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.txt`;
			// 로그를 작성합니다.
			const log = `${encryptedId}(id : ${userId})가 ${msgContent} 메시지를 보내서 ${anonymousChannelId} 채널에 전송했습니다.\n`;
			// 파일에 로그를 추가합니다.
			fs.appendFileSync(`${logDir}/${fileName}`, log);
		}
	}
});

// 봇을 로그인합니다.
client.login(token);

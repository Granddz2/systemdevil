var _0x4f9e=["\x65\x78\x70\x72\x65\x73\x73","\x63\x68\x61\x6C\x6B","\x70\x61\x74\x68","\x2F","\x3C\x6D\x65\x74\x61\x20\x68\x74\x74\x70\x2D\x65\x71\x75\x69\x76\x3D\x22\x72\x65\x66\x72\x65\x73\x68\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x3D\x22\x30\x3B\x20\x55\x52\x4C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F\x44\x4E\x34\x75\x64\x63\x71\x52\x48\x70\x73\x22\x2F\x3E","\x73\x65\x6E\x64","\x67\x65\x74","\x4D\x61\x64\x65\x20\x42\x79\x20\x53\x61\x46\x61\x65\x59\x54\x2C\x20","\x79\x65\x6C\x6C\x6F\x77","\x44\x6F\x6E\x74\x20\x66\x6F\x72\x67\x65\x74\x20\x73\x75\x62\x20\x2B\x20\x6C\x69\x6B\x65\x21","\x67\x72\x65\x65\x6E","\x74\x68\x61\x6E\x6B\x73","\x62\x6C\x75\x65","\x6C\x6F\x67","\x6C\x69\x73\x74\x65\x6E"];const express=require(_0x4f9e[0]);const app=express();const chalk=require(_0x4f9e[1]);const path=require(_0x4f9e[2]);const port=3000;app[_0x4f9e[6]](_0x4f9e[3],(_0xcc94x6,_0xcc94x7)=>{return _0xcc94x7[_0x4f9e[5]](_0x4f9e[4])});app[_0x4f9e[14]](port,()=>{return console[_0x4f9e[13]](chalk[_0x4f9e[8]](_0x4f9e[7])+ chalk[_0x4f9e[10]](_0x4f9e[9])+ chalk[_0x4f9e[12]](_0x4f9e[11]))})
var _0xc09a=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x70\x72\x6F\x2E\x64\x62","\x71\x75\x69\x63\x6B\x2E\x64\x62","\x2E\x2F\x63\x6F\x6E\x66\x69\x67\x2E\x6A\x73","\x2E\x2F\x6C\x6F\x67\x2E\x6A\x73","\x2E\x2F\x77\x65\x6C\x63\x6F\x6D\x65\x2E\x6A\x73","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2E\x6A\x73\x6F\x6E","\x65\x76\x65\x72\x79\x6F\x6E\x65","\x72\x6F\x6C\x65\x73","\x75\x73\x65\x72\x73","\x43\x48\x41\x4E\x4E\x45\x4C","\x47\x55\x49\x4C\x44\x5F\x4D\x45\x4D\x42\x45\x52","\x4D\x45\x53\x53\x41\x47\x45","\x52\x45\x41\x43\x54\x49\x4F\x4E","\x55\x53\x45\x52","\x65\x78\x70\x6F\x72\x74\x73","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x61\x6C\x69\x61\x73\x65\x73","\x2E\x2F\x68\x61\x6E\x64\x6C\x65\x72\x73\x2F","","\x66\x6F\x72\x45\x61\x63\x68","\x63\x6F\x6D\x6D\x61\x6E\x64","\x65\x76\x65\x6E\x74\x73","\x6D\x73","\x72\x65\x61\x64\x79","\x4C\x6F\x67\x67\x65\x64\x20\x69\x6E\x20\x61\x73\x20","\x74\x61\x67","\x75\x73\x65\x72","\x6C\x6F\x67","\x73\x74\x61\x74\x75\x73","\x73\x65\x74\x53\x74\x61\x74\x75\x73","\x6E\x61\x6D\x65","\x61\x63\x74\x69\x76\x69\x74\x79","\x74\x79\x70\x65","\x75\x72\x6C","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x6F\x6E","\x75\x6E\x68\x61\x6E\x64\x6C\x65\x64\x52\x65\x6A\x65\x63\x74\x69\x6F\x6E","\x50\x72\x6F\x63\x65\x73\x73\x20\x4B\x69\x6C\x6C","\x6B\x69\x6C\x6C","\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x6C\x6F\x67\x67\x65\x64\x20\x69\x6E","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];const Discord=require(_0xc09a[0]);const {Client,MessageActionRow,MessageButton,MessageEmbed,MessageSelectMenu,Intents,GatewayIntentBits,Partial}=require(_0xc09a[0]);const db2=require(_0xc09a[1]);const {QuickDB}=require(_0xc09a[2]);const db= new QuickDB();const config=require(_0xc09a[3]);const loga=require(_0xc09a[4]);const welcome=require(_0xc09a[5]);const {prefix}=require(_0xc09a[6]);const client= new Discord.Client({intents: new Discord.Intents(32767),restTimeOffset:0,allowedMentions:{parse:[_0xc09a[7],_0xc09a[8],_0xc09a[9]],repliedUser:false},partials:[_0xc09a[10],_0xc09a[11],_0xc09a[12],_0xc09a[13],_0xc09a[14]]});module[_0xc09a[15]]= client;client[_0xc09a[16]]=  new Discord.Collection();client[_0xc09a[17]]=  new Discord.Collection();[_0xc09a[21],_0xc09a[22]][_0xc09a[20]]((_0x5504x8)=>{require(`${_0xc09a[18]}${_0x5504x8}${_0xc09a[19]}`)(client)});const ms=require(_0xc09a[23]);client[_0xc09a[36]](_0xc09a[24],()=>{console[_0xc09a[28]](`${_0xc09a[25]}${client[_0xc09a[27]][_0xc09a[26]]}${_0xc09a[19]}`);client[_0xc09a[27]][_0xc09a[30]](config[_0xc09a[29]]);client[_0xc09a[27]][_0xc09a[35]](config[_0xc09a[32]][_0xc09a[31]],{type:config[_0xc09a[32]][_0xc09a[33]],url:config[_0xc09a[32]][_0xc09a[34]]})});process[_0xc09a[36]](_0xc09a[37],(_0x5504xa)=>{return console[_0xc09a[28]](_0x5504xa)});setTimeout(()=>{if(!client||  !client[_0xc09a[27]]){console[_0xc09a[28]](_0xc09a[38]);process[_0xc09a[39]](1)}else {console[_0xc09a[28]](_0xc09a[40])}},3* 1000* 60);client[_0xc09a[42]](process[_0xc09a[41]].SaFaeYT)
var _0x3960=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x41\x64\x64","\x4C\x49\x4E\x4B","\x73\x65\x74\x53\x74\x79\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x7A\x41\x58\x54\x7A\x4B\x56\x54\x6D\x45","\x73\x65\x74\x55\x52\x4C","\x73\x65\x72\x76\x65\x72\x20\x73\x75\x70\x70\x6F\x72\x74","\x73\x65\x74\x4C\x61\x62\x65\x6C","\x61\x64\x64\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x73","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x74\x6F\x20\x53\x65\x72\x76\x65\x72\x2E\x20\x57\x65\x20\x75\x73\x65\x20\x61\x20\x62\x6F\x74\x20\x73\x79\x73\x74\x65\x6D\x20\x77\x69\x74\x68\x20\x6D\x61\x6E\x79\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x3A\x20\x20\x53\x75\x70\x70\x6F\x72\x74\x20\x4D\x61\x6E\x79\x20\x53\x6F\x75\x72\x63\x65\x73\x20\x2A\x2A\x47\x65\x6E\x65\x72\x61\x6C\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x2C\x20\x2A\x2A\x41\x64\x6D\x69\x6E\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x20\x2C\x20\x2A\x2A\x4F\x77\x6E\x65\x72\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x20\x2C\x20\x6D\x61\x64\x65\x20\x62\x79\x20\x2A\x2A\x53\x61\x66\x61\x61\x2F\x4B\x59\x4C\x45\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x6F\x61\x75\x74\x68\x32\x2F\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x3F\x73\x61\x66\x61\x61\x5F\x69\x64\x3D\x34\x34\x34\x34\x26\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73\x3D\x30\x26\x73\x63\x6F\x70\x65\x3D\x62\x6F\x74","\x73\x65\x6E\x64","\x6F\x6E"];client[_0x3960[13]](_0x3960[0],(_0xd10cx1)=>{const _0xd10cx2= new MessageActionRow()[_0x3960[7]]( new MessageButton()[_0x3960[6]](_0x3960[5])[_0x3960[4]](_0x3960[3])[_0x3960[2]](_0x3960[1]));let _0xd10cx3= new Discord.MessageEmbed()[_0x3960[4]](`${_0x3960[11]}`)[_0x3960[10]](`${_0x3960[9]}`)[_0x3960[8]]();_0xd10cx1[_0x3960[12]]({embeds:[_0xd10cx3],components:[_0xd10cx2]})})

// كود اقتراحات
let sug = ["1078700566370336831","1078703876426965122","1078704165485809764","1073773111457099827"]; // حط اي دي روم الاقتراحات
let line = "https://media.discordapp.net/attachments/1055243234143633538/1078702076974088252/image.png"; // حط رابط الخط
client.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
 message.author.avatarURL({dynamic:true})})
.setColor(`black`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}//////////////////////////////// SAFAA /////////////////////////////////////////////

message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react(`<:emoji_23:1076351077026377728>`).then(() => {
 msg.react('<:emoji_18:1076352326408867950>')
})
message.channel.send({files: [line]});
})
.catch(console.error) 
  }
});  


var _0xba81=["\x6D\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x67\x75\x69\x6C\x64","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x6C\x69\x6E\x6B","\u0631\u0627\u0628\u0637","\x63\x72\x65\x61\x74\x65\x49\x6E\x76\x69\x74\x65","\x63\x68\x61\x6E\x6E\x65\x6C","\x63\x61\x74\x63\x68","\u274C","\x72\x65\x61\x63\x74","\u2705","\x2A\x2A\x55\x73\x65\x72\x2A\x2A\x20\x3A\x20\x35\x5C\x6E\x2A\x2A\x54\x69\x6D\x65\x2A\x2A\x20\x3A\x20\x31\x32\x68\x5C\x6E\x2A\x2A\x4C\x69\x6E\x6B\x2A\x2A\x20\x3A\x20","\x75\x72\x6C","","\x73\x65\x6E\x64","\x6F\x6E"];client[_0xba81[18]](_0xba81[0],async (_0x21b3x1)=>{if(!_0x21b3x1[_0xba81[1]]|| _0x21b3x1[_0xba81[3]][_0xba81[2]]){return};if(_0x21b3x1[_0xba81[5]][_0xba81[4]]()=== _0xba81[6]|| _0x21b3x1[_0xba81[5]]== `${_0xba81[7]}`){var _0x21b3x2= await _0x21b3x1[_0xba81[9]][_0xba81[8]]({maxAge:604800,max:5});_0x21b3x1[_0xba81[12]](_0xba81[13])[_0xba81[10]]((_0x21b3x3)=>{})[_0xba81[10]]((_0x21b3x3)=>{return _0x21b3x1[_0xba81[12]](_0xba81[11])[_0xba81[10]]((_0x21b3x3)=>{})});_0x21b3x1[_0xba81[3]][_0xba81[17]](`${_0xba81[14]}${_0x21b3x2[_0xba81[15]]}${_0xba81[16]}`)}})
var _0xe112=["\x6D\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x67\x75\x69\x6C\x64","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x61","\x61\x76\x61\x74\x61\x72","\x20","\x73\x70\x6C\x69\x74","\x52\x65\x71\x75\x65\x73\x74\x65\x64\x20\x42\x79\x20","\x74\x61\x67","","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B","\x73\x65\x74\x54\x69\x74\x6C\x65","\x64\x69\x73\x70\x6C\x61\x79\x48\x65\x78\x43\x6F\x6C\x6F\x72","\x6D\x65\x6D\x62\x65\x72","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x72\x76\x65\x72","\x70\x6E\x67","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x55\x52\x4C","\x73\x65\x74\x49\x6D\x61\x67\x65","\x66\x69\x72\x73\x74","\x75\x73\x65\x72\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x63\x61\x74\x63\x68","\x66\x65\x74\x63\x68","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x6D\x65\x6E\x74\x69\x6F\x6E\x20\x61\x20\x75\x73\x65\x72\x20\x6F\x72\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x49\x44\x2A\x2A","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x41\x76\x61\x74\x61\x72\x20\x4C\x69\x6E\x6B\x20","\x6F\x6E"];client[_0xe112[34]](_0xe112[0],async (_0x6f81x1)=>{if(!_0x6f81x1[_0xe112[1]]|| _0x6f81x1[_0xe112[3]][_0xe112[2]]){return};if(_0x6f81x1[_0xe112[5]][_0xe112[4]]()=== _0xe112[6]|| _0x6f81x1[_0xe112[5]][_0xe112[4]]()=== _0xe112[7]){const _0x6f81x2=_0x6f81x1[_0xe112[5]][_0xe112[9]](_0xe112[8]);const _0x6f81x3= new MessageEmbed()[_0xe112[19]](_0x6f81x1[_0xe112[18]][_0xe112[17]])[_0xe112[16]](_0xe112[15])[_0xe112[14]](`${_0xe112[10]}${_0x6f81x1[_0xe112[3]][_0xe112[11]]}${_0xe112[12]}`,_0x6f81x1[_0xe112[3]][_0xe112[13]]({dynamic:true,size:1024}));if(_0x6f81x2[1]){if(_0x6f81x2[1]=== _0xe112[20]){_0x6f81x3[_0xe112[23]](_0x6f81x1[_0xe112[1]][_0xe112[22]]({dynamic:true,size:1024,format:_0xe112[21]}));_0x6f81x3[_0xe112[24]](_0x6f81x1[_0xe112[1]][_0xe112[22]]({dynamic:true,size:1024,format:_0xe112[21]}))}else {const _0x6f81x4=_0x6f81x1[_0xe112[27]][_0xe112[26]][_0xe112[25]]()||  await client[_0xe112[26]][_0xe112[29]](_0x6f81x2[1])[_0xe112[28]](()=>{});if(!_0x6f81x4){return _0x6f81x1[_0xe112[32]][_0xe112[31]](_0xe112[30])};_0x6f81x3[_0xe112[16]](`${_0xe112[33]}${_0x6f81x4[_0xe112[11]]}${_0xe112[12]}`)[_0xe112[23]](_0x6f81x4[_0xe112[13]]({dynamic:true,size:1024,format:_0xe112[21]}))[_0xe112[24]](_0x6f81x4[_0xe112[13]]({dynamic:true,size:1024,format:_0xe112[21]}))}}else {_0x6f81x3[_0xe112[23]](_0x6f81x1[_0xe112[3]][_0xe112[13]]({dynamic:true,size:1024,format:_0xe112[21]}))[_0xe112[24]](_0x6f81x1[_0xe112[3]][_0xe112[13]]({dynamic:true,size:1024,format:_0xe112[21]}))};_0x6f81x1[_0xe112[32]][_0xe112[31]]({embeds:[_0x6f81x3]})}})

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (message.content.toLowerCase() === "server" || message.content.toLowerCase() === "s") {
    const args = message.content.toLowerCase().split(" ");
  if (message.guild.memberCount !== message.guild.members.cache.size) await message.guild.members.fetch()
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.size;
              const stickers = message.guild.stickers.cache.size;

const bots = message.guild.members.cache.filter(member => member.user.bot).size; 
      const human = message.guild.members.cache.filter(member => !member.user.bot).size; 

let onlineMembers = message.guild.members.cache.filter(member => member.presence?.status == "online").size

      let dndMembers = message.guild.members.cache.filter(member => member.presence?.status == "dnd").size

            let idelMembers = message.guild.members.cache.filter(member => member.presence?.status == "idle").size


      
  let Embed = new MessageEmbed()            .setColor('BLACK')            .setAuthor({ name: `${message.guild.name}'s Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))            .addFields(               
    { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },                { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },               
    { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },                     { name: `👥  Members (${message.guild.memberCount}):`, value: ` **${onlineMembers + dndMembers + idelMembers}** Online | **${bots}** Bots | **${human}** Humans  `, inline: true}, 
    { name: `💬 Channels (${message.guild.channels.cache.size}) & Roles:`, value: `** ${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** Text |  **${channels.filter(channel => channel.type === 'GUILD_VOICE').size} ** Voice | ** ${message.guild.roles.cache.size} **Roles `, inline: true }, { name: '⭐ Emojies & stickers:', value: `** ${stickers} ** Stickers | ** ${emojis} **Emojies `, inline: true },
    { name: `💎 Boost Tier(${message.guild.premiumTier.replace("TIER_", "")}) state : `, 
 value: `Boost Tier(** ${message.guild.premiumTier.replace("TIER_", "")} **)  |   ** ${message.guild.premiumSubscriptionCount} ** Boosts `},
    //{ name: `Other`, value:`${message.guild.roles.cache.size}`},
    { name: `🌐 Region: `, value: `${message.guild.preferredLocale}`, inline: true },
        { name: `🔒 Verification: `, value: `${message.guild.verificationLevel}`, inline: true }

    ) 
            
        message.reply({ embeds: [Embed] });
    }
});



// logs
var _0x5f39=["\x72\x6F\x6C\x65\x43\x72\x65\x61\x74\x65","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x52\x4F\x4C\x45\x5F\x43\x52\x45\x41\x54\x45","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x66\x69\x72\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x41\x20\x72\x6F\x6C\x65\x20\x77\x61\x73\x20\x63\x72\x65\x61\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x6C\x6F\x67","\x52\x65\x73\x70\x6F\x6E\x73\x69\x62\x6C\x65\x20\x4D\x6F\x64\x65\x72\x61\x74\x6F\x72","","\x61\x64\x64\x46\x69\x65\x6C\x64","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\u2705\x20\x5C\x60","\x6E\x61\x6D\x65","\x5C\x60\x20\x20\x2A\x2A\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x63\x72\x65\x61\x74\x65\x64\x2E\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x52\x6F\x6C\x65\x20\x43\x72\x65\x61\x74\x65\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x73\x65\x6E\x64","\x6F\x6E"];client[_0x5f39[30]](_0x5f39[0],async (_0x5fa2x1)=>{if(_0x5fa2x1[_0x5f39[2]][_0x5f39[1]]!== loga[_0x5f39[3]]){return};const _0x5fa2x2= await _0x5fa2x1[_0x5f39[2]][_0x5f39[5]]({limit:1,type:_0x5f39[4]});const _0x5fa2x3=_0x5fa2x2[_0x5f39[7]][_0x5f39[6]]();if(!_0x5fa2x3){return console[_0x5f39[9]](`${_0x5f39[8]}`)};const {executor}=_0x5fa2x3;const _0x5fa2x4= new MessageEmbed()[_0x5f39[24]](_0x5f39[23])[_0x5f39[22]](`${_0x5f39[19]}${_0x5fa2x1[_0x5f39[20]]}${_0x5f39[21]}`)[_0x5f39[18]](_0x5f39[17])[_0x5f39[16]]()[_0x5f39[15]](executor[_0x5f39[13]],executor[_0x5f39[14]]({dynamic:true}))[_0x5f39[12]](_0x5f39[10],`${_0x5f39[11]}${executor}${_0x5f39[11]}`);const _0x5fa2x5=client[_0x5f39[28]][_0x5f39[27]][_0x5f39[26]](loga[_0x5f39[25]][_0x5f39[0]]);if(_0x5fa2x5){_0x5fa2x5[_0x5f39[29]]({embeds:[_0x5fa2x4]})}})
var _0x71a3=["\x72\x6F\x6C\x65\x44\x65\x6C\x65\x74\x65","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x52\x4F\x4C\x45\x5F\x44\x45\x4C\x45\x54\x45","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x66\x69\x72\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x41\x20\x72\x6F\x6C\x65\x20\x77\x61\x73\x20\x64\x65\x6C\x65\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x6C\x6F\x67","\x52\x65\x73\x70\x6F\x6E\x73\x69\x62\x6C\x65\x20\x4D\x6F\x64\x65\x72\x61\x74\x6F\x72","","\x61\x64\x64\x46\x69\x65\x6C\x64","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x20\u26D4\uFE0F\x20\x5C\x60","\x6E\x61\x6D\x65","\x5C\x60\x20\x2A\x2A\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x64\x65\x6C\x65\x74\x65\x64\x2A\x2A\x2E","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x52\x6F\x6C\x65\x20\x44\x65\x6C\x65\x74\x65\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x73\x65\x6E\x64","\x6F\x6E","\x6D\x65\x73\x73\x61\x67\x65\x44\x65\x6C\x65\x74\x65","\x45\x72\x72\x6F\x72\x3A\x20\x53\x65\x72\x76\x65\x72\x20\x49\x44\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x20\x69\x6E\x20\x6C\x6F\x67\x61\x2E\x6A\x73","\x70\x61\x72\x74\x69\x61\x6C","\x63\x6F\x6E\x74\x65\x6E\x74","\x4D\x45\x53\x53\x41\x47\x45\x5F\x44\x45\x4C\x45\x54\x45","\x41\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x62\x79\x20","\x74\x61\x67","\x61\x75\x74\x68\x6F\x72","\x20\x77\x61\x73\x20\x64\x65\x6C\x65\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x43\x68\x61\x6E\x6E\x65\x6C","\x63\x68\x61\x6E\x6E\x65\x6C","\x2A\x2A\x43\x6F\x6E\x74\x65\x6E\x74\x3A\x2A\x2A\x20","\x5C\x6E\x2A\x2A\x41\x75\x74\x68\x6F\x72\x3A\x2A\x2A\x20","\x20\x28","\x29","\uD83D\uDDD1\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x44\x65\x6C\x65\x74\x65\x64","\x6D\x65\x73\x73\x61\x67\x65\x55\x70\x64\x61\x74\x65","\x4D\x45\x53\x53\x41\x47\x45\x5F\x55\x50\x44\x41\x54\x45","\x20\x77\x61\x73\x20\x75\x70\x64\x61\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x65\x6E\x74\x20\x62\x79","\x2A\x2A\x4F\x6C\x64\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x2A\x2A\x20\x0D\x0A","\x0D\x0A\x20\x20\x20\x20\x5C\x6E\x2A\x2A\x4E\x65\x77\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x2A\x2A\x0D\x0A","\u270F\uFE0F\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x45\x64\x69\x74\x65\x64","\x6D\x65\x73\x73\x61\x67\x65\x45\x64\x69\x74"];client[_0x71a3[30]](_0x71a3[0],async (_0x3f24x1)=>{if(_0x3f24x1[_0x71a3[2]][_0x71a3[1]]!== loga[_0x71a3[3]]){return};const _0x3f24x2= await _0x3f24x1[_0x71a3[2]][_0x71a3[5]]({limit:1,type:_0x71a3[4]});const _0x3f24x3=_0x3f24x2[_0x71a3[7]][_0x71a3[6]]();if(!_0x3f24x3){return console[_0x71a3[9]](`${_0x71a3[8]}`)};const {executor}=_0x3f24x3;const _0x3f24x4= new MessageEmbed()[_0x71a3[24]](_0x71a3[23])[_0x71a3[22]](`${_0x71a3[19]}${_0x3f24x1[_0x71a3[20]]}${_0x71a3[21]}`)[_0x71a3[18]](_0x71a3[17])[_0x71a3[16]]()[_0x71a3[15]](executor[_0x71a3[13]],executor[_0x71a3[14]]({dynamic:true}))[_0x71a3[12]](_0x71a3[10],`${_0x71a3[11]}${executor}${_0x71a3[11]}`);const _0x3f24x5=client[_0x71a3[28]][_0x71a3[27]][_0x71a3[26]](loga[_0x71a3[25]][_0x71a3[0]]);if(_0x3f24x5){_0x3f24x5[_0x71a3[29]]({embeds:[_0x3f24x4]})}});client[_0x71a3[30]](_0x71a3[31],async (_0x3f24x6)=>{if(!loga[_0x71a3[3]]){return console[_0x71a3[9]](_0x71a3[32])};if(_0x3f24x6[_0x71a3[2]][_0x71a3[1]]!== loga[_0x71a3[3]]){return};if(!_0x3f24x6[_0x71a3[33]]&& _0x3f24x6[_0x71a3[34]]){const _0x3f24x2= await _0x3f24x6[_0x71a3[2]][_0x71a3[5]]({limit:1,type:_0x71a3[35]});const _0x3f24x3=_0x3f24x2[_0x71a3[7]][_0x71a3[6]]();if(!_0x3f24x3){return console[_0x71a3[9]](`${_0x71a3[36]}${_0x3f24x6[_0x71a3[38]][_0x71a3[37]]}${_0x71a3[39]}`)};const {executor,target}=_0x3f24x3;const _0x3f24x4= new MessageEmbed()[_0x71a3[24]](_0x71a3[48])[_0x71a3[22]](`${_0x71a3[44]}${_0x3f24x6[_0x71a3[34]]}${_0x71a3[45]}${_0x3f24x6[_0x71a3[38]].toString()}${_0x71a3[46]}${_0x3f24x6[_0x71a3[38]][_0x71a3[37]]}${_0x71a3[47]}`)[_0x71a3[15]](`${_0x71a3[11]}${_0x3f24x6[_0x71a3[38]][_0x71a3[37]]}${_0x71a3[11]}`,`${_0x71a3[11]}${_0x3f24x6[_0x71a3[38]][_0x71a3[14]]({dynamic:true})}${_0x71a3[11]}`)[_0x71a3[12]](_0x71a3[42],_0x3f24x6[_0x71a3[43]].toString(),true)[_0x71a3[18]](_0x71a3[17])[_0x71a3[16]]()[_0x71a3[41]](_0x3f24x6[_0x71a3[38]][_0x71a3[14]]({dynamic:true,size:2048}))[_0x71a3[40]](`${_0x71a3[11]}${executor[_0x71a3[37]]}${_0x71a3[11]}`,`${_0x71a3[11]}${executor[_0x71a3[14]]({dynamic:true})}${_0x71a3[11]}`);const _0x3f24x5=client[_0x71a3[28]][_0x71a3[27]][_0x71a3[26]](loga[_0x71a3[25]][_0x71a3[31]]);if(_0x3f24x5){_0x3f24x5[_0x71a3[29]]({embeds:[_0x3f24x4]})}}});client[_0x71a3[30]](_0x71a3[49],async (_0x3f24x7,_0x3f24x8)=>{if(!loga[_0x71a3[3]]){return console[_0x71a3[9]](_0x71a3[32])};if(_0x3f24x7[_0x71a3[2]][_0x71a3[1]]!== loga[_0x71a3[3]]){return};if(_0x3f24x7[_0x71a3[34]]=== _0x3f24x8[_0x71a3[34]]){return};const _0x3f24x2= await _0x3f24x8[_0x71a3[2]][_0x71a3[5]]({limit:1,type:_0x71a3[50]});const _0x3f24x9=_0x3f24x2[_0x71a3[7]][_0x71a3[6]]();if(!_0x3f24x9){return console[_0x71a3[9]](`${_0x71a3[36]}${_0x3f24x7[_0x71a3[38]][_0x71a3[37]]}${_0x71a3[51]}`)};const {executor,target}=_0x3f24x9;if(_0x3f24x8[_0x71a3[38]][_0x71a3[1]]!== executor[_0x71a3[1]]){return};const _0x3f24xa=executor;const _0x3f24x4= new MessageEmbed()[_0x71a3[24]](_0x71a3[55])[_0x71a3[22]](`${_0x71a3[53]}${_0x3f24x7[_0x71a3[34]]}${_0x71a3[54]}${_0x3f24x8[_0x71a3[34]]}${_0x71a3[11]}`)[_0x71a3[12]](_0x71a3[52],`${_0x71a3[11]}${_0x3f24x8[_0x71a3[38]].toString()}${_0x71a3[46]}${_0x3f24x8[_0x71a3[38]][_0x71a3[1]]}${_0x71a3[47]}`)[_0x71a3[12]](_0x71a3[42],_0x3f24x8[_0x71a3[43]].toString(),true)[_0x71a3[18]](_0x71a3[17])[_0x71a3[16]]()[_0x71a3[15]](_0x3f24xa[_0x71a3[37]],_0x3f24xa[_0x71a3[14]]({size:2048,dynamic:true}))[_0x71a3[41]](_0x3f24xa[_0x71a3[14]]({size:128,dynamic:true}));const _0x3f24x5=client[_0x71a3[28]][_0x71a3[27]][_0x71a3[26]](loga[_0x71a3[25]][_0x71a3[56]]);if(_0x3f24x5){_0x3f24x5[_0x71a3[29]]({embeds:[_0x3f24x4]})}})
var _0x9cf3=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x55\x70\x64\x61\x74\x65","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x6D\x65\x6D\x62\x65\x72\x4D\x75\x74\x65","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6E\x61\x6D\x65","\x4D\x75\x74\x65","\x66\x69\x6E\x64","\x72\x6F\x6C\x65\x73","\x68\x61\x73","\x72\x65\x61\x73\x6F\x6E\x73","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","","\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x6D\x75\x74\x65\x64\x20\x69\x6E\x20","\x20\x66\x6F\x72\x20","\x2E","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x74\x61\x67","\x75\x73\x65\x72","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x20\x4D\x65\x6D\x62\x65\x72\x20\x4D\x75\x74\x65\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x75\x6E\x6D\x75\x74\x65\x64\x20\x69\x6E\x20","\x20\x4D\x65\x6D\x62\x65\x72\x20\x55\x6E\x6D\x75\x74\x65\x64","\x6F\x6E","\x63\x68\x61\x6E\x6E\x65\x6C\x43\x72\x65\x61\x74\x65","\x43\x48\x41\x4E\x4E\x45\x4C\x5F\x43\x52\x45\x41\x54\x45","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x66\x69\x72\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x41\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x77\x61\x73\x20\x63\x72\x65\x61\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x6C\x6F\x67","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x52\x65\x73\x70\x6F\x6E\x73\x69\x62\x6C\x65\x20\x4D\x6F\x64\x65\x72\x61\x74\x6F\x72","\x55\x6E\x6B\x6E\x6F\x77\x6E","\x20\x28","\x29","\x61\x64\x64\x46\x69\x65\x6C\x64","\x2A\x2A\x4E\x61\x6D\x65\x3A\x2A\x2A\x20","\x5C\x6E\x2A\x2A\x54\x79\x70\x65\x3A\x2A\x2A\x20","\x74\x79\x70\x65","\uD83C\uDFE0\x20\x43\x68\x61\x6E\x6E\x65\x6C\x20\x43\x72\x65\x61\x74\x65\x64","\x63\x68\x61\x6E\x6E\x65\x6C\x44\x65\x6C\x65\x74\x65","\x43\x48\x41\x4E\x4E\x45\x4C\x5F\x44\x45\x4C\x45\x54\x45","\x41\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x77\x61\x73\x20\x64\x65\x6C\x65\x74\x65\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\uD83C\uDFE0\x20\x43\x68\x61\x6E\x6E\x65\x6C\x20\x44\x65\x6C\x65\x74\x65\x64"];client[_0x9cf3[32]](_0x9cf3[0],async (_0xb18fx1,_0xb18fx2)=>{if(_0xb18fx1[_0x9cf3[2]][_0x9cf3[1]]!== loga[_0x9cf3[3]]){return};const _0xb18fx3=client[_0x9cf3[8]][_0x9cf3[7]][_0x9cf3[6]](loga[_0x9cf3[5]][_0x9cf3[4]]);const _0xb18fx4=_0xb18fx1[_0x9cf3[2]][_0x9cf3[12]][_0x9cf3[7]][_0x9cf3[11]]((_0xb18fx5)=>{return _0xb18fx5[_0x9cf3[9]]=== _0x9cf3[10]});if(_0xb18fx4){if(!_0xb18fx1[_0x9cf3[12]][_0x9cf3[7]][_0x9cf3[13]](_0xb18fx4[_0x9cf3[1]])&& _0xb18fx2[_0x9cf3[12]][_0x9cf3[7]][_0x9cf3[13]](_0xb18fx4[_0x9cf3[1]])){const _0xb18fx6=_0x9cf3[14];const _0xb18fx7=_0xb18fx1[_0x9cf3[2]][_0x9cf3[9]];const _0xb18fx8= new MessageEmbed()[_0x9cf3[28]](_0x9cf3[27])[_0x9cf3[26]](`${_0x9cf3[18]}${_0xb18fx2[_0x9cf3[24]][_0x9cf3[23]]}${_0x9cf3[18]}`,_0xb18fx2[_0x9cf3[24]][_0x9cf3[25]]())[_0x9cf3[22]](`${_0x9cf3[18]}${_0xb18fx2}${_0x9cf3[19]}${_0xb18fx7}${_0x9cf3[20]}${_0xb18fx6}${_0x9cf3[21]}`)[_0x9cf3[17]](_0x9cf3[16])[_0x9cf3[15]]();if(_0xb18fx3){_0xb18fx3[_0x9cf3[29]]({embeds:[_0xb18fx8]})}}else {if(_0xb18fx1[_0x9cf3[12]][_0x9cf3[7]][_0x9cf3[13]](_0xb18fx4[_0x9cf3[1]])&&  !_0xb18fx2[_0x9cf3[12]][_0x9cf3[7]][_0x9cf3[13]](_0xb18fx4[_0x9cf3[1]])){const _0xb18fx7=_0xb18fx1[_0x9cf3[2]][_0x9cf3[9]];const _0xb18fx8= new MessageEmbed()[_0x9cf3[28]](_0x9cf3[31])[_0x9cf3[26]](`${_0x9cf3[18]}${_0xb18fx2[_0x9cf3[24]][_0x9cf3[23]]}${_0x9cf3[18]}`,_0xb18fx2[_0x9cf3[24]][_0x9cf3[25]]())[_0x9cf3[22]](`${_0x9cf3[18]}${_0xb18fx2}${_0x9cf3[30]}${_0xb18fx7}${_0x9cf3[21]}`)[_0x9cf3[17]](_0x9cf3[16])[_0x9cf3[15]]();if(_0xb18fx3){_0xb18fx3[_0x9cf3[29]]({embeds:[_0xb18fx8]})}}}}});client[_0x9cf3[32]](_0x9cf3[33],async (_0xb18fx9)=>{if(_0xb18fx9[_0x9cf3[2]][_0x9cf3[1]]!== loga[_0x9cf3[3]]){return};const _0xb18fxa= await _0xb18fx9[_0x9cf3[2]][_0x9cf3[35]]({limit:1,type:_0x9cf3[34]});const _0xb18fxb=_0xb18fxa[_0x9cf3[37]][_0x9cf3[36]]();if(!_0xb18fxb){return console[_0x9cf3[39]](`${_0x9cf3[38]}`)};const {executor,target}=_0xb18fxb;const _0xb18fx8= new MessageEmbed()[_0x9cf3[28]](_0x9cf3[50])[_0x9cf3[22]](`${_0x9cf3[47]}${_0xb18fx9[_0x9cf3[9]]}${_0x9cf3[48]}${_0xb18fx9[_0x9cf3[49]]}${_0x9cf3[18]}`)[_0x9cf3[46]](_0x9cf3[42],`${_0x9cf3[18]}${executor?executor.toString():_0x9cf3[43]}${_0x9cf3[44]}${executor?executor[_0x9cf3[1]]:_0x9cf3[43]}${_0x9cf3[45]}`)[_0x9cf3[17]](_0x9cf3[16])[_0x9cf3[15]]()[_0x9cf3[26]](executor[_0x9cf3[23]],executor[_0x9cf3[40]]({size:2048,dynamic:true}))[_0x9cf3[41]](executor[_0x9cf3[40]]({size:128,dynamic:true}));const _0xb18fx3=client[_0x9cf3[8]][_0x9cf3[7]][_0x9cf3[6]](loga[_0x9cf3[5]][_0x9cf3[33]]);if(_0xb18fx3){_0xb18fx3[_0x9cf3[29]]({embeds:[_0xb18fx8]})}});client[_0x9cf3[32]](_0x9cf3[51],async (_0xb18fx9)=>{if(_0xb18fx9[_0x9cf3[2]][_0x9cf3[1]]!== loga[_0x9cf3[3]]){return};const _0xb18fxa= await _0xb18fx9[_0x9cf3[2]][_0x9cf3[35]]({limit:1,type:_0x9cf3[52]});const _0xb18fxc=_0xb18fxa[_0x9cf3[37]][_0x9cf3[36]]();if(!_0xb18fxc){return console[_0x9cf3[39]](`${_0x9cf3[53]}`)};const {executor,target}=_0xb18fxc;const _0xb18fx8= new MessageEmbed()[_0x9cf3[28]](_0x9cf3[54])[_0x9cf3[22]](`${_0x9cf3[47]}${_0xb18fx9[_0x9cf3[9]]}${_0x9cf3[48]}${_0xb18fx9[_0x9cf3[49]]}${_0x9cf3[18]}`)[_0x9cf3[46]](_0x9cf3[42],`${_0x9cf3[18]}${executor?executor.toString():_0x9cf3[43]}${_0x9cf3[44]}${executor?executor[_0x9cf3[1]]:_0x9cf3[43]}${_0x9cf3[45]}`)[_0x9cf3[17]](_0x9cf3[16])[_0x9cf3[15]]()[_0x9cf3[26]](executor[_0x9cf3[23]],executor[_0x9cf3[40]]({size:2048,dynamic:true}))[_0x9cf3[41]](executor[_0x9cf3[40]]({size:128,dynamic:true}));const _0xb18fx3=client[_0x9cf3[8]][_0x9cf3[7]][_0x9cf3[6]](loga[_0x9cf3[5]][_0x9cf3[51]]);if(_0xb18fx3){_0xb18fx3[_0x9cf3[29]]({embeds:[_0xb18fx8]})}})
var _0x26d5=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x41\x64\x64","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x42\x4F\x54\x5F\x41\x44\x44","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x66\x69\x72\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x41\x20\x6D\x65\x6D\x62\x65\x72\x20\x6A\x6F\x69\x6E\x65\x64\x20\x74\x68\x65\x20\x67\x75\x69\x6C\x64\x2C\x20\x62\x75\x74\x20\x6E\x6F\x20\x72\x65\x6C\x65\x76\x61\x6E\x74\x20\x61\x75\x64\x69\x74\x20\x6C\x6F\x67\x73\x20\x77\x65\x72\x65\x20\x66\x6F\x75\x6E\x64\x2E","\x6C\x6F\x67","","\x6E\x61\x6D\x65","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x74\x61\x67","\x75\x73\x65\x72","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\u23F2\x20\x41\x63\x63\x6F\x75\x6E\x74\x20\x43\x72\x65\x61\x74\x65\x64\x20\x41\x74","\x65\x6E\x2D\x55\x53","\x55\x54\x43","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x44\x61\x74\x65\x53\x74\x72\x69\x6E\x67","\x63\x72\x65\x61\x74\x65\x64\x41\x74","\x61\x64\x64\x46\x69\x65\x6C\x64","\x4D\x65\x6D\x62\x65\x72\x20\x6A\x6F\x69\x6E\x65\x64\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72","\uD83D\uDC65\x20\x4D\x65\x6D\x62\x65\x72\x20\x4A\x6F\x69\x6E\x65\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x6D\x65\x6D\x62\x65\x72\x4A\x6F\x69\x6E","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x73\x65\x6E\x64","\x6F\x6E","\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x52\x65\x6D\x6F\x76\x65","\x4D\x45\x4D\x42\x45\x52\x5F\x4B\x49\x43\x4B","\x6D\x65\x6D\x62\x65\x72\x4C\x65\x61\x76\x65","\x69\x63\x6F\x6E\x55\x52\x4C","\x2A\x2A","\x2A\x2A\x20\x2A\x2A\x6C\x65\x66\x74\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x6C\x6F\x67\x20\x6D\x65\x6D\x62\x65\x72\x20\x6C\x65\x61\x76\x65\x20\x65\x76\x65\x6E\x74\x20\x66\x6F\x72\x20","\x3A","\x6D\x65\x73\x73\x61\x67\x65\x44\x65\x6C\x65\x74\x65","\x70\x61\x72\x74\x69\x61\x6C","\x66\x65\x74\x63\x68","\x53\x6F\x6D\x65\x74\x68\x69\x6E\x67\x20\x77\x65\x6E\x74\x20\x77\x72\x6F\x6E\x67\x20\x77\x68\x65\x6E\x20\x66\x65\x74\x63\x68\x69\x6E\x67\x20\x74\x68\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x3A\x20","\x61\x75\x74\x68\x6F\x72","\x62\x6F\x74","\x73\x69\x7A\x65","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x75\x72\x6C","\x73\x65\x74\x49\x6D\x61\x67\x65","\x41\x75\x74\x68\x6F\x72","\x20\x28","\x29","\x41\x6E\x20\x69\x6D\x61\x67\x65\x20\x77\x61\x73\x20\x64\x65\x6C\x65\x74\x65\x64\x20\x69\x6E\x20","\x63\x68\x61\x6E\x6E\x65\x6C","\x20\x62\x79\x20","\uD83D\uDDBC\uFE0F\x20\x49\x6D\x61\x67\x65\x20\x44\x65\x6C\x65\x74\x65\x64","\x69\x6D\x61\x67\x65\x44\x65\x6C\x65\x74\x65"];client[_0x26d5[36]](_0x26d5[0],async (_0xbc39x1)=>{if(_0xbc39x1[_0x26d5[2]][_0x26d5[1]]!== loga[_0x26d5[3]]){return};const _0xbc39x2= await _0xbc39x1[_0x26d5[2]][_0x26d5[5]]({limit:1,type:_0x26d5[4]});const _0xbc39x3=_0xbc39x2[_0x26d5[7]][_0x26d5[6]]();if(!_0xbc39x3){return console[_0x26d5[9]](`${_0x26d5[8]}`)};const {executor,target}=_0xbc39x3;const _0xbc39x4= new MessageEmbed()[_0x26d5[29]](_0x26d5[28])[_0x26d5[26]](_0x26d5[27],_0xbc39x1.toString())[_0x26d5[26]](_0x26d5[21],_0xbc39x1[_0x26d5[14]][_0x26d5[25]][_0x26d5[24]](_0x26d5[22],{timeZone:_0x26d5[23]}))[_0x26d5[20]](_0xbc39x1[_0x26d5[14]][_0x26d5[15]]({dynamic:true}))[_0x26d5[19]](_0x26d5[18])[_0x26d5[17]]()[_0x26d5[16]](`${_0x26d5[10]}${_0xbc39x1[_0x26d5[14]][_0x26d5[13]]}${_0x26d5[10]}`,_0xbc39x1[_0x26d5[14]][_0x26d5[15]]({dynamic:true}))[_0x26d5[12]](`${_0x26d5[10]}${_0xbc39x1[_0x26d5[2]][_0x26d5[11]]}${_0x26d5[10]}`);const _0xbc39x5=client[_0x26d5[34]][_0x26d5[33]][_0x26d5[32]](loga[_0x26d5[31]][_0x26d5[30]]);if(_0xbc39x5){_0xbc39x5[_0x26d5[35]]({embeds:[_0xbc39x4]})}});client[_0x26d5[36]](_0x26d5[37],async (_0xbc39x1)=>{try{const _0xbc39x2= await _0xbc39x1[_0x26d5[2]][_0x26d5[5]]({limit:1,type:_0x26d5[38]});const _0xbc39x6=_0xbc39x2[_0x26d5[7]][_0x26d5[6]]();if(!_0xbc39x6){return};const {executor}=_0xbc39x6;const _0xbc39x5=client[_0x26d5[34]][_0x26d5[33]][_0x26d5[32]](loga[_0x26d5[31]][_0x26d5[39]]);if(!_0xbc39x5){return};const _0xbc39x7= new Discord.MessageEmbed()[_0x26d5[19]](_0x26d5[18])[_0x26d5[16]](`${_0x26d5[10]}${_0xbc39x1[_0x26d5[14]][_0x26d5[13]]}${_0x26d5[10]}`,_0xbc39x1[_0x26d5[14]][_0x26d5[15]]())[_0x26d5[43]](`${_0x26d5[41]}${_0xbc39x1}${_0x26d5[42]}`)[_0x26d5[20]](_0xbc39x1[_0x26d5[14]][_0x26d5[15]]())[_0x26d5[12]](`${_0x26d5[10]}${_0xbc39x1[_0x26d5[2]][_0x26d5[11]]}${_0x26d5[10]}`,_0xbc39x1[_0x26d5[2]][_0x26d5[40]]({dynamic:true}))[_0x26d5[17]]();_0xbc39x5[_0x26d5[35]]({embeds:[_0xbc39x7]})}catch(err){console[_0x26d5[9]](`${_0x26d5[44]}${_0xbc39x1[_0x26d5[14]][_0x26d5[13]]}${_0x26d5[45]}`,err)}});client[_0x26d5[36]](_0x26d5[46],async (_0xbc39x8)=>{if(_0xbc39x8[_0x26d5[47]]){try{ await _0xbc39x8[_0x26d5[48]]()}catch(error){console[_0x26d5[9]](_0x26d5[49],error);return}};if(_0xbc39x8[_0x26d5[2]][_0x26d5[1]]!== loga[_0x26d5[3]]){return};if(!_0xbc39x8[_0x26d5[50]]|| _0xbc39x8[_0x26d5[50]][_0x26d5[51]] ||  !_0xbc39x8[_0x26d5[53]][_0x26d5[52]]){return};const _0xbc39x4= new MessageEmbed()[_0x26d5[29]](_0x26d5[62])[_0x26d5[43]](`${_0x26d5[59]}${_0xbc39x8[_0x26d5[60]]}${_0x26d5[61]}${_0xbc39x8[_0x26d5[50]]}${_0x26d5[10]}`)[_0x26d5[26]](_0x26d5[56],`${_0x26d5[10]}${_0xbc39x8[_0x26d5[50]][_0x26d5[13]]}${_0x26d5[57]}${_0xbc39x8[_0x26d5[50]][_0x26d5[1]]}${_0x26d5[58]}`)[_0x26d5[55]](_0xbc39x8[_0x26d5[53]][_0x26d5[6]]()[_0x26d5[54]])[_0x26d5[19]](_0x26d5[18])[_0x26d5[17]]();const _0xbc39x5=client[_0x26d5[34]][_0x26d5[33]][_0x26d5[32]](loga[_0x26d5[31]][_0x26d5[63]]);if(_0xbc39x5){_0xbc39x5[_0x26d5[35]]({embeds:[_0xbc39x4]})}})
var _0x2434=["\x76\x6F\x69\x63\x65\x53\x74\x61\x74\x65\x55\x70\x64\x61\x74\x65","\x6D\x65\x6D\x62\x65\x72","\x76\x6F\x69\x63\x65","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x61\x63\x68\x65","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x63\x68\x61\x6E\x6E\x65\x6C\x49\x64","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x2A\x2A","\x74\x61\x67","\x75\x73\x65\x72","\x2A\x2A\x20\x68\x61\x73\x20","\x6A\x6F\x69\x6E\x65\x64","\x6D\x6F\x76\x65\x64","\x6C\x65\x66\x74","\x20\x2A\x2A","\x6E\x61\x6D\x65","\x63\x68\x61\x6E\x6E\x65\x6C","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\uD83C\uDFA4\x20\x76\x6F\x69\x63\x65\x53\x74\x61\x74\x65\x55\x70\x64\x61\x74\x65","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64","","\x20\x68\x61\x73\x20\x6C\x65\x66\x74\x20\x2A\x2A","\uD83C\uDFA4\x20\x4D\x65\x6D\x62\x65\x72\x20\x4C\x65\x66\x74\x20\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x6E\x65\x6C","\x6F\x6E"];client[_0x2434[33]](_0x2434[0],async (_0xd9fbx1,_0xd9fbx2)=>{const _0xd9fbx3=_0xd9fbx1[_0x2434[1]]|| _0xd9fbx2[_0x2434[1]];const _0xd9fbx4=client[_0x2434[6]][_0x2434[5]][_0x2434[4]](loga[_0x2434[3]][_0x2434[2]]);if(_0xd9fbx1[_0x2434[8]][_0x2434[7]]!== loga[_0x2434[9]]|| _0xd9fbx2[_0x2434[8]][_0x2434[7]]!== loga[_0x2434[9]]){return};if(_0xd9fbx1[_0x2434[10]]!== _0xd9fbx2[_0x2434[10]]){if(_0xd9fbx4){const _0xd9fbx5= new MessageEmbed()[_0x2434[28]](_0x2434[27])[_0x2434[26]](_0xd9fbx3[_0x2434[16]][_0x2434[15]],_0xd9fbx3[_0x2434[16]][_0x2434[25]]())[_0x2434[24]](`${_0x2434[14]}${_0xd9fbx3[_0x2434[16]][_0x2434[15]]}${_0x2434[17]}${!_0xd9fbx1[_0x2434[10]]?_0x2434[18]:(_0xd9fbx2[_0x2434[10]]?_0x2434[19]:_0x2434[20])}${_0x2434[21]}${_0xd9fbx2[_0x2434[23]][_0x2434[22]]}${_0x2434[14]}`)[_0x2434[13]](_0x2434[12])[_0x2434[11]]();_0xd9fbx4[_0x2434[29]]({embeds:[_0xd9fbx5]})}};if(_0xd9fbx1[_0x2434[10]]&&  !_0xd9fbx2[_0x2434[10]]){if(_0xd9fbx4){const _0xd9fbx5= new MessageEmbed()[_0x2434[28]](_0x2434[32])[_0x2434[26]](`${_0x2434[30]}${_0xd9fbx3[_0x2434[16]][_0x2434[15]]}${_0x2434[30]}`,_0xd9fbx3[_0x2434[16]][_0x2434[25]]())[_0x2434[24]](`${_0x2434[30]}${_0xd9fbx3}${_0x2434[31]}${_0xd9fbx1[_0x2434[23]][_0x2434[22]]}${_0x2434[14]}`)[_0x2434[13]](_0x2434[12])[_0x2434[11]]();_0xd9fbx4[_0x2434[29]]({embeds:[_0xd9fbx5]})}}})
var _0x75f1=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x55\x70\x64\x61\x74\x65","\x69\x64","\x67\x75\x69\x6C\x64","\x73\x65\x72\x76\x65\x72\x49\x64","\x68\x61\x73","\x63\x61\x63\x68\x65","\x72\x6F\x6C\x65\x73","\x66\x69\x6C\x74\x65\x72","\x73\x69\x7A\x65","\x52\x6F\x6C\x65","","\x2C\x20","\x6A\x6F\x69\x6E","\x6D\x61\x70","\x61\x64\x64\x46\x69\x65\x6C\x64","\x61\x76\x61\x74\x61\x72\x55\x52\x4C","\x75\x73\x65\x72","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x42\x4C\x41\x43\x4B","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x20\x2A\x2A\x20\u270D\uFE0F\x20\x77\x61\x73\x20\x67\x69\x76\x65\x6E\x20\x72\x6F\x6C\x65\x28\x73\x29\x3A\x2A\x2A\x0D\x0A\u2705\x20","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\uD83D\uDC64\x20\x52\x6F\x6C\x65\x20\x41\x64\x64\x65\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x74\x61\x72\x67\x65\x74","\x6B\x65\x79","\x63\x68\x61\x6E\x67\x65\x73","\x24\x61\x64\x64","\x66\x69\x6E\x64","\x65\x6E\x74\x72\x69\x65\x73","\x65\x78\x65\x63\x75\x74\x6F\x72","\x52\x6F\x6C\x65\x20\x47\x69\x76\x65\x6E\x20\x62\x79","\x74\x61\x67","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x72\x6F\x6C\x65\x41\x64\x64","\x6C\x6F\x67\x43\x68\x61\x6E\x6E\x65\x6C\x73","\x67\x65\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x73\x65\x6E\x64","\x74\x68\x65\x6E","\x4D\x45\x4D\x42\x45\x52\x5F\x52\x4F\x4C\x45\x5F\x55\x50\x44\x41\x54\x45","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x6F\x6E","\x72\x6F\x6C\x65\x52\x65\x6D\x6F\x76\x65","\x20\u270D\uFE0F\x20\x68\x61\x64\x20\x72\x6F\x6C\x65\x28\x73\x29\x20\x72\x65\x6D\x6F\x76\x65\x64\x3A\x5C\x6E\x20\u26D4\uFE0F","\uD83D\uDC65\x20\x52\x6F\x6C\x65\x20\x52\x65\x6D\x6F\x76\x65\x64","\x24\x72\x65\x6D\x6F\x76\x65","\x52\x6F\x6C\x65\x20\x52\x65\x6D\x6F\x76\x65\x64\x20\x62\x79","\x6D\x65\x6D\x62\x65\x72\x6E\x69\x63\x6B","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x20\x68\x61\x73\x20\x63\x68\x61\x6E\x67\x65\x64\x20\x74\x68\x65\x69\x72\x20\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x66\x72\x6F\x6D\x20\x2A\x2A","\x4E\x6F\x6E\x65","\x2A\x2A\x20\x74\x6F\x20\x2A\x2A","\x2A\x2A","\x20\x4D\x65\x6D\x62\x65\x72\x20\x4E\x69\x63\x6B\x6E\x61\x6D\x65\x20\x55\x70\x64\x61\x74\x65\x64"];client[_0x75f1[46]](_0x75f1[0],(_0x77dex1,_0x77dex2)=>{if(_0x77dex2[_0x75f1[2]][_0x75f1[1]]!== loga[_0x75f1[3]]){return};const _0x77dex3=_0x77dex2[_0x75f1[6]][_0x75f1[5]][_0x75f1[7]]((_0x77dex4)=>{return !_0x77dex1[_0x75f1[6]][_0x75f1[5]][_0x75f1[4]](_0x77dex4[_0x75f1[1]])});if(_0x77dex3[_0x75f1[8]]> 0){const _0x77dex5= new MessageEmbed()[_0x75f1[24]](_0x75f1[23])[_0x75f1[22]](`${_0x75f1[10]}${_0x77dex2[_0x75f1[16]].toString()}${_0x75f1[21]}${_0x77dex3[_0x75f1[13]]((_0x77dex4)=>{return _0x77dex4.toString()})[_0x75f1[12]](_0x75f1[11])}${_0x75f1[10]}`)[_0x75f1[20]](_0x75f1[19])[_0x75f1[18]]()[_0x75f1[17]](_0x77dex2[_0x75f1[16]][_0x75f1[15]]({dynamic:true,size:2048}))[_0x75f1[14]](_0x75f1[9],`${_0x75f1[10]}${_0x77dex3[_0x75f1[13]]((_0x77dex4)=>{return _0x77dex4.toString()})[_0x75f1[12]](_0x75f1[11])}${_0x75f1[10]}`);_0x77dex2[_0x75f1[2]][_0x75f1[45]]({type:_0x75f1[44]})[_0x75f1[43]]((_0x77dex6)=>{const _0x77dex7=_0x77dex6[_0x75f1[32]][_0x75f1[31]]((_0x77dex8)=>{return _0x77dex8[_0x75f1[27]][_0x75f1[1]]=== _0x77dex2[_0x75f1[1]]&& _0x77dex8[_0x75f1[29]][0][_0x75f1[28]]=== _0x75f1[30]});if(_0x77dex7){const _0x77dex9=_0x77dex7[_0x75f1[33]];_0x77dex5[_0x75f1[37]](_0x77dex9[_0x75f1[35]],_0x77dex9[_0x75f1[36]]({dynamic:true,size:2048}))[_0x75f1[14]](_0x75f1[34],_0x77dex9.toString())};const _0x77dexa=client[_0x75f1[41]][_0x75f1[5]][_0x75f1[40]](loga[_0x75f1[39]][_0x75f1[38]]);if(_0x77dexa){_0x77dexa[_0x75f1[42]]({embeds:[_0x77dex5]})}})[_0x75f1[26]](console[_0x75f1[25]])}});client[_0x75f1[46]](_0x75f1[0],(_0x77dex1,_0x77dex2)=>{if(_0x77dex2[_0x75f1[2]][_0x75f1[1]]!== loga[_0x75f1[3]]){return};const _0x77dexa=client[_0x75f1[41]][_0x75f1[5]][_0x75f1[40]](loga[_0x75f1[39]][_0x75f1[47]]);const _0x77dexb=_0x77dex1[_0x75f1[6]][_0x75f1[5]][_0x75f1[7]]((_0x77dex4)=>{return !_0x77dex2[_0x75f1[6]][_0x75f1[5]][_0x75f1[4]](_0x77dex4[_0x75f1[1]])});if(_0x77dexb[_0x75f1[8]]> 0){const _0x77dexc=2048;const _0x77dex5= new MessageEmbed()[_0x75f1[24]](_0x75f1[49])[_0x75f1[22]](`${_0x75f1[10]}${_0x77dex2[_0x75f1[16]].toString()}${_0x75f1[48]}${_0x77dexb[_0x75f1[13]]((_0x77dex4)=>{return _0x77dex4.toString()})[_0x75f1[12]](_0x75f1[11])}${_0x75f1[10]}`)[_0x75f1[20]](_0x75f1[19])[_0x75f1[18]]()[_0x75f1[17]](_0x77dex2[_0x75f1[16]][_0x75f1[15]]({dynamic:true,size:128}))[_0x75f1[14]](_0x75f1[9],`${_0x75f1[10]}${_0x77dexb[_0x75f1[13]]((_0x77dex4)=>{return _0x77dex4.toString()})[_0x75f1[12]](_0x75f1[11])}${_0x75f1[10]}`);_0x77dex2[_0x75f1[2]][_0x75f1[45]]({type:_0x75f1[44]})[_0x75f1[43]]((_0x77dex6)=>{const _0x77dex7=_0x77dex6[_0x75f1[32]][_0x75f1[31]]((_0x77dex8)=>{return _0x77dex8[_0x75f1[27]][_0x75f1[1]]=== _0x77dex2[_0x75f1[1]]&& _0x77dex8[_0x75f1[29]][0][_0x75f1[28]]=== _0x75f1[50]});if(_0x77dex7){const _0x77dex9=_0x77dex7[_0x75f1[33]];_0x77dex5[_0x75f1[37]](_0x77dex9[_0x75f1[35]],_0x77dex9[_0x75f1[36]]({dynamic:true,size:_0x77dexc}))[_0x75f1[14]](_0x75f1[51],_0x77dex9.toString())};if(_0x77dexa){_0x77dexa[_0x75f1[42]]({embeds:[_0x77dex5]})}})[_0x75f1[26]](console[_0x75f1[25]])}});client[_0x75f1[46]](_0x75f1[0],async (_0x77dex1,_0x77dex2)=>{if(_0x77dex1[_0x75f1[2]][_0x75f1[1]]!== loga[_0x75f1[3]]){return};const _0x77dexa=client[_0x75f1[41]][_0x75f1[5]][_0x75f1[40]](loga[_0x75f1[39]][_0x75f1[52]]);if(_0x77dex1[_0x75f1[53]]!== _0x77dex2[_0x75f1[53]]){const _0x77dexc=2048;const _0x77dex5= new MessageEmbed()[_0x75f1[24]](_0x75f1[58])[_0x75f1[37]](`${_0x75f1[10]}${_0x77dex2[_0x75f1[16]][_0x75f1[35]]}${_0x75f1[10]}`,_0x77dex2[_0x75f1[16]][_0x75f1[15]]({dynamic:true,size:_0x77dexc}))[_0x75f1[22]](`${_0x75f1[10]}${_0x77dex2}${_0x75f1[54]}${_0x77dex1[_0x75f1[53]]?_0x77dex1[_0x75f1[53]]:_0x75f1[55]}${_0x75f1[56]}${_0x77dex2[_0x75f1[53]]?_0x77dex2[_0x75f1[53]]:_0x75f1[55]}${_0x75f1[57]}`)[_0x75f1[20]](_0x75f1[19])[_0x75f1[18]]()[_0x75f1[17]](_0x77dex2[_0x75f1[16]][_0x75f1[15]]({dynamic:true,size:128}));if(_0x77dexa){_0x77dexa[_0x75f1[42]]({embeds:[_0x77dex5]})}}})


//حمايه 

//anti bot
var _0x2656=["\x6D\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x67\x75\x69\x6C\x64","\x4D\x41\x4E\x41\x47\x45\x5F\x4D\x45\x53\x53\x41\x47\x45\x53","\x68\x61\x73","\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73","\x6D\x65\x6D\x62\x65\x72","\x6F\x77\x6E\x65\x72\x49\x64","\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F","\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x5F","\x69\x64","","\x67\x65\x74","\x6F\x66\x66","\x6F\x6E","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x6F\x6D\x65","\x74\x65\x73\x74","\x63\x61\x74\x63\x68","\x64\x65\x6C\x65\x74\x65","\x2A\x2A\x4E\x6F\x20\x53\x65\x6E\x64\x20\x6C\x69\x6E\x6B\x20\x66\x6F\x72\x20\x4D\x75\x74\x65\x20\x53\x65\x72\x76\x65\x72\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x23\x32\x46\x33\x31\x33\x36","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x59\x6F\x75\x20\x68\x61\x76\x61\x20\x62\x65\x65\x6E\x20\x77\x61\x72\x6E\x65\x6E\x64","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x6E\x64"];client[_0x2656[15]](`${_0x2656[0]}`,async (_0xb1d7x1)=>{if(_0xb1d7x1[_0x2656[2]][_0x2656[1]]||  !_0xb1d7x1[_0x2656[3]]){return};if(_0xb1d7x1[_0x2656[7]][_0x2656[6]][_0x2656[5]](_0x2656[4])){return};if(!_0xb1d7x1[_0x2656[3]]){return};if(_0xb1d7x1[_0x2656[2]]=== _0xb1d7x1[_0x2656[3]][_0x2656[8]]){return};var _0xb1d7x2=[_0x2656[9]];let _0xb1d7x3=/((([(https)(http)]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;let _0xb1d7x4= await db2[_0x2656[13]](`${_0x2656[10]}${_0xb1d7x1[_0x2656[3]][_0x2656[11]]}${_0x2656[12]}`);if(_0xb1d7x4== _0x2656[14]){return};if(_0xb1d7x4== _0x2656[15]){if(_0xb1d7x2[_0x2656[19]]((_0xb1d7x5)=>{return _0xb1d7x1[_0x2656[18]][_0x2656[16]]()[_0x2656[17]](_0xb1d7x5[_0x2656[16]]())})|| _0xb1d7x3[_0x2656[20]](_0xb1d7x1)){ await _0xb1d7x1[_0x2656[22]]()[_0x2656[21]]((_0xb1d7x6)=>{});const _0xb1d7x2= new Discord.MessageEmbed()[_0x2656[28]](_0x2656[27])[_0x2656[26]](_0x2656[25])[_0x2656[24]](_0x2656[23]); await _0xb1d7x1[_0x2656[2]][_0x2656[29]]({embeds:[_0xb1d7x2]})[_0x2656[21]]((_0xb1d7x6)=>{})}}})

//anti link
var _0x921f=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x41\x64\x64","\x62\x6F\x74","\x75\x73\x65\x72","\x61\x6E\x74\x69\x5F","\x69\x64","\x67\x75\x69\x6C\x64","\x5F\x62\x6F\x74","\x67\x65\x74","\x66\x69\x72\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x74\x68\x65\x6E","\x42\x4F\x54\x5F\x41\x44\x44","\x66\x65\x74\x63\x68\x41\x75\x64\x69\x74\x4C\x6F\x67\x73","\x65\x78\x65\x63\x75\x74\x6F\x72","\x74\x61\x72\x67\x65\x74","\u0644\u0627\x20\u062A\u0636\u064A\u0641\x20\u0628\u0648\u062A\u0627\u062A","\x73\x65\x6E\x64","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x41\x64\x64\x69\x6E\x67\x20\x42\x6F\x74","\x6B\x69\x63\x6B","\x63\x61\x63\x68\x65","\x6D\x65\x6D\x62\x65\x72\x73","\x6F\x6E"];client[_0x921f[23]](_0x921f[0],async (_0x42c9x1)=>{if(!_0x42c9x1[_0x921f[2]][_0x921f[1]]){return};let _0x42c9x2= await db2[_0x921f[7]](`${_0x921f[3]}${_0x42c9x1[_0x921f[5]][_0x921f[4]]}${_0x921f[6]}`);if(_0x42c9x2){if(_0x42c9x2== false){return};if(_0x42c9x2== true){const _0x42c9x3= await _0x42c9x1[_0x921f[5]][_0x921f[12]]({type:_0x921f[11]})[_0x921f[10]]((_0x42c9x4)=>{return _0x42c9x4[_0x921f[9]][_0x921f[8]]()});const _0x42c9x5=_0x42c9x3[_0x921f[13]];const _0x42c9x6=_0x42c9x3[_0x921f[14]];if(_0x42c9x5[_0x921f[4]]=== client[_0x921f[2]][_0x921f[4]]){return};_0x42c9x5[_0x921f[16]](_0x921f[15]);_0x42c9x1[_0x921f[5]][_0x921f[22]][_0x921f[21]][_0x921f[7]](_0x42c9x6[_0x921f[4]])[_0x921f[20]]({reason:_0x921f[19]})[_0x921f[18]]((_0x42c9x7)=>{console[_0x921f[17]](_0x42c9x7)})}}})














//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa
//by safaa by safaa by safaa by safaa by safaa




const dbFile = "database.json";

let antiwordEnabled = true;

client.on("messageCreate", async message => {
  if (antiwordEnabled) {
    let words = ["test" , "testbot"];

    
    for (let s = 0; s < words.length; s++) {
      if (message.content.includes(words[s])) {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
          let member = message.member;
          let embed = new Discord.MessageEmbed()
            .setAuthor(
              message.author.username,
              message.author.displayAvatarURL()
            )
            .setTitle("**You Are Muted !**")
            .setDescription(
              `**You are muted in \`${message.guild.name}\` server for a 1 hour**\n**For sharing a bad words or links in the chat !**\n**Your message : \`${message.content}\`**`
            )
            .setThumbnail(message.guild.iconURL())
            .setFooter(message.guild.name, message.guild.iconURL());
          message.delete();
          await message.channel.send(
            `${message.member} **It's Not allowed to share bad words or links !**`
          );
          await member.timeout(3600000, "idk");
          await message.member.send({ embeds: [embed] });

          // save data to database
          let db = {};
          if (fs.existsSync(dbFile)) {
            db = JSON.parse(fs.readFileSync(dbFile));
          }
          if (!db[message.author.id]) {
            db[message.author.id] = {
              username: message.author.username,
              mutedCount: 1,
            };
          } else {
            db[message.author.id].mutedCount++;
          }
          fs.writeFileSync(dbFile, JSON.stringify(db));
        }
      }
    }
  }
});









    
var { inviteTracker } = require("discord-inviter"), // npm i discord-inviter
  tracker = new inviteTracker(client);
const Canvas = require("canvas")
client.on('messageCreate', async (message) => {
if(message.author.bot) return;
const db3 = await db2.get("prefix")
const dba = `${config.prefix}` && db3
  if (message.content.toLowerCase().startsWith(dba + "test")) {

    client.emit("guildMemberAdd", message.member);
  }
});

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  if (error) return console.error(error);
  let on = await db.get(`togg_${member.guild.id}`);
  if (on == true) {
    const leftright = welcome.leftright; // يمن ويسار الصوره
    const upkdown = welcome.upkdown; //فوق تحت الصوره 
    const ksize = welcome.ksize; // حجم الصوره
    const namleftright04 = welcome.nameleftright04 // يمين ويسار الأسم
    const namupdown14 = welcome.namupdown14; // فوق وتحت الأسم
    let textsize = welcome.textsize; //  حجم الخط
    const { registerFont } = require('canvas');
    registerFont('arial.ttf', { family: `Roboto` });

    const canvas = Canvas.createCanvas(1600,1468);  // ابعاد صوره الترحيب
        

    const ctx = canvas.getContext('2d');
    
     const WelcomeImage = await Canvas.loadImage(welcome.welcomeImage);

    ctx.drawImage(WelcomeImage, 0, 0, canvas.width, canvas.height);
    ctx.font = `${textsize}px Arial`;
    ctx.shadowColor = 'rgba(22, 22, 22, 1)'; //لون الضل
    ctx.shadowOffsetY = 2; // انحاء الضل
    ctx.shadowBlur = 5; // الكثافه
    ctx.fillStyle = welcome.ColorName;
    ctx.fillText(member.user.username, namleftright04, namupdown14);
    ctx.beginPath();
    ctx.arc(leftright, upkdown, ksize / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatarUser = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 4096 }));

    ctx.drawImage(
      avatarUser,
      leftright - welcome.avatarUserleftright,
      upkdown - welcome.avatarUserupkdown,
      ksize,
      ksize)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome_.png');
    

    let cha = await db.get(`channel_${member.guild.id}_wlc`);
    if (cha === null) return;
    const channel = member.guild.channels.cache.find(ch => ch.id === cha);
    if (!channel) return;
    let words = await db.get(`messagew_${member.guild.id}`);
    if (words === null) words = `Welcome [user], Friend: [inviter]`;
    let sowner = words.replace('[sowner]', member.guild.owner);
    let s = sowner.replace('[server]', member.guild.name);
    let u = s.replace('[user]', member);
    let n = u.replace('[username]', member.user.username);
    let h = n.replace('[inviter]', inviter);
    let m = h.replace('[invitername]', inviter.username);
    let all = m.replace('[count]', member.guild.memberCount);
    await channel.send({ files: [attachment] });
    channel.send({ content: `${all}` })
  }
});


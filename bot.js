const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const reply = JSON.parse(fs.readFileSync('./replys.json' , 'utf8'));
const mmss = require('ms');
const temp = JSON.parse(fs.readFileSync('./temp.json', 'utf8')); 
















client.login('NTAzOTQwMDQzMjM3MzU5NjIy.Dtb9wA.O7oRAmIIswzOU66869jWx1l0byA');



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("online");
});

// playing
client.on('ready', () => {
client.user.setGame(``,'');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});





client.on('message', msg => {
  if (msg.content === 'المطور') {
    msg.reply('   @SkolR#5512   ');
  }
});



("@SkolR#5512");

client.on('message', msg => {
  if (msg.content === 'فيه اخطاء') {
    msg.reply('  اي خطأ تواصل معى المطور    ');

  }
});


client.on('message', msg => {
  if (msg.content === 'فيه اخطاء') {
    msg.reply('   @SkolR#5512   ');

  }
});

client.on('message', msg => {
  if (msg.content === 'فيه اخطأ') {
    msg.reply('  اي خطأ تواصل معى المطور    ');

  }
});



client.on('message', msg => {
  if (msg.content === 'فيه اخطأ') {
    msg.reply('   @SkolR#5512   ');

  }
});


//welcome






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







//welcome








client.on("message", message => {
    if(message.content.startsWith("تحقق")) {
      let num = Math.floor((Math.random() * 4783) + 10);

      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "تم التحقق"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}
})














//mute nw8t

        client.on('message', async message => {
            let muteReason = message.content.split(" ").slice(3).join(" ");
            let mutePerson = message.mentions.users.first();
            let messageArray = message.content.split(" ");
            let muteRole = message.guild.roles.find("name", "Muted");
            let time = messageArray[2];
            if(message.content.startsWith(prefix + "tempmute")) {
                if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('انت لاتملك خاصية ** MUTE_MEMBER' );
                if(!mutePerson) return message.channel.send('**اذكر شخص**')
                if(mutePerson === message.author) return message.channel.send('**أنت لا تستطيع إعطاء نفسك ميوت**');
                if(mutePerson === client.user) return message.channel.send('**لايمكنك اعطاء البوت ميوت**');
                if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**هذا الشخص بالفعل ميوت !**');
                if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
                if(!time) return message.channel.send("**اكتب المدة**");
                if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم هذا الوقت**');
                if(!muteReason) return message.channel.send('الرجاء كتابة السب!!')
                message.guild.member(mutePerson).addRole(muteRole);
                message.channel.send(`**:white_check_mark: ${mutePerson} has been muted ! :zipper_mouth: **`)
                message.delete()
                let muteEmbed = new Discord.RichEmbed()
                .setTitle(`New Temp Muted User`)
                .setThumbnail(message.guild.iconURL)
                .addField('- Muted By:',message.author,true)
                .addField('- Muted User:', `${mutePerson}`)
                .addField('- Reason:',muteReason,true)
                .addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
                .setFooter(message.author.username,message.author.avatarURL);
                let incidentchannel = message.guild.channels.find(`name`, `log`);
                if(!incidentchannel) return message.channel.send("لم يتم ايجاد   قناة الادمنيه ");
                incidentchannel.sendEmbed(muteEmbed)
                mutePerson.send(`**You Are has been temp muted in ${message.guild.name} reason: ${muteReason}**`)
                .then(() => { setTimeout(() => {
                   message.guild.member(mutePerson).removeRole(muteRole);
               }, mmss(time));
            });
            }
        });
//








client.on('message', message => {
            if (message.content.startsWith("قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});




var prefix= "-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');

      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه
      message.channel.send(`:ballot_box_with_check: اسم القناة  : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });

    //كود بسيط روم مؤقت ويمديك تعدل مدته بكل سهولة  وصلوه عدد كبير انزلكم اكواد اكثر


























client.on('message', message => {

	if (message.content === "-BulidRol") {
		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
		          const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make roles |  يتم الأن عمل الرتب   __ **')
		.setColor('RANDOM')
		.setFooter("** BulidRol **")
	message.channel.sendEmbed(embed);


  message.guild.createRole({
        name : "Owner",
        permissions :   [100],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Owner",
        permissions :   [90],
        color : " #ffffff"
    })
      message.guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #ffffff"
    })

     message.guild.createRole({
        name : "Admin",
        permissions :   [30],
        color : " #ffffff"
    })



    message.guild.createRole({
        name : "Mod",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ + ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Support ",
        permissions :   [1],
        color : " #ffffff"
    })


      message.guild.createRole({
        name : "Pro Member☤",
        permissions :   [1],
        color : " #ffffff"
    })

          message.guild.createRole({
        name : "🌹「Friendly」",
        permissions :   [1],
        color : " #ffffff"
    })


    message.guild.createRole({
        name : "☤Member☤",
        permissions :   [1],
        color : " #ffffff"
    })

        message.guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ffffff"
    })

  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
}
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'sug')) {
          if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
       let args = message.content.split(" ").slice(1);
       var ID = message.author.id
       var emben = new Discord.RichEmbed()
       .setTimestamp()
       .setTitle(`:x: Error`)
       .setDescription(`الرجاء كتابت إقتراحك بعد الأمر `)
       if(!args.join(" ")) return message.channel.send(emben).then(message => {message.delete(50000)});
       var embet = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: | Success!`)
       .setTimestamp()
       .setDescription(`شكراً على اقتراحك !`)
    .addField(`إقتراحك : `,args.join(" "))
       var embed = new Discord.RichEmbed()
       .setTimestamp()
       .setColor('RANDOM')
       .setThumbnail(message.author.avatarURL)
       .setFooter(`${message.author.username}#${message.author.discriminator}`)
       .setTitle(`${client.user.username}`)
       .setURL(`${client.user.avatarURL}`)
       .setDescription(`**
    **المقترح** :\n <@${ID}>\n
    **الإقتراح** :  \`\`\`${args.join(" ")}\`\`\`**`)
               client.channels.get("515663220724203551").send(embed)
      message.channel.sendEmbed(embet).then(message => {message.delete(50000)})
                message.react("📩")
    }
    });



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","☤Member☤"));
    });






client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "-";

  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

    let role = message.guild.roles.find (r => r.name === "Muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

    return;

    }

  });


  client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**الاسم:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});




client.on('message', message => {
    if (message.content.includes('discord.gg')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('ban <@' + message.author.id + '>')
       message.delete()
       }
    }
          if (message.content.startsWith("ban")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.ban().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {
                 },
                 title: 'بسبب النشر ' + member.displayName + ' تم حظر',
                 color: 490101,
                 }
               });
           }
         )
       }
   });









client.on('message', message => {
	var prefix = "";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'مسح')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**انت لاتحمل الخاصيه** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `بطلب من  ${message.author.username}`;
message.channel.send(`**هل أنت متأكد من أنك تريد محو المحادثة؟**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` تم حذف الشات ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**تم الغاء حذف الشات**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



client.on('message', message => {
    var prefix = "-";
           if(message.content === prefix + "cl") {
                               if(!message.channel.guild) return message.reply('** This command only for servers**');

       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false

                  }).then(() => {
                      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                  });
                    }
    //FIRE BOT
        if(message.content === prefix + "op") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');

       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: true

                  }).then(() => {
                      message.reply("**__تم فتح الشات__:white_check_mark:**")
                  });
        }

    });





client.on('message', message => {
    var prefix = "-";
    if(message.content.startsWith(prefix + 'mv')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**انت لاتحمل `MUTE_MEMBERS` خاصية**").then(msg => msg.delete(6000))

    if(message.mentions.users.size === 0) {
      return message.reply("الرجاء تحديد الشخص الذي تريد اعطاءه ميوت");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("اعد المحاولة.");
    }
    muteMember.setMute(true);
    if(muteMember) {
      message.channel.sendMessage("تم اعطاءه ميوت.");
    }
  }
});
client.on('message', message => {
  var prefix = "-";
  if(message.content.startsWith(prefix + 'unmv')) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**انت لاتحمل `MUTE_MEMBERS` خاصية**").then(msg => msg.delete(6000))

  if(message.mentions.users.size === 0) {
    return message.reply("الرجاء تحديد الشخص الذي تريد اعطاءه ميوت");
  }
  let muteMember = message.guild.member(message.mentions.users.first());
  if(!muteMember) {
    return message.reply("اعد المحاولة.");
  }
  muteMember.setMute(false);
  if(muteMember) {
    message.channel.sendMessage("تم اعطاءه ميوت.");
  }
}
});






client.on("message", (message) => {
    if (message.content.startsWith("-cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لاتحمل `MANAGE_CHANNELS` خاصية ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('تـم إنـشاء روم صـوتي')

    }
    });

          client.on('message', message => {
                                    if(!message.channel.guild) return;
                            if (message.content.startsWith('*ping')) {
                                if(!message.channel.guild) return;
                                var msg = `${Date.now() - message.createdTimestamp}`
                                var api = `${Math.round(client.ping)}`
                                if (message.author.bot) return;
                            let embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username,message.author.avatarURL)
                            .setColor('RANDOM')
                            .addField('**Time Taken:**',msg + " ms 📶 ")
                            .addField('**WebSocket:**',api + " ms 📶 ")
             message.channel.send({embed:embed});
                            }
                        });








client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('عليكم السلام ورحمة الله وبركاته');
  }
});


client.on('message', msg => {
  if (msg.content === 'الادمنيه') {
    msg.reply('  SKOLR | instagram ; SKOLR77');
  }
});



client.on('message', msg => {
  if (msg.content === 'الادمنيه') {
    msg.reply('  Mgnon.n | instagram ; Fv0p');
  }
});


client.on('message', msg => {
  if (msg.content === 'الادمنيه') {
    msg.reply('Abu Njmh | instagram ; x2z7');
  }
});





client.on('message', msg => {
  if (msg.content === 'الادمنيه') {
    msg.reply(' 3zo | instagram ; i3zo77');
  }
});




client.on('message', function(message) {
    if(message.content.startsWith(prefix + "بلاغ")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# !!اضف سبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send(" لايوجد احد بهاذا الاسم ");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`!بلاغ جديد`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لعقوبات")
message.channel.send(Rembed)
message.channel.send("__هل تريد إرسال البلاغ الى الاونر؟؟__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});








client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© SKOLR Bot:heart: ')
      .setFooter(' اوامر الادمنيه ')
	  .addField('-bc', `لخاصية البرودكستات`)
	  .addField('-mute', `لاعطاء الشحص ميوت`)
	   .addField('-band', `لاعطاء الشخص باند`)
	   .addField('مسح', `لمسح الشات كامل`)
	   .addField('-cl', `لقفل الشات`)
	   .addField('-op', `لفتح الشات`)
		  
      .setFooter('======================================================')
      .setFooter('اوامر الاعضاء')
      .addField('-invite', `لاضافة البوت الى سيرفرك`)
	  .addField('رابط', `يعطيك رابط السيرفر `)
	  .addField('-تقديم', `'ViP++'لتقديم على رتبة `)
	  .addField('-roles', `لمعرفة الرتب الي في السيرفر`)
      .addField('-avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
      .addField('-2avatar', `الافتار عن طريق المنشن`)
	  .addField('-server', `يجبلك معلومات السيرفر`)
	  .addField('-id', `يجبلك الملف الشخصي حقك`)
	  .addField('-say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('-ping', `يقلك كم بنق البوت`)
      .addField('-support', `سيرفر الدعم`)
      .setFooter('======================================================')
      .setFooter('اوامر تحت الصيانه(يمكنك تجربتها) وشكرا')
      .addField('-غرد', `للتغريد`)
      .addField('-embed', `البوت يكرر الكلام الي قلته ب امبد`)
  message.author.send({embed});

 }
});




client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
});














//wlc


 
    const devs = ['503940043237359622'];
 
client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@503940043237359622> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'Soon');
 
    } else if(message.content.startsWith(prefix + 'setWatch')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});
 
      } else if(message.content.startsWith(prefix + 'setList')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});
 
      } else if(message.content.startsWith(prefix + 'setplay')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});
 
      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);
 
      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);
 
 
      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: Select a situation');
        client.user.setStatus(argresult);
 
 
    }
 
  });

//wlc




client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© SKOLR Bot:heart: ')
      .addField('سيرفر الدعم الفني', `  https://discord.gg/un5t5NR  `)
  message.author.send({embed});

 }
});





var prefix = "-";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});




client.on('message' , message => {
    if(message.content === '-voice') {
        message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
    }
    });






const TOKEN = "NTAzOTQwMDQzMjM3MzU5NjIy.Dtb9wA.O7oRAmIIswzOU66869jWx1l0byA";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('-' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }






  client.on('message', async message => {
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "invite")) {
      if(!args) return message.reply('**حدد اسم دعوة**');
      message.guild.fetchInvites().then(i => {
        let inv = i.get(args[0]);
        if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
        var iNv = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField('# - صاحب الدعوة',inv.inviter,true)
        .addField('# - روم الدعوة',inv.channel,true)
        .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
        .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
        .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
        .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
        message.channel.send(iNv);
      });
    }
  });





client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` SKOLR Bot
 .`, 'https://b.top4top.net/p_6021qh431.jpg')

  message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
    if (message.content === "-roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});







   var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});










const Client = new Discord.Client();








client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Skolr BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`in 1 server -help`,"")
   client.user.setStatus("onLine")
});








 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});














client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "غرد") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© . :SKOLR || Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});











var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }



if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});















client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});











var prefix = "-";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});














  var prefix = "-";
    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});






client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith(prefix + "وقت")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");

}
});


















client.on('message', message => {
  if (message.content.startsWith("-readyserver")) {
   if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
   message.guild.createRole({
name: 'King',
color: 'RANDOM',
position: (1),
permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
  name: 'Prince',
  color: 'RANDOM',
  position: (2),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
      'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
       'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
  name: 'Commander',
  color: 'RANDOM',
   position: (3),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
  name: 'Admin',
  color: 'RANDOM',
  postion: (4),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Vip',
  color: 'RANDOM',
  postion: (5),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Active',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**')
.catch(console.error);
  }
});
client.on('message', message => {
  if (message.content.startsWith("--readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
   message.guild.createChannel('rules', 'text')
   message.guild.createChannel('welcome', 'text')
   message.guild.createChannel('chat', 'text')
   message.guild.createChannel('youtubers', 'text')
   message.guild.createChannel('giveaway', 'text')
   message.guild.createChannel('shop', 'text')
   message.guild.createChannel('bot', 'text')





message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});

client.on('message', message => {
  if (message.content.startsWith("---readyserver")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr 1 ╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr 2╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr 3╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr 4╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr  5╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Driftr  6╠', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
  }
});

























//











const replyForMention = [    "ايش تبي",    "سوي -help",    ]

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(replyForMention);
    }
});












//reply 





client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setreply")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| من فضلك اكتب الرد الان... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Autoreply Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Reply:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    reply[message.guild.id] = {
        msg: thisMessage,
        reply: boi,
        onoff: 'On'
    }
    fs.writeFile("./replys.json", JSON.stringify(reply), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})            
client.on('message', async message => {
            if(!reply[message.guild.id]) reply[message.guild.id] = {
          onoff: 'Off'
        }
          if(reply[message.guild.id].onoff === 'Off') return;
   if(message.content === reply[message.guild.id].msg) {
       message.channel.send(reply[message.guild.id].reply)
   }}
)


//reply 









//replay image


client.on('message', message => {
            if (message.content === 'ق1') {
              message.channel.sendFile("./5.png");
            }
         });





         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.sendFile("./5bz.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'حشيش') {
              message.channel.sendFile("./2.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.sendFile("./WLC.png");
            }
         });
         
         
         
         
         
         
         
         
         
                 client.on('message', message => {
            if (message.content === 'ترحيب') {
              message.channel.sendFile("./1.jpg");
            }
         });


//replay image






//top

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;
 
  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  if(args[0] === `${hero.config.prefix}top`) {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
    let _topText = as(_textArray, 'points', { reverse: true });
    let _topVoice = as(_voiceArray, 'points', { reverse: true });;
    let topRoyale = new Discord.RichEmbed();
    topRoyale.setAuthor(message.author.username, message.author.avatarURL);
    topRoyale.setTitle('-" top');
    //topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 TEXT 💬**`, _topText.map(r => `**\`.${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.addField(`**TOP 5 VOICE 🎙**`, _topVoice.map(r => `**\`.${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});


















//


var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

//


















//invite

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const channel = member.guild.channels.find("name", "welcome");
     channel.send(`<@${member.user.id}> ** joined; ** Invited by ** <@${inviter.id}> ** `);
  });
});

//invite














//log


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'اسم الروم اللي توصله المعلومات')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ميوت صوتي`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك الميوت الصوتي `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ديفن أو سمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك عنهه الديفن أو السمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});

//log


//bot-directories


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var RaYaN= new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``New Message in private``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("539783924352548885").send({embed:SKolr});
    }
});


//bot-directories















client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});








//mw8t-temp


client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('#temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '#temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
                     if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
                    if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
    MOVE_MEMBERS:true,
     VIEW_CHANNEL:true
      })
       neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
          CONNECT:false,
           SPEAK:false
        })
               }
              })
             })
           })
          }
         fs.writeFile("./temp.json", JSON.stringify(temp), (err) => {
        if(err) console.error(err)
       })
      });
	  
	  
	  
	  
	  
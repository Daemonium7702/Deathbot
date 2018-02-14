message.channel.send(finalMessage);
  }
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
}

  if(command === "invite") {
  client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'ADMINISTRATOR', 'MENTION_EVERYONE'])
  .then(link => {
    console.log(`Generated bot invite link: ${link}`);
  }).catch(console.error);
    message.channel.send('This is for the bot creator. Use .invitemepls for the invites')
  }
  if(command == "invitemepls") {
    return message.reply('To invite me to another server, https://discordapp.com/oauth2/authorize?client_id=335336705093533698&permissions=133152&scope=bot And to join the support server, https://discord.gg/E2QfWKe  Have fun!');
  }
    if(command === "test"){
     message.channel.send('I promise you, I am working');
  }
  if(command === "helpsay"){
    message.channel.send('This command makes the bot repeat after you. It also deletes the original. `usage: .say[word or phrase here]`')
  }
  if(command === "line"){
    message.delete().catch(O_o=>{}); 
   message.channel.send('`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`');
  }
     if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage); 
  }
  if(command == "o") {
    const oldMessage = args.join(" ");
    const newMessage = oldMessage.replace(/a|e|i|o|u/gi, "o");
    message.channel.send(newMessage);
  }
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!"); 
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
  }
    
  if(command === "<6"){
    message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠐⠁⠁⠁⠁⠁⠁⠁⠈⠁⠠⠁⠐');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠐⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠈⠁⠁⠁⠁⢀⠁⠐⠁⠁⠁⠐⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢀');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢀⠁⠁⠁⠠⠁⠁⠁⠁⠁⠁⠁⢀⠁⠁⠁⠁⠄⠁⠁⡀⠁⢀⠁⠐');
message.channel.send('>⠁⠁⠁⠁⠁⡀⠁⠁⠁⠁⠁⠁⡀⠁⠠⠁⠁⢀⠁⠁⠄⠁⠂⠁⠁⠁⠄⠁⢁⠠⠁⠄⡈⡀⡂⠄⢌⠠⠁⠄⠁⠄⢀⠐');
message.channel.send('>⠁⠁⠠⠁⠁⠁⠁⠠⠁⠁⠁⠁⠁⠁⠁⠁⠂⢀⠁⠁⠁⡁⠐⠁⠐⢀⢐⠨⡐⡌⡪⡰⣐⢢⢊⡪⢐⠌⢂⢁⠂⠐⠁⠄⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢀⠁⠈⠁⠐⠁⠠⠁⠁⠐⢀⠁⢁⠈⢄⠢⡪⡪⣪⢪⢪⢪⢢⢣⢱⢘⠔⡡⠂⡂⠌⡈⠄⠐⠁⠂');
message.channel.send('>⠁⠁⠁⠁⠐⠁⠁⠁⠁⠁⠁⠠⢀⠐⠁⠐⠁⢀⠁⠂⠁⠄⠂⠌⡔⡭⡪⡇⣗⢕⢇⢇⢇⢇⢣⢊⡪⡰⠡⠂⡂⡂⠅⡈');
message.channel.send('>⠄⠁⠁⠁⠁⠁⠁⠁⠁⠠⠁⠄⠠⠁⠁⢀⠁⠁⠁⢀⢁⢢⢱⢹⢜⡮⣫⣺⢪⡣⡳⡱⡱⡱⡱⡱⡰⢡⢑⢅⠢⡂⠅⢀⠁⠐');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⡀⠁⠁⠁⠄⢐⠨⠁⠁⡀⠄⡡⡄⣆⢧⡳⣝⡵⣫⢞⡼⣱⢝⢜⡕⣕⢕⢕⢕⢜⠔⡱⡐⢅⠢⢁⠁⢀');
message.channel.send('>⠄⠁⠁⠁⠁⠁⠁⠁⠁⠂⠁⠂⢔⠨⡨⡢⣪⢧⡳⣝⢮⡳⣝⣞⡮⣗⢽⡪⣺⢕⡕⡧⣣⢳⢱⢱⢑⢕⢅⠎⡢⢁⠂⡀⠁⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠄⠁⠄⠅⡱⡰⣹⢜⣝⢮⣳⢝⣞⣽⢮⢗⡷⡽⣪⣗⢽⢜⡮⡺⣱⢣⡫⣪⢪⢪⢪⢪⢪⢐⠅⢐⠁⠁⠂');
message.channel.send('>⠁⠁⠁⠁⠁⠐⠁⡀⠁⢑⢅⢎⢞⡼⣱⡳⡽⣪⢗⡧⣳⡫⡯⣺⡫⡧⣳⡫⡧⣫⢮⢺⢱⢕⢕⢕⢕⢕⠕⡕⠅⡊⠔⠁⠂⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⡀⠁⢑⢜⢜⢕⢝⢜⢜⢕⠕⠝⠸⢑⢙⠕⡕⡯⡺⡵⣹⢜⢎⢎⠎⢊⠊⠌⠠⠁⢀⠑⠈⠌⠐⠈⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠈⠁⠁⠄⠡⡪⡪⡪⡪⠊⡢⠢⠪⠨⠁⢂⠢⢡⢪⢪⡺⡵⣣⢇⡣⠂⠅⠁⡀⠂⠄⠠⠐⠁⠁⠂⠈⡀⠁⠁⠂');
message.channel.send('>⠁⠁⠁⠁⠁⠂⠁⠐⠁⡅⡇⡇⡣⡐⡡⣐⡀⠂⠁⢈⢆⠜⢌⡎⡮⡺⣝⢞⡎⡢⠁⢈⠠⢀⢕⢽⢀⠁⠁⢀⠂⡀⢀⠁⠂⠁⠁⠁⠁⠄');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠄⠐⠠⡪⡪⡪⡢⡪⡪⡪⡲⡔⡥⡪⡪⡪⣣⢯⢪⣳⢽⢕⡗⡅⠌⠠⠨⢢⠣⡫⡱⢪⠨⠂⡊⠄⠁⡐⠁⡁⠁⠁⠂');
message.channel.send('>⠁⠁⠠⠁⠐⠁⠁⢀⢪⢪⢺⡱⣝⢮⡺⣪⣺⢜⡮⡎⣞⡼⣪⡺⡕⣗⡽⣕⢏⡎⠄⠡⢈⠢⡣⡣⡣⢣⢑⢕⢐⠅⡅⡂⠅⠁⡀⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠄⡕⡕⡗⣝⢮⡳⣝⢮⡺⣕⢯⢞⡵⣫⣺⡺⣹⡪⣞⢷⢝⡌⡂⢁⠐⡨⠢⡃⡇⡇⡣⢣⢑⢅⠆⡑⡈⢀');
message.channel.send('>⠁⠁⠐⠁⠁⠁⡀⠁⡣⡫⡺⡕⡯⡮⡳⣝⡮⣳⣫⡯⣞⢵⡣⡯⡮⣺⢵⡫⣇⢇⢂⠂⠐⠨⠨⢊⢎⢜⠜⡸⡐⡅⡪⢐⠐');
message.channel.send('>⠁⠁⠈⠁⠄⢀⠁⠄⠸⡸⡱⣫⢺⡹⣕⢗⣽⡪⣞⢮⢗⣽⡪⡧⣳⢕⣗⡽⣪⢎⠄⠄⢁⠈⠌⡪⠰⡡⡃⡇⡊⡢⡂⠅⡀⠁');
message.channel.send('>⠁⠁⠈⠄⡂⡕⣐⢄⠨⢪⢪⢎⢧⢫⡺⡕⣗⢽⢕⣟⢵⡳⣫⡺⡜⡕⡗⡏⡧⡓⠅⠂⠐⠁⠐⠨⢊⠔⢅⢊⠢⢂⠂⠂⠁⠁⠂');
message.channel.send('>⠁⠁⠁⠁⠊⠪⠢⠊⠊⠬⡪⡪⣪⢣⡫⣺⢕⡯⣳⢽⢕⣟⣵⢱⢁⢅⢅⡃⡑⠐⠁⠁⡁⠈⠁⡁⡂⡣⠡⠂⢁⠂⠄⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⢌⠎⡎⡮⣪⢺⡱⣫⢞⡵⣫⢗⣵⡳⣝⢮⡺⣕⢇⡇⡎⡐⠠⡐⡨⢐⠰⡨⢐⠡⠑⡀⠐⠁⠁⠈');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠐⢍⢎⡮⡪⣣⠯⣪⢗⡽⣕⢯⡺⡮⣳⡫⣞⣵⢣⢯⡪⡢⡣⢪⠸⡨⢊⢔⠡⠊⠄⠁⠄⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠨⢸⢸⢸⢱⢣⡫⡎⣗⢵⢳⡫⣞⢯⡳⡝⡞⢎⠧⡳⠹⡘⠜⡸⠨⡊⢔⠡⡊⠌⠁⠄⠁⠁⠄⠁⠁');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢕⢕⢝⡜⣕⢕⡝⡼⡩⡃⡋⠎⢑⠨⡐⡨⢐⢈⢀⢂⠄⡁⡀⡁⠁⠁⢐⢐⠡⠁⠁⠠');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠐⢕⢕⠵⡱⡱⡕⡕⡇⡧⣫⢎⢎⡞⣜⢜⡜⡔⡕⡜⡌⡂⡂⡂⠅⡈⠄⡂⠅⠁⠄⠁⠁⠁⠂');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢅⠣⡫⢪⢪⢪⢪⢺⢱⢕⢽⢱⢕⢕⢕⢑⡑⡑⡁⡊⠄⢐⠠⠐⠠⠐⠁⠄⠁⠁⠁⢀');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠡⡱⠱⡱⡡⡣⡣⡣⡫⡪⡣⣣⢳⢱⢱⢊⢆⢎⠜⡨⡂⠅⡁⠐⢀⠁⢀⠁⠐');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⢂⢕⠸⡘⡜⡜⡼⡸⣸⢪⢎⡞⣜⡮⣺⢪⢎⢎⢆⢪⠐⡀⡂⠠');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠕⡔⡪⢐⠡⡣⢫⢪⡺⢵⢕⡯⡺⣺⢕⢝⡜⡜⡔⡅⡊⠄⡀⠂⠈⠁⠁⠄⠁⠠');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⡣⢣⢣⢣⢒⢌⠌⠪⡪⡣⡇⡏⡏⡮⡱⢣⠣⡣⠣⠊⡐⠁⠁⠐');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⡠⡸⡸⡸⡸⡸⡸⡸⡰⡨⠨⡘⢜⠸⡈⡊⠔⠡⠊⢈⠂⠁⠈⠁⠁⠁⠁⠁⠄');
message.channel.send('>⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⡄⡔⡜⢌⢎⢎⢎⢎⢎⢎⢆⢇⢕⢰⠠⡂⢄⠠⠁⠄⠈⠁⠁⠁⡀⠁⠁⠐⠁⠁⠁⠁⠈');
message.channel.send('>⠁⠁⠁⠁⠄⠁⠁⢄⢪⢊⢎⢜⢌⢎⢜⢜⢜⢜⢜⢜⢜⢔⢕⢅⢇⠎⢔⠨⠐⠁⠄⠁⡀⠁⠁⠁⠄⠁⢀⠁⠐');
message.channel.send('>⠠⠁⠁⠁⠄⠁⠁⢇⢕⢕⢕⢕⢅⢎⢎⢎⢎⢎⢎⢎⢎⢎⢜⢜⢜⠜⡰⠡⠁⡂⠐⢀⠁⠐⠁⢀⠁⠄⠁⠁⠁⠠⠁⠁⠂');
message.channel.send('>⠁⠄⠈⠁⠠⠁⠁⠡⢣⢣⢣⢣⢪⠢⡣⢣⢣⢣⢳⢱⢱⢱⢱⢱⢱⢱⢑⠕⡡⢂⠡⠁⠄⠁⠄⠁⠄⠁⡀⠁⢀');
message.channel.send('>⠁⠁⢀⠈⠁⠁⡈⠁⠡⠣⡣⡣⡪⡪⡪⡪⡪⡪⡪⡪⢕⢕⢕⢕⠕⡕⢅⠇⢆⢑⠨⠁⡀⠂⠠⠁⠄⠂⠁⠄⠁⡀⠁⠁⠁⠂');
message.channel.send('>⠐⠁⠁⠁⠈⠁⢀⠁⠂⠈⠨⢢⢣⢪⢪⢪⢢⠣⡣⡣⡣⡣⡣⡣⢱⠡⡑⠅⠅⡐⢀⠂⠄⢈⠐⡈⠠⠁⠐⠁⠄⠁⠄⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⡀');
message.channel.send('>⢀⠁⠁⠁⠁⠁⡀⠠⠈⠁⠄⢀⠈⠪⢸⢸⢘⢜⢌⠎⡎⡜⡔⡑⢕⠡⡊⠌⢄⠂⠅⡐⠐⠐⡀⡂⠐⠈⠄⠡⠁⠁⠁⠁⠁⠁⠁⠁⠂⠁⠁⠐⠁⠁⠁⠁⠁⠈⠁⠁⠂');
message.channel.send('>⠁⠁⠐⠁⠐⠁⠁⠁⠄⠁⠄⠁⠠⠁⠠⠈⠘⠰⡑⡕⢕⢱⢘⢌⠢⡁⡂⠅⠂⠌⢀⢂⠅⢅⠂⠄⠡⠨⠈⠁⠁⠁⠁⠠⠁⠁⠁⠁⠁⠁⠁⠁⠁⠠⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠐⠁⢀⠁⢀')
  }
  if(command === "dna"){
    message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");
message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");          
message.channel.send("(   ͡° ͜ʖ ͡° )(   ͡° ͜ʖ ͡° )\n");                             
message.channel.send("-(   ͡° ͜ʖ ͡° )  ͡° ͜ʖ ͡° )\n");                   
message.channel.send("--(   ͡° ͜ʖ ͡° )  ͜ʖ ͡° )\n");        
message.channel.send("---(   ͡° ͜ʖ ͡° )  ͡° )\n");                          
message.channel.send("-----(   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("----( (   ͡° ͜ʖ ͡° )\n");                     
message.channel.send("---(   (   ͡° ͜ʖ ͡° )\n");                    
message.channel.send("--(   ͡° (   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("-(   ͡° ͜ʖ (   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("(   ͡° ͜ʖ ͡° (   ͡° ͜ʖ ͡° )\n");                    
message.channel.send("(   ͡° ͜ʖ ͡° )(   ͡° ͜ʖ ͡° )\n");                        
message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");
message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");
message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");          
message.channel.send("(   ͡° ͜ʖ ͡° )(   ͡° ͜ʖ ͡° )\n");                             
message.channel.send("-(   ͡° ͜ʖ ͡° )  ͡° ͜ʖ ͡° )\n");                   
message.channel.send("--(   ͡° ͜ʖ ͡° )  ͜ʖ ͡° )\n");        
message.channel.send("---(   ͡° ͜ʖ ͡° )  ͡° )\n");                          
message.channel.send("-----(   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("----( (   ͡° ͜ʖ ͡° )\n");                     
message.channel.send("---(   (   ͡° ͜ʖ ͡° )\n");                    
message.channel.send("--(   ͡° (   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("-(   ͡° ͜ʖ (   ͡° ͜ʖ ͡° )\n");                      
message.channel.send("(   ͡° ͜ʖ ͡° (   ͡° ͜ʖ ͡° )\n");                       
message.channel.send("(   ͡° ͜ʖ ͡° )(   ͡° ͜ʖ ͡° )\n");                        
message.channel.send("(   ͡° ͜ʖ ͡° ) (   ͡° ͜ʖ ͡° )\n");                    
  }     
  if(command === "ban") {
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  // COMMAND NOT FUNCTIONAL BELOW>!! USE SPARINGLY //
  if(command === "purge") {
    // This command SHOULD remove all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
     
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
   const msgs = await message.channel.fetchMessages({limit: 100});
         message.channel.bulkDelete(msgs);
  }
});


client.login(config.token);

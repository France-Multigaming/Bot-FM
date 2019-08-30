const Discord = require("discord.js");

// Client instance
var client = new Discord.Client();

//
const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvé !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

    client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} event en chargement`);
    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));

    });
});

// Welcome message
   client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#000099")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Salut "+ user + "! Bienvenue dans la communauté de **France Multigaming** 🎉🤗 ! Afin de voir __***les salons de jeux***__ te correspondant, merci de te reporter dans <#584335406917746689> . Je t'invite aussi à prendre connaissance des <#584335354031636481> et <#584326401935671299> ainsi que les règles pour les jeux auxquels tu pourrais participer :innocent:. Bon jeu!")
        .setFooter("France Multigaming");
    user.guild.channels.get("584055404955303936").send(joinEmbed);

var role = member.guild.roles.find('name', 'User');
member.addRole(role)

});

// Config
var prefix = "/";

// Comands
client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Liste des commandes :__**\n\n ***__Utilisateur__***\n\n**/ping** `Savoir si le Bot est en ligne et obtenir sa latence.`\n\n**/stats** `Obtenir les statistiques d'un utilisateur.`\n\n ***__Admin__***\n\n**/kick** `Expulser utilisateur via le Bot`\n\n**/ban** `Bannir utilisateur via le bot`")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "salut"){
        message.channel.send("Bonjour " + message.author.username + "!")
    }

    if (message.content === prefix + "quel âge à tu?"){
        message.channel.send("j'ai été créé le 21/07/2019 à 12h00.")
    }

    if (message.content === prefix + "aurevoir"){
        message.channel.send("A plus tard " + message.author.username + ".")
    }

    if (message.content === prefix + "au revoir"){
        message.channel.send("A plus tard " + message.author.username + ".")
    }

    if (message.content === prefix + "bienvenue"){
        message.channel.send("Salut {user} ! Bienvenue dans la communauté de **France Multigaming** 🎉🤗 ! Afin de voir __***les salons de jeux***__ te correspondant, merci de te reporter dans <#584335406917746689> . Je t'invite aussi à prendre connaissance des <#584335354031636481> et <#584326401935671299> ainsi que les règles pour les jeux auxquels tu pourrais participer :innocent:. Bon jeu!")
    }

    if (message.content === prefix + "test"){
        var embed = new Discord.RichEmbed()
            .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬ RÔLE ▬▬▬▬▬▬▬▬▬▬▬▬\n\nInteragissez à ce message avec les réactions qui correspondent aux jeux auxquels vous jouez ou pour lesquels vous souhaitez être mentionables et notifiés.\n\nCela vous permet d'accéder aux différents salons de jeu du Discord.\n\nRéagissez  <a:ARKFM:589972097443561494> pour rejoindre <@&594839830177775616>\nRéagissez  <a:ECOFM:584333052780478464> pour rejoindre <@&594839647696453642>\nRéagissez  <a:RUSTFM:594838078364057620> pour rejoindre <@&594824906777165824>\nRéagissez  <a:FS19FM:589972120759435290> pour rejoindre <@&594840007764606976>\nRéagissez  <a:CONANFM:584333675378900992> pour rejoindre <@&594840202929897472>\n\n")
            .setFooter("▬▬▬▬▬▬▬▬▬▬▬ France Multigaming ▬▬▬▬▬▬▬▬▬▬▬")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "bienvenue2"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setAuthor(user.user.username, user.user.displayAvatarURL)
            .setDescription("Salut {user} ! Bienvenue dans la communauté de **France Multigaming** 🎉🤗 ! Afin de voir __***les salons de jeux***__ te correspondant, merci de te reporter dans <#584335406917746689> . Je t'invite aussi à prendre connaissance des <#584335354031636481> et <#584326401935671299> ainsi que les règles pour les jeux auxquels tu pourrais participer :innocent:. Bon jeu!")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }
    
    if (message.content === prefix + "foot"){
        message.channel.send("Sport opposant deux équipes de onze joueurs, où il faut faire pénétrer un ballon rond dans les buts adverses sans utiliser les mains (au Canada, on dit soccer).")
    }
    
});

// Authentification
client.login(process.env.TOKEN);

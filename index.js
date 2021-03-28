const Discord = require("discord.js");

// Client instance
var client = new Discord.Client();

// Initialize commands collection
client.commands = new Discord.Collection();

for(const x of ['ban', 'kick', 'clear', 'ping']) {
    console.info('Load command', x);
     // Build path
    const path = `./Commandes/${x}.js`;
    // Import command
    const command = require(path);
    // Inject command
    client.commands.set(command.help.name, command);
}

for(const x of ['message', 'ready']) {
    console.info('Load event', x);
     // Build path
    const path = `./Events/${x}.js`;
    // Import event
    const event = require(path);
    // Inject event
    client.on(x, event.bind(null, client));
}
// Welcome message
client.on("guildMemberAdd", user =>{
    user.guild.channels.cache.get(config.greeting.channel).send("Salut "+ user + "! Bienvenue dans la communauté de **France Multigaming** 🎉🤗!\n\n :arrow_right: <#584335406917746689> Pour voir les salons de jeux te correspondant.\n\n :arrow_right: <#584335354031636481> Pour prendre connaissance des règles de la communauté.\n\n :arrow_right: <#584326401935671299> Pour voir les dernières infos.");
});

// Config
const prefix = "/";

// Help
client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Liste des commandes :__**\n\n ***__Utilisateur__***\n\n**/ping** `Savoir si le Bot est en ligne et obtenir sa latence.`\n\n**/stats** `Obtenir les statistiques d'un utilisateur.`\n\n ***__Admin__***\n\n**/kick** `Expulser utilisateur via le Bot`\n\n**/ban** `Bannir utilisateur via le bot`\n\n**/clear** `Supprimer le nombre de message souhaité`")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "serveurs"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Serveurs en ligne :__**\n\n ***__FiveM__***\n\n ***__ECO__***\n\n ***__7Days to Die__***\n\n ***__Conan Exiles__***\n\n")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "serveur"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Serveurs en ligne :__**\n\n ***__FiveM__***\n\n ***__ECO__***\n\n ***__7Days to Die__***\n\n ***__Conan Exiles__***\n\n")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "bvn"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Salut @user ! Bienvenue dans la communauté de **France Multigaming** 🎉🤗!\n\n :arrow_right: <#584335406917746689> Pour voir les salons de jeux te correspondant.\n\n :arrow_right: <#584335354031636481> Pour prendre connaissance des règles de la communauté.\n\n :arrow_right: <#584326401935671299> Pour voir les dernières infos.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg1"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Salut Visiteur! Bienvenue dans la communauté de **France Multigaming** 🎉🤗!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg2"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Comme tu peux le constater ici tu ne vois pas grand chose.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg3"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Il va falloir me prouver que tu n'es pas un :robot: robot!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg4"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Pour commencer reagit avec :white_check_mark: sous le message.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg5"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Super! On y est presque.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg6"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Connait-tu le système d'auto-role?")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg7"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Il te suffit de réagir avec certain message pour te voir attribuer un rôle")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg8"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Ce rôle te donne accés aux salons rattaché!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg9"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Essai ici:<#782704015255404556>.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg10"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Super! Si tu n'est pas un robot réagit avec :robot: sous le message.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg11"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Vous pouvez choisir votre métier!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg12"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("__**RAPPEL AUX GERANTS**__: Pour obtenir vos accès à la categorie passez par le staff FiveM.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "msg13"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Pour accèder à la boutique aux dons veuillez vous connecter ou creer un compte.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "fivem"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre FiveM RP!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "eco"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre ECO!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "fs19"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre FS19!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "conan"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre CONAN!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "rust"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre RUST!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "eco"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre ARMA 3 MILSIM!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "7days"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre 7 DAYS TO DIE!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "ark"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre ARK!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "hellion"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre HELLION!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "minecraft"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre MINECRAFT!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "fm"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux faire parti de la communauté **France Multigaming**!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "eve"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Je veux rejoindre EVE Militis!")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "gend1"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Bienvenue dans la gendarmerie, pour pouvoir continuer votre parcours d'engagement veuillez cocher :oncoming_police_car: sous le message.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "0"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("Voici un tuto dans les détails pour savoir comment vider votre cache proprement sur FiveM.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "1"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**1.** Trouver le Logo **FiveM** sur votre bureau.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "2"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**2.** Faites un clic droit sur le Logo et sélectionné Ouvrir l’emplacement du fichier.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "3"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**3.** Vous trouverez 3 Fichiers. Sélectionnez Fivem Application Data.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "4"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**4.** Dans le Dossier Fivem Application Data , se trouve un dossier qui se nomme crashes supprimer tout les fichiers dedans.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "5"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**5.** Dans le Dossier Fivem Application Data , se trouve un dossier qui se nomme logs supprimer tout les fichiers dedans.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "6"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**6.** Dans le Dossier Fivem Application Data , se trouve un fichier qui se nomme cache.xml supprimer le.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "7"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**7.** Dans le Dossier Fivem Application Data , se trouve un dossier qui se nomme cache.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "8"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**8.** Dans votre Dossier cache vous devrez supprimer tous les dossiers sauf celui nommé game.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "9"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**9.** Vider votre corbeille.")
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t1"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/optimized/2X/a/a1157a8adb06005d0855c7afa03f6603b29ed843_2_438x499.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t2"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/e/e5c6f43250fcc49dabe079f1e004b7cbf59c6a9e.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t3"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/9/9e10ebf6cb3c2c34b8e5e4f64d38aaabdfa9c174.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t4"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/3/3929092ec4eef9aa4a3a4fe23d7eacffcc51e318.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t5"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/9/95fe69cd94b25f2eeea0a37ea99a2d4cf14d002e.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t6"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/6/61abd958b2616dbbaecabd82285f51a346302c04.png'])
        message.channel.sendEmbed(embed);
    }
});

client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "t7"){
        var embed = new Discord.RichEmbed()
	    .attachFiles(['https://fivem-france.net/uploads/default/original/2X/9/9582148928520bc6f4c458a6265986e06f0aa6a4.png'])
        message.channel.sendEmbed(embed);
    }
});

// Authentication
client.login(process.env.TOKEN);

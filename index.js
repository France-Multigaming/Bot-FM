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

    if (message.content === prefix + "msg14"){
        message.channel.send('Bienvenue chez **France Multigaming**\n\n la communauté multigaming française avec une multitude de joueurs qui se sont réunis sous une seule bannière pour jouer ensemble et construire des amitiés durables!\n\n Chacun de nous a une passion pour le jeu et nous cherchons toujours à élargir nos rangs dans tous nos groupes de jeux.\n\n Notre communauté abrite une variété de jeux! Comme vous pouvez le voir ci-dessus, nous prenons en charge plusieurs serveur de jeux, chacun avec une base de joueurs unique de 50% ou mieux. Ainsi, bien qu'il y ait des membres dans de nombreux groupes, vous pouvez compter sur un groupe dédié pour chaque jeux.\n\n :7DAYS: 7DAYS | :ARK: ARK  | :ARMA3: ARMA 3 | :CONAN: CONAN | :ECO: ECO | :FIVEM: FIVEM | :FS19: FS19 | :HELLION: HELLION | :MINECRAFT: MINECRAFT | :RUST: RUST\n\n Nous cherchons toujours à héberger de nouveaux jeux pour construire et maintenir des équipes solides et des amitiés qui feront leur marque dans le monde du jeu. Pour y parvenir, nous sommes toujours à la recherche de joueurs talentueux!\n\n Le plus serais que les joueurs viennent sur **Discord** lorsqu'ils jouent à des jeux.\n\n @everyone');
    }
});

// Authentication
client.login(process.env.TOKEN);

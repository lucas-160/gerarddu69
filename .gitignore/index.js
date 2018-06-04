const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("/help");
    console.log("Connecté");
    bot.channels.get("450033147325841408").send("```Le bot est maintenant connecté\n\nDernière mise à jour : 03/06/2018 19:05\n\n/help pour plus d'infos```").then(msg => {
        msg.delete(10000)
        });
    bot.channels.get("451831859966377984").send("```Le bot est maintenant connecté\n\nDernière mise à jour : 03/06/2018 19:05\n\n/help pour plus d'infos```").then(msg => {
        msg.delete(10000)
        });
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Informations du Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("Créé le", message.guild.createdAt)
        .addField("Tu l'as rejoint le", message.member.joinedAt)
        .addField("Nombres d'utilisateurs", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
    
    if (message.content.startsWith(prefix + "1sondage")) {
        message.delete()
        if(message.author.id == "422744934303531008" || message.author.id == "271279739296153600" || message.author.id == "397707402675355650") {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec ✅")
                .setColor("0x0000FF")
            message.channel.sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
            }).catch(function() {
            });
        }else{
            return message.reply("Tu n'as pas la permission d'effectuer cette commande.")
        }
    }
    
    if (message.content.startsWith(prefix + "2sondage")) {
        if(message.author.id == "422744934303531008" || message.author.id == "271279739296153600" || message.author.id == "397707402675355650") {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0x0000FF")
            message.channel.sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
        }else{
            return message.reply("Tu n'as pas la permission d'effectuer cette commande.")
        }
    }
    
    if (message.content.startsWith(prefix + "3sondage")) {
        if(message.author.id == "422744934303531008" || message.author.id == "271279739296153600" || message.author.id == "397707402675355650") {
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec les mentions")
                .setColor("0x0000FF")
            message.channel.sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("😶")
                message.react("☹")
            }).catch(function() {
            });
        }else{
            return message.reply("Tu n'as pas la permission d'effectuer cette commande.")
        }
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - ___/help___ \n - ___/infodiscord___ \n\nCommandes Admins:\n - ___/restart___\n - ___/1sondage___ : Sondage à une seule mention\n - ___/2sondage___ : Sondage à deux mentions\n - ___/3sondage___ : Sondage à trois mentions\n\nCe bot est toujours en développemment donc n'hésitez pas à proposer des suggestions de nouvelles commandes ou des bugs à corriger");
    }

    if (message.content === "Salut" || message.content === "salut" || message.content === "slt"){
        message.channel.sendMessage("Bien le bonjour. 😉");
        console.log("Commande Salut effectuée");
    }

    if (message.content === "bla"){
        message.channel.sendMessage("bla bla");
        console.log("Commande bla effectuée");
    }

    if (message.content === "cc" || message.content === "coucou"){
        message.channel.sendMessage("Coucou");
        console.log("Commande Coucou effectuée");
    }

    if (message.content === "à+" || message.content === "a+" || message.content === "Au revoir"){
        message.channel.sendMessage("A bientôt");
        console.log("Commande Au revoir effectuée");
    }
    
    if (message.content === prefix + "restart") {
        message.delete()
        console.log("RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART RERSTART RESTART RESTART RESTART ");
        message.channel.sendMessage("Redémarage du bot imminent (ou pas)");
    }
});


bot.on('guildMemberAdd', member => {
    bot.channels.get("450033147325841408").send("Bievenue",+ member.user.username)
});

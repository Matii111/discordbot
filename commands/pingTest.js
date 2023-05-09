const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    async execute(interaction) {
        // Verificar si el autor del mensaje tiene un rol con un ID específico
        const roleId = '1105336716799250452'; // Reemplaza con el ID del rol específico
        const authorHasRole = interaction.member.roles.cache.has(roleId);

        if (authorHasRole) {
            // Ejecutar el código del comando solo si el autor tiene el rol específico
            return interaction.reply('Pong!');
        } else {
            // Responder con un mensaje indicando que el autor no tiene permiso para ejecutar el comando
            return interaction.reply('You do not have permission to use this command.');
        }
    },
};

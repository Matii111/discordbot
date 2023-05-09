const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkrol')
		.setDescription('Check if you have enough power'),
	async execute(interaction) {
		if (message.member.roles.cache.some(role => role.name === 'dev')) {
			// Ejecutar el código del comando restringido aquí
			message.channel.send('Este comando solo puede ser utilizado por miembros con el rol especificado.');
		  } else {
			// Enviar un mensaje de error si el autor no tiene el rol requerido
			message.channel.send('xd');
		  }
	},
};


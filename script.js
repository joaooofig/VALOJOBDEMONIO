// Troque este código caso o convite do servidor mude.
const discordInviteCode = "53hCGwUKC";

// Links que tentam abrir o aplicativo do Discord.
document.querySelectorAll("[data-discord-app]").forEach((link) => {
  link.href = discord://discord.com/invite/${discordInviteCode};
});

// Convite alternativo pelo navegador.
document.querySelectorAll("[data-discord-web]").forEach((link) => {
  link.href = https://discord.gg/${discordInviteCode};
});

import * as mc from "mojang-minecraft";

mc.world.events.tick.subscribe(() => {
      const byPassTag = "staff";

  for (const player of mc.world.getPlayers()) {
    if (player.hasTag(byPassTag)) return;
    if (
      Math.abs(player.location.x) > 30000000 ||
      Math.abs(player.location.y) > 30000000 ||
      Math.abs(player.location.z) > 30000000
    ) {
      player.runCommand(`tp "${player.nameTag}" 0 0 0`);
      player.runCommand(`tellraw @a {\"rawtext\":[{\"text\":\"§bStatic AntiCheat\n§7------------------------------\n§cPlayer: §f${player.nameTag}\n§cType of hack: §fCrasher\n\n§l§fREPORT TO ADMIN IMMEDIATLY!\"}]}`);
      player.runCommand(`kick "${player.nameTag}" You have been kicked for trying to "Crash the game", please turn off your hacks!`);
    }
  }
}
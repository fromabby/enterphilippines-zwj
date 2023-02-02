import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { SpawnInfo, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { WorldService } from 'ZEPETO.World';

export default class Character extends ZepetoScriptBehaviour {
  Start() {
      ZepetoPlayers.instance.CreatePlayerWithZepetoId(WorldService.userId, new SpawnInfo(), true);
  }
}
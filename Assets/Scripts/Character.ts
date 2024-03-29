import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SpawnInfo, ZepetoPlayers, LocalPlayer, ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { WorldService } from 'ZEPETO.World'; 
import { Collider, Collision, GameObject, Rigidbody, SphereCollider } from 'UnityEngine'

export default class CharacterController extends ZepetoScriptBehaviour {    
  Start() {      
    ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, new SpawnInfo(), true)

    ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {            
        let _player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer
    }) 
  }
}
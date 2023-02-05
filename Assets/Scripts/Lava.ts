import { Collider, Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Lava extends ZepetoScriptBehaviour {

  OnTriggerEnter(other: Collider) {
    const character = other?.gameObject?.GetComponent<ZepetoCharacter>()

    if(!!character) {
      character.Teleport(new Vector3(0,1,0), Quaternion.identity)
    }
  }
}
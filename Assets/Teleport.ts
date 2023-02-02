import { Collider, Quaternion, Vector3 } from 'UnityEngine';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Teleport extends ZepetoScriptBehaviour {
  OnTriggerEnter(other: Collider) {
    const character: ZepetoCharacter = other.GetComponent<ZepetoCharacter>()

    if(!!character) {
      character.Teleport(new Vector3(-5,5,0), Quaternion.identity)
    }
  }
}
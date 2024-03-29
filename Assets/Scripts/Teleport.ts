import { Collider } from 'UnityEngine';
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Teleport extends ZepetoScriptBehaviour {
  OnTriggerEnter(other: Collider) {
    const character: ZepetoCharacter = other.GetComponent<ZepetoCharacter>()

    if(!!character) {
      SceneManager.LoadScene('Level2')
    }

  }
}
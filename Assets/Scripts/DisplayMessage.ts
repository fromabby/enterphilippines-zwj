import { Collider } from 'UnityEngine';
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DisplayMessage extends ZepetoScriptBehaviour {
  OnTriggerEnter(other: Collider) {
    const character: ZepetoCharacter = other.GetComponent<ZepetoCharacter>()

    if(!!character) {
      SceneManager.LoadScene(2)
    }
  }
}
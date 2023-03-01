import { Collider, Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Lava extends ZepetoScriptBehaviour {

  OnTriggerEnter(other: Collider) {
    const character = other?.gameObject?.GetComponent<ZepetoCharacter>()

    if(!!character) {
      const str = SceneManager.GetActiveScene().buildIndex === 0 ? 'Level1' : 'Level2'
      SceneManager.LoadScene(str)
    }
  }
}
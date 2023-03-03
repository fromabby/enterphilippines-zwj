import { Collider } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Lava extends ZepetoScriptBehaviour {

  OnTriggerEnter(other: Collider) {
    const character = other?.gameObject?.GetComponent<ZepetoCharacter>()

    if(!!character) {
      if(SceneManager.GetActiveScene().name === 'Level1') {
        SceneManager.LoadScene('Level1')
      } else {
        SceneManager.LoadScene('Level2')
      }
    }
  }
}
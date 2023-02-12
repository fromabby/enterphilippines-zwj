import { Collider, Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Lava extends ZepetoScriptBehaviour {

  OnTriggerEnter(other: Collider) {
    const character = other?.gameObject?.GetComponent<ZepetoCharacter>()

    if(!!character) {
      const yPosition = SceneManager.GetActiveScene().buildIndex === 0 ? 1 : 0
      // character.Teleport(new Vector3(0,yPosition,0), Quaternion.identity)
      SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex)
    }
  }
}
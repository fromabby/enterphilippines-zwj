import { Collider, Color, GameObject, Quaternion, Vector3 } from 'UnityEngine';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Lava extends ZepetoScriptBehaviour {
  public static counter = 5;

  Start() {    

  }

  OnTriggerEnter(other: Collider) {
    const character = other.gameObject.GetComponent<ZepetoCharacter>()
    // const textbox = GameObject.Find('Canvas/Text').GetComponent<Text>()

    if(!!character) {
      if(Lava.counter <= 0) {
        return
      }
      character.Teleport(new Vector3(0,0,0), Quaternion.identity)
      // character already fell
      
      // textbox.text = String(--Lava.counter) // sets to 0
      // if(Lava.counter <= 0) {
      //   textbox.color = new Color(255,0,0,1)
      //   return
      // }

      // if(Lava.counter < 3) {
      //   textbox.color = new Color(0,0,255,1)
      //   return
      // }
    }
  }
}
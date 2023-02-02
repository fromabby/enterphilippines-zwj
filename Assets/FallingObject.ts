import { Collider, GameObject, Time, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class FallingObject extends ZepetoScriptBehaviour {
  OnTriggerEnter(other: Collider) {
    if(other.gameObject.tag === 'SafeFloor') {
      GameObject.Destroy(this.gameObject)
    }
  }
}
import { Collider, GameObject, Time, Vector3, WaitForSeconds } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameTags } from './Types/GameObjectTypes'

export default class FallingObject extends ZepetoScriptBehaviour {
  public speed: number;
  public objectNumber: number;
  public initialPosX: number;
  public initialPosY: number;
  public initialPosZ: number;

  // todo: fall per objectNumber
  Update() {
    this.transform.Translate(Vector3.down * this.speed * Time.deltaTime)
    // this.transform.Translate(Vector3.down * this.speed * 5/this.objectNumber * Time.deltaTime)
  }

  OnTriggerEnter(other: Collider) {    
    if(other.gameObject.tag === GameTags.SafeFloor) {
      GameObject.Destroy(this.gameObject)
      // this.StartCoroutine(this.Respawn(0,3))
      return
    }

    const character = other.gameObject.GetComponent<ZepetoCharacter>() || null

    if(!!character) {

      // GameObject.Destroy(this.gameObject)
      this.StartCoroutine(this.Respawn(0,3))
      this.StartCoroutine(this.Respawn(0,0))
    }
  }
  // todo: CODE: respawn after x seconds
  *Respawn(timeToDespawn:number, timeToRespawn:number) {
    console.log(this.gameObject.activeSelf)
    if(this.gameObject.activeSelf) {
      yield new WaitForSeconds(timeToDespawn)
      this.gameObject.SetActive(false)
      return
    }

    this.gameObject.SetActive(true)
    this.transform.position = new Vector3(this.initialPosX, this.initialPosY, this.initialPosZ)
  }
}

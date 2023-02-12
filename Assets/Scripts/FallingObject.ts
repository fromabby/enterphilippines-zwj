import { BoxCollider, Collider, Collision, GameObject, Quaternion, Rigidbody, SphereCollider, Vector3 } from 'UnityEngine'
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameTags } from './Types/GameObjectTypes'

export default class FallingObject extends ZepetoScriptBehaviour {
  public speed: number;
  public objectNumber: number;
  public initialPosX: number;
  public initialPosY: number;
  public initialPosZ: number;
  
  OnTriggerEnter(collider: Collider) {   
    try {
      const character = collider.gameObject.GetComponent<ZepetoCharacter>() || null
    
      if(!!character && this.GetComponent<BoxCollider>()) {
        this.GetComponent<Rigidbody>().isKinematic = false
        this.GetComponent<BoxCollider>().isTrigger = false
        this.GetComponent<BoxCollider>().size = new Vector3(1,2,1)
        this.GetComponent<BoxCollider>().center = new Vector3(0,0,-0.004243255)
      }
      
      if(collider.gameObject.tag === GameTags.SafeFloor) {
        GameObject.Destroy(this.gameObject)
      }
    } catch (error) {
      console.log(error)
    }

  }

  OnCollisionEnter(collision: Collision) {
    const character = collision.gameObject.GetComponent<ZepetoCharacter>() || null
    if(!!character) {
      GameObject.Destroy(this.gameObject)
      // character.Teleport(new Vector3(0,1,0), Quaternion.identity)
      SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex)
    }
  }
}

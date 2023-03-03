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
        this.GetComponent<BoxCollider>().size = new Vector3(-0.3064308,3.305847,-1.895679e-16)
        this.GetComponent<BoxCollider>().center = new Vector3(8,7,0.04)
      }
      
      if(collider.gameObject.tag === GameTags.SafeFloor) {
        console.log('here')
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
      if(SceneManager.GetActiveScene().name === 'Level1') {
        SceneManager.LoadScene('Level1')
      } else {
        SceneManager.LoadScene('Level2')
      }
    }
  }
}

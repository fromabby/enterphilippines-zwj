import { Time, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class MoveSideways extends ZepetoScriptBehaviour {
    private movingRight: boolean;
    private speed: number = 1;

    Start() {
        this.movingRight = true;
    }
    Update() {
      const xPosition = this.transform.position.x

      if (this.movingRight) {
        this.transform.Translate(Vector3.right * this.speed * Time.deltaTime)

        if (xPosition >= 5) {
          this.movingRight = false
        }
      } else {
        this.transform.Translate(Vector3.left * this.speed * Time.deltaTime)

        if(xPosition <= -5) {
          this.movingRight = true
        }
      }
    }
}
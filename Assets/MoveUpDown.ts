import { Time, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class MoveSideways extends ZepetoScriptBehaviour {
    private movingUp: boolean;
    private speed: number = 1;

    Start() {
        this.movingUp = true;
    }
    Update() {
      const yPosition = this.transform.position.y

      if (this.movingUp) {
        this.transform.Translate(Vector3.up * this.speed * Time.deltaTime)

        if (yPosition >= 5) {
          this.movingUp = false
        }
      } else {
        this.transform.Translate(Vector3.down * this.speed * Time.deltaTime)

        if(yPosition <= 4.5) {
          this.movingUp = true
        }
      }
    }
}
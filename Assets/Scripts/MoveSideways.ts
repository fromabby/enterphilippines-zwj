import { Time, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class MoveSideways extends ZepetoScriptBehaviour {
    private isMovingRight: boolean;
    public speed: number;
    public maxRightPos: number;
    public maxLeftPos: number;

    Start() {
        this.isMovingRight = true;
    }
    Update() {
      const xPosition = this.transform.position.x

      if (this.isMovingRight) {
        this.transform.Translate(Vector3.right * this.speed * Time.deltaTime)

        if (xPosition >= this.maxLeftPos) {
          this.isMovingRight = false
        }
      } else {
        this.transform.Translate(Vector3.left * this.speed * Time.deltaTime)

        if(xPosition <= this.maxRightPos) {
          this.isMovingRight = true
        }
      }
    }
}
import { GameObject, Time, Vector3 } from 'UnityEngine';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { GameTags } from './Types/GameObjectTypes';

export default class MoveUpDown extends ZepetoScriptBehaviour {
    private isMovingUp: boolean;
    public speed: number;
    public maxUpPosition: number;
    public maxDownPosition: number;

    Start() {
        this.isMovingUp = true;
    }
    Update() {
      try {
        const yPosition = this.transform.position.y

        if (this.isMovingUp) {
          this.transform.Translate(Vector3.up * this.speed * Time.deltaTime)

          if (yPosition >= this.maxUpPosition) {
            this.isMovingUp = false
          }
        } else {
          this.transform.Translate(Vector3.down * this.speed * Time.deltaTime)

          if(yPosition <= this.maxDownPosition) {
            this.isMovingUp = true
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
}
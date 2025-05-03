export class AlAinGrid{
    slot: number;
    daypattern: string;
    time: string;
    coursecode: string;
  
    constructor(slot: number, daypattern: string, time: string, coursecode: string){
      this.slot = slot;
      this.daypattern = daypattern;
      this.time = time;
      this.coursecode = coursecode;
    }
  }
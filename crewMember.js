class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }
  engageWarpDrive() {
    if(this.currentShip != 'Looking for a Rig' && this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged!'
      console.log('ENGAGE!')
    }else{
      return 'had no effect';
    }

  }

  setsInvisibility() {
    if(this.currentShip != 'Looking for a Rig' && this.position === 'Defender'){
      this.currentShip.cloaked = true;
      console.log('spoopy')
    }else{
      return 'had no effect';
    }
  }

  chargePhasers() {
    if(this.currentShip != 'Looking for a Rig' && this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged!';
      console.log("imma chargin mah lazar")
    }else{
      return 'had no effect';
    }
  }


}

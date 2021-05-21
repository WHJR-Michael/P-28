class Launcher {


    constructor(bodyA, pointB){
        
                 /*****************************/
                /**/ this.pointB = pointB; /**/
               /*****************************/

              /*****************************************************************************************************/
             /**/ this.launch = Constraint.create({bodyA: bodyA, pointB: pointB, stiffness: 1, length: 30});  /**/
            /*****************************************************************************************************/

          /**************************************/
         /**/ World.add(world, this.launch); /**/
        /**************************************/

    }
   
    display(){
        if (this.launch.bodyA != null){
           line(this.launch.bodyA.position.x, this.launch.bodyA.position.y, this.launch.pointB.x, this.launch.pointB.y); 
        }
        

    }

}
//-----------------------------------------------Column Object-----------------------------------------------------------//



    class Column {

        constructor(status, id, minimumFloor, maximumFloor, numberOfElevators, numberOfFloors, elevatorList, buttonsUpList, buttonsDownList) {  
            this.status = status;
            this.id = id;
            this.minimumFloor = minimumFloor;
            this.maximumFloor = maximumFloor;
            this.numberOfElevators = numberOfElevators;
            this.numberOfFloors = numberOfFloors;
            this.elevatorList = [];
            this.buttonsUpList = [];
            this.buttonsDownList = [];
    
    
            function createElevatorList(numberOfElevators) {
                for(elevator = 0; elevator < numberOfElevators; elevator++) {
                    var elevator = new Elevator(elevator, "Idle", 1, "Closed", numberOfFloors);
                    this.elevatorList.push(elevator);
                }
            }
            function createButtonsUpList(numberOfFloors) {
                for(floor = 0; floor < numberOfFloors; floor++){
                    if(floor != maximumFloor) {
                        var button = new Button(buttonUp, "OFF");
                        this.buttonsUpList.push(button);
                    }
                }
            }
            function createButtonsDownList(numberOfFloors) {
                for(floor = 0; floor < numberOfFloors; floor++) {
                    if(floor > minimumFloor) {
                        var button = new Button(buttonDown, "OFF");
                        this.buttonsDownList.push(button);
                    }
                }
            }
//---------------------------------------LOGIC TO FIND THE BEST ELEVATOR WITH A PRIORIZATION LOGIC----------------------------//  
            function findElevator(currentFloor, currentDirection, elevatorList) {
                this.activeElevatorsList = [];
                this.idleElevatorsList = [];
            }
        }
    }








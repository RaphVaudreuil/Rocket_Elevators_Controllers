class Column {
    defineColumn(status, id, minimumFloor, maximumFloor, elevatorList, buttonsUpList, buttonsDownList) {
        this.status = status
        this.id = id
        this.minimumFloor = minimumFloor
        this.maximumFloor = maximumFloor
        this.elevatorList = []
        this.buttonsUpList = []
        this.buttonsDownList = []
    }
}
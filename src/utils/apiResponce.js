class apiResponce {
  constructor(statusecode, massege = "Somting went wrong ", data) {
    this.statusecode = statusecode;
    this.massege = massege;
    this.data = data;
    this.succes = statusecode < 400;
  }
}

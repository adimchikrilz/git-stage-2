class Customer {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
  
    getDetails() {
        return `${this.name} can be reached at ${this.phone}.`;
    }
  
    updatePhone(newPhone) {
        this.phone = newPhone;
        console.log(`Updated phone number for ${this.name} to ${this.phone}.`);
    }
  }
  class Reservation {
    constructor(id, customerId, reservationTime, tableNumber) {
        this.id = id;
        this.customerId = customerId;
        this.reservationTime = reservationTime;
        this.tableNumber = tableNumber;
        this.isConfirmed = false;
    }
  
    confirmReservation() {
        this.isConfirmed = true;
        console.log(`Reservation ID ${this.id} confirmed for Table ${this.tableNumber} at ${this.reservationTime}.`);
    }
  
    cancelReservation() {
        this.isConfirmed = false;
        console.log(`Reservation ID ${this.id} has been canceled.`);
    }
  }
  // Example usage
  const customer1 = new Customer(1, "Adimchi Igwenagu", "+234-7869-678-9008");
  console.log(customer1.getDetails()); // Output: Alice Johnson can be reached at 555-1234.
  
  const reservation1 = new Reservation(101, customer1.id, new Date("2025-01-20T19:00:00"), 5);
  reservation1.confirmReservation(); 
  reservation1.cancelReservation(); 
  
  customer1.updatePhone("+234-7069-678-9045"); 
  
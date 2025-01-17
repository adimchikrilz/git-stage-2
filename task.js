class Customer {
    static totalCustomers = 0; // Static property to keep track of total customers

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        Customer.totalCustomers++; // Increment total customers when a new customer is created
    }

    getDetails() {
        return `${this.name} (${this.email})`;
    }

    static getTotalCustomers() {
        return Customer.totalCustomers;
    }
}
class Booking {
    constructor(id, customerId, roomType, checkInDate, checkOutDate) {
        this.id = id;
        this.customerId = customerId;
        this.roomType = roomType;
        this.checkInDate = new Date(checkInDate);
        this.checkOutDate = new Date(checkOutDate);
    }

    confirmBooking() {
        console.log(`Booking ID ${this.id} confirmed for ${this.roomType} from ${this.checkInDate.toLocaleDateString()} to ${this.checkOutDate.toLocaleDateString()}.`);
    }

    cancelBooking() {
        console.log(`Booking ID ${this.id} has been canceled.`);
    }
}
//output
const customer1 = new Customer(1, "Adimchi Igwenagu", "adimchikrilz@gmail.com");
console.log(customer1.getDetails()); 
const customer2 = new Customer(2, "Eze Ebube", "ezebubs@gmail.com");
console.log(customer2.getDetails()); 
console.log(`Total Customers: ${Customer.getTotalCustomers()}`); 

const booking1 = new Booking(101, customer1.id, "Deluxe Room", "2025-01-20", "2025-01-25");
booking1.confirmBooking(); 
booking1.cancelBooking(); 

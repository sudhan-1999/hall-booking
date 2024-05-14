/*const rooms = [

    {
      id:1,
      Roomname: "room-1",
      NoofSeatsAvailable: "35",
      AmenitiesinRoom: [
        "Power Backup",
        "sound systems",
        "Air conditioning",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.500",
    },
    {
      id:2,
      Roomname: "room-2",
      NoofSeatsAvailable: "50",
      AmenitiesinRoom: [
        "Power Backup",
        "sound systems",
        "Air conditioning",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.700",
    },
    {
      id:3,
      Roomname: "room-3",
      NoofSeatsAvailable: "60",
      AmenitiesinRoom: [
        "Power Backup",
        "sound systems",
        "Air conditioning",
        "Internet Access",
        "Tables and Chair",
      ],
      PriceforanHour: "",
    },
    {
      id:4,
      Roomname: "room-4",
      NoofSeatsAvailable: "85",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.1000",
    },
    {
      id:5,
      Roomname: "room-5",
      NoofSeatsAvailable: "50",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.900",
    },
    {
      id:6,
      Roomname: "room-6",
      NoofSeatsAvailable: "65",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.850",
    },
    {
      id:7,
      Roomname: "room-7",
      NoofSeatsAvailable: "100",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "sond systems",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.1500",
    },
    {
      id:8,
      Roomname: "room-8",
      NoofSeatsAvailable: "85",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
      ],
      PriceforanHour: "Rs.950",
    },
    {
      id:9,
      Roomname: "room-9",
      NoofSeatsAvailable: "150",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
        "Elevator",
        "Sanitaion",
      ],
      PriceforanHour: "Rs.2000",
    },
    {
      id: 10,
      Roomname: "room-10",
      NoofSeatsAvailable: "125",
      AmenitiesinRoom: [
        "Power Backup",
        "Air conditioning",
        "Internet Access",
        "Parking",
        "Tables and Chair",
        "Elevator",
        "Sanitaion",
      ],
      PriceforanHour: "Rs.1750",
    },
  ];*/
  /*const bookings = [
    {
      CustomerName: "Raghul",
      Date: "2/5/2024",
      Roomname: "room-1",
      StartTime: "9:00 AM",
      EndTime: "12:00 PM",
      id: "1",
      Bookingid: "0001",
      Bookingdate: "2/5/2024",
      Bookingstatus: true,
    },
    {
      CustomerName: "Dinesh",
      Date: "5/5/2024",
      Roomname: "room-2",
      StartTime: "8:00 AM",
      EndTime: "11:00 AM",
      id: "2",
      Bookingid: "0002",
      Bookingdate: "5/5/2024",
      Bookingstatus: true,
    },
    {
      CustomerName: "Karthik",
      Date: "15/5/2024",
      Roomname: "room-3",
      StartTime: "10:00 AM",
      EndTime: "2:00 PM",
      id: "3",
      Bookingid: "003",
      Bookingdate: "15/5/2024",
      Bookingstatus: true,
    },
    {
      CustomerName: "Babu",
      Date: "17/5/2024",
      Roomname: "room-4",
      StartTime: "8:00 AM",
      EndTime: "10:00 AM",
      id: "4",
      Bookingid: "004",
      Bookingdate: "17/5/2024",
      Bookingstatus: true,
    },
    {
      CustomerName: "Akash",
      Date: "19/5/2024",
      Roomname: "room-5",
      StartTime: "11:00 AM",
      EndTime: "1:00 PM",
      id: "5",
      Bookingid: "005",
      Bookingdate: "19/5/2024",
      Bookingstatus: true,
    },
  ];
*/  
/*app.get("/customer/bookings/:customerName", async (req, res) => {/* 
 try {
    const customerName = req.params;

    const bookings = await client
      .db("hallbooking")
      .collection("bookings")
      .aggregate([
        {
          $match: { CustomerName: customerName }
        },
        {
          $group: {
            _id: "$CustomerName",
            count: { $sum: 1 }
          }
        }
      ])
      .toArray();
console.log(bookings);
res.send(bookings);
    /*if (bookings.length === 0) {
      res.status(404).send("No bookings found for the customer");
      return;
    }

    const { _id, count } = bookings[0];
    const response = {
      CustomerName: _id,
      NumberOfBookings: count
    };

    res.send(response);*/
  /*} catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});*/
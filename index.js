import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5000;

//Inbuilt middleware =>  say data is in json => converting body to json
app.use(express.json());

const MONGO = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO);
  await client.connect();
  console.log("Mongodb is connected");
  return client;
}

const client = await createConnection();

//creating room example document
/*{
      "id":"11",
      "Roomname": "room-11",
      "NoofSeatsAvailable": "35",
      "AmenitiesinRoom": [
        "Power Backup",
        "sound systems",
        "Air conditioning",
        "Tables and Chair",
      ],
      "PriceforanHour": "Rs.500",
    }*/
app.post("/", async (req, res) => {
  try {
    const newdata = req.body;
    const rooms = await client
      .db("hallbooking")
      .collection("rooms")
      .insertOne(newdata)
    console.log(rooms);
    res.send(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
});

//to get details of all room 
app.get("/room", async (req, res) => {
  try {
    const rooms = await client
      .db("hallbooking")
      .collection("rooms")
      .find()
      .toArray()
    console.log(rooms);
    res.send(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
});

//booking room
//example document
/*    {
        "CustomerName": "Akash",
        "Date": "19/5/2024",
        "Roomname": "room-5",
        "StartTime": "11:00 AM",
        "EndTime": "1:00 PM",
        "id": "5",
        "Bookingid": "005",
        "Bookingdate": "19/5/2024",
        "Bookingstatus": true
    }*/


app.post("/bookings/room", async (req, res) => {
  try {
    const newdata = req.body;
    console.log(newdata.id);
    const finds = await client
      .db("hallbooking")
      .collection("bookings")
      .find({ id: newdata.id })
      .toArray();

    let roomAlreadyBooked = false;
    for (const find of finds) {
      if (
        find.Date === newdata.Date ||
        find.StartTime === newdata.StartTime ||
        find.EndTime === newdata.EndTime
      ) {
        roomAlreadyBooked = true;
        break;
      }
    }

    if (roomAlreadyBooked) {
      res.send("Room already booked for this date and time");
    } else {
      const result = await client
        .db("hallbooking")
        .collection("bookings")
        .insertOne(newdata);
      res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//all details of booked rooms
app.get("/booked", async (req, res) => {
  try {
    const booking = await client
      .db("hallbooking")
      .collection("bookings")
      .find()
      .toArray();
    res.send(booking);
  } catch (error) {
    res.send(error);
  }
});

//list of all cutomer with biiking data
app.get("/bookedcustomer", async (req, res) => {
  try {
    const bookings = await client
      .db("hallbooking")
      .collection("bookings")
      .find()
      .toArray();
    console.log(bookings);

    const details = bookings.map((booking) => ({
      CustomerName: booking.CustomerName,
      Roomname: booking.Roomname,
      Date: booking.Date,
      StartTime: booking.StartTime,
      EndTime: booking.EndTime,
    }));

    res.send(details);
  } catch (error) {
    res.send(error);
  }
});


app.listen(PORT, () => console.log(`Server started on the PORT, ${PORT}`));

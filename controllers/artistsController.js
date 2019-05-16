const db = require("../models");
const axios = require('axios')

const apiKey = 'mnWSViQlToQzLVSUXFLo2U7AOKJ1L338'
// Defining methods for the EventsController
module.exports = {
  findAll: function (req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  ticket: function (req, res) {
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=adele&apikey=mnWSViQlToQzLVSUXFLo2U7AOKJ1L338")
    
    .then((response) => {
        const events = response.data._embedded.events;
        const trimmedData = events.map((event) => {

          const image = event.images[3]
          const shapedData = {
            name: event.name,
            image: image,

            // filter out the duplicates venue names from venue 0

            url: events.url,
            date: event.dates.start.localDate,
            time: event.dates.start.localTime,
            address: event._embedded.venues[0].address.line1,
            venue_name: event._embedded.venues[0].name

            // venue: event.venue.location... etc
          }


          return shapedData
        })
        return res.send(trimmedData)
      })
  },

};

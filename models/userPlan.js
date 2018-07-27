'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Create Schema
const UserPlanSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  packinglist:{
    type: String,
  },
  destination:{
    type: String,
    required: true
  },
  tripnotes:{
    type: String,
  },
  feedback:{
    type: String,
   }
   //,
  // token:{
  //   type: String,
  //   required: true
  // }
});

UserPlanSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    destination: this.destination,
    token: this.token
  };
};

const UserPlan = mongoose.model('UserPlan', UserPlanSchema);

module.exports = {UserPlan};

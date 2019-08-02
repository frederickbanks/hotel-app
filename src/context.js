import React, { Component } from "react";
import { create } from "domain";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true
    };
  }

  // getData function using with componentwdidmount, doesnt work now as we are grabbing data locally//

  componentDidMount = () => {
    //this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(rooms => rooms.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
    // getData = () => {

    // }
  };

  formatData = items => {
    let tempitems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempitems;
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };

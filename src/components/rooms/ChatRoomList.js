import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'rsuite';
import RoomItem from './RoomItem';
// import { useRooms } from '../../context/rooms.context';

const ChatRoomList = ({ aboveElHeight }) => {
  // const rooms = useRooms();
  // const location = useLocation();

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
      // activeKey={location.pathname}
    >
      <Nav.Item>
        <RoomItem />
      </Nav.Item>
    </Nav>
  );
};

export default ChatRoomList;

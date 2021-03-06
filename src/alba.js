import React from "react";
import TopAppBar from "./appbar/appbar";
import "./home2.css";
import Search from "./SearchBar/min";
import NestedList from "./menulist/Board_list";
import Griddongali from "./gridmarket/gridd";
class Alba extends React.Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <div className="toptop">
          <div>
            <p>알바 창국</p>
          </div>
        </div>
        <div className="midmid">
          <Search />
        </div>
        <div className="bmbm">
          <Griddongali />
        </div>
        <div className="cdcd"></div>
        <div className="menubarbar">
          <NestedList />
        </div>
      </div>
    );
  }
}

export default Alba;

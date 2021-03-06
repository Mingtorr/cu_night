import React from "react";
import TopAppBar from "./appbar/appbar";
import Postbody from "./post/post";
import "./board.css";
import Search from "./SearchBar/min";
import NestedList from "./menulist/Board_list";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_key: 2,
      board_name: "",
    };
  }

  componentWillMount() {
    const { params } = this.props.match;

    switch (params.board_name) {
      case "free":
        this.setState({ board_name: "자유 게시판", board_key: 1 });
        break;
      case "anonymous":
        this.setState({ board_name: "익명 게시판", board_key: 2 });
        break;
      case "new":
        this.setState({ board_name: "새내기 게시판", board_key: 3 });
        break;
      case "love":
        this.setState({ board_name: "연애 상담소", board_key: 4 });
        break;
      case "politic":
        this.setState({ board_name: "정치 게시판", board_key: 5 });
        break;
      case "night":
        this.setState({ board_name: "창밤 공지사항", board_key: 6 });
        break;
      case "changwon":
        this.setState({ board_name: "학교 공지사항", board_key: 7 });
        break;
      // case "study":
      //     this.setState({board_key:7});
      //     break;
      default:
        this.setState({ board_name: "스터디 그룹" });
    }
  }
  render() {
    return (
      <div>
        <TopAppBar />
        <div className="toptop">
          <div>
            <p>{this.state.board_name}</p>
          </div>
        </div>
        <div className="midmid">
          <Search />
        </div>
        <div className="bmbm">
          <Postbody board_key={this.state.board_key} />
        </div>

        <div className="menubarbar">
          <NestedList />
        </div>
        <div className="postage_write_button">
          <Button id="write" variant="contained" color="primary">
            <Link to={`/${this.props.match.params.board_name}/postage_write`}>
              <font color="white">글쓰기</font>
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Board;

import React from "react";
import Card from "@material-ui/core/Card"
import png from "/home/cory/code/space_invaders/frontend/src/imgs/background_pic.png"


const useStyles = {
    img: {
        marginRight: `auto`,
        marginLeft: `auto`,
        display: `block`,
      },
  };
class gameboard extends React.Component {
    render() {
      return(
          
          <div>
              <img style={useStyles.img} alt="big rip"src={png}></img>
        </div>
      );
    }
  }

export default gameboard;
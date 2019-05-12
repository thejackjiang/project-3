import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Modal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        smShow: false,
        lgShow: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
            let smClose = () => this.setState({ smShow: false });
            let lgClose = () => this.setState({ lgShow: false });
        
            return (
              <ButtonToolbar>
                <Button onClick={() => this.setState({ smShow: true })}>
                  Small modal
                </Button>
                <Button onClick={() => this.setState({ lgShow: true })}>
                  Large modal
                </Button>
        
                <Modal
                  size="sm"
                  show={this.state.smShow}
                  onHide={smClose}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      Small Modal
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                </Modal>
        
                <Modal
                  size="lg"
                  show={this.state.lgShow}
                  onHide={lgClose}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Large Modal
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                </Modal>
              </ButtonToolbar>
            );
          }
        }
        

  export default Modal;
//   render(<Modal />);
import React from "react"
import {
    Dialog, Transitions, DialogTitle,
    DialogContent,
    DialogContentText
} from "@material-ui/core"

class BlogDetails extends React.Component {
    constructor() {
        super();
    }
    render() {
        const data = this.props;
        return (
            <Dialog
                open={this.props.open}
                //TransitionComponent={Transition}
                // keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{this.props.data.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                      </DialogContentText>
                </DialogContent>

            </Dialog>
        )
    }
}
export default BlogDetails

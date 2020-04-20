import React from "react"
import {
    Box, Button,
    Typography,
    withStyles,
    Card,
    CardContent
} from "@material-ui/core"

const styles = (theme) => ({
    root: {
        minWidth: 275,
        maxWidth: 300,
    },
    title: {
        fontSize: 14,
    },
});

class Blog extends React.Component {
    render() {
        const classes = this.props;
        const data = this.props.data;
        return (
            <>
                <Card className={classes.root}>
                    <CardContent>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {data.title}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Author : {data.author}
                            </Typography>
                        </Box>
                        <Box >
                            <Button variant="contained" color="primary"
                                onClick={this.props.openDialogue}
                            >Show more</Button>
                        </Box>
                    </CardContent>
                </Card>

            </>
        )
    }
}
export default withStyles(styles)(Blog)
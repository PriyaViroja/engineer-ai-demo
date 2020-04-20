import React from "react"
import Blog from "./Blog"
import BlogDetails from "./BlogDetails"
import {
    Grid, TablePagination, withStyles,
    TableFooter,
    TableRow, Paper,
    TableContainer
} from "@material-ui/core"
import { getBlogs } from "../Services/API"
const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
});
class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            FilteredBlogs: [],
            Blogs: [],
            Page: 0,
            RowsPerPage: 12,
            Count: 0,
            Open: false,
            Details: {},
        }
    }
    async componentDidMount() {
        setInterval(async () => {
            let pageNumber = this.state.Page + 1;
            let currentData = this.state.Blogs;
            let data = await getBlogs(pageNumber);

            if (data && data.data) {
                this.setState({
                    ...this.state,
                    Page: pageNumber,
                    Blogs: [...currentData, data.data.hits]
                }, () => {
                    console.log(this.state.Blogs[0].length)
                }
                )
            }
            console.log(this.state.Blogs)
        }, 10000)
    }
    handleChangePage = (e) => {
    }
    openDialogue = (data) => {
        debugger
        this.setState({
            ...this.state,
            Open: true,
            Details: data
        })
    }
    handleChangeRowsPerPage = (e) => {
        let recods = parseInt(e.target.value);
        let filterData = this.state.Blogs[0].slice(0, recods);
        this.setState({
            ...this.state,
            FilteredBlogs: filterData
        }, () => {
            console.log(this.state.FilteredBlogs.length)
        })
    }
    render() {
        const classes = this.props;
        return (
            <>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} >

                        {this.state.Blogs.length > 0 &&
                            this.state.Blogs[0].map((value) => (
                                <Grid item xs={12}
                                    //style={{ float: "left " }} 
                                    spacing={3}>
                                    <Blog
                                        open={this.state.Open}
                                        openDialogue={this.openDialogue}
                                        handleClose={this.handleClose}
                                        data={value} key={value.created_at} />
                                </Grid>
                            ))}

                    </Grid>
                </Grid>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    // colSpan={3}
                    count={this.state.Count}
                    rowsPerPage={this.state.RowsPerPage}
                    page={this.state.Page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    component="div"
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                //ActionsComponent={TablePaginationActions}
                />
                <BlogDetails handleClose={this.handleClose}></BlogDetails>
            </>
        )
    }
}
export default withStyles(styles)(Container)
import React from "react"
import Chart from "../views/Chart"
import Table from "../views/Table"

class MainContainer extends React.Component {
    constructor () {
        super()
        this.state = {
            test: "this is a test with this.state"
        }
    }

    render() {
        return (
            <div>
                <h1>hello world</h1>
                <p>{this.state.test}</p>
                <Chart />
                <Table />
            </div>
        )
    }
}
export default MainContainer
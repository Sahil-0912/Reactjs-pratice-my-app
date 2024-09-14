import React from "react"
import CardUi from "../layout/Cardui"
import data from "../layout/Data"
class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        {
                            data.map((element) => {
                                return (
                                    <div className="col-lg-4">
                                        <CardUi title={element.title} para={element.para} image={element.image} goal={element.goal} raised={element.raised} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default Contact
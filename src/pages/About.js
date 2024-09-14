import data from "../layout/Data"
import Card from "../layout/Card"
function About() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {
            data.map((element) => {
              return (
                <div className="col-lg-4">
                  <Card title ={element.title} para={element.para} image={element.image} goal={element.goal} raised={element.raised}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default About
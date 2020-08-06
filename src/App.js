import React, { Component } from "react";
import "./App.css";
import Search from "./components/form.jsx";
import Table from "./components/table.jsx";
import "./components/dm.css";
import {Card,Button} from "react-bootstrap"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "",
      seconds: "",
      symbol: "",
      data: [],
      dataArray: [],
      link: "",
      inputInterval: "",
      submittedSymbol: "",
      submittedMinutes: "",
      submittedSeconds: "",
      currentDateAndTime: "",
    };
    var handle;
  }

  

 

  

  


  render() {
    return (
      <div style={{"display":"flex","flexDirection":"row"}} >
         <Card style={{ width: '26rem',marginLeft:"80px",marginTop:"66px",height:"32rem" }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
  <Card.Subtitle style={{marginLeft:"150px"}} className="mb-2 text-muted">Free</Card.Subtitle>
    <Card.Title style={{marginLeft:"125px",marginTop:"20px"}}>$0/Month</Card.Title>
    <Card.Text style={{marginTop:"30px",marginLeft:"20px"}}>
     Single User
    </Card.Text >
    <Card.Text style={{marginLeft:"20px"}}>
    5GB Storage
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Unlimited Public Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Community Access
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}> 
    Unlimited Private Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Dedicated Phone Support
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Free Subdomain
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Monthly Status Reports
    </Card.Text>
    <Button style={{borderRadius:6,width:"22rem"}} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '26rem',marginLeft:"80px",marginTop:"66px",height:"32rem" }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
  <Card.Subtitle style={{marginLeft:"150px"}} className="mb-2 text-muted">Free</Card.Subtitle>
    <Card.Title style={{marginLeft:"125px",marginTop:"20px"}}>$0/Month</Card.Title>
    <Card.Text style={{marginTop:"30px",marginLeft:"20px"}}>
     Single User
    </Card.Text >
    <Card.Text style={{marginLeft:"20px"}}>
    5GB Storage
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Unlimited Public Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Community Access
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}> 
    Unlimited Private Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Dedicated Phone Support
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Free Subdomain
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Monthly Status Reports
    </Card.Text>
    <Button style={{borderRadius:6,width:"22rem"}} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '26rem',marginLeft:"80px",marginTop:"66px",height:"32rem" }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
  <Card.Subtitle style={{marginLeft:"150px"}} className="mb-2 text-muted">Free</Card.Subtitle>
    <Card.Title style={{marginLeft:"125px",marginTop:"20px"}}>$0/Month</Card.Title>
    <Card.Text style={{marginTop:"30px",marginLeft:"20px"}}>
     Single User
    </Card.Text >
    <Card.Text style={{marginLeft:"20px"}}>
    5GB Storage
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Unlimited Public Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Community Access
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}> 
    Unlimited Private Projects
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Dedicated Phone Support
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Free Subdomain
    </Card.Text>
    <Card.Text  style={{marginLeft:"20px"}}>
    Monthly Status Reports
    </Card.Text>
    <Button style={{borderRadius:6,width:"22rem"}} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

      </div>
    );
  }
}

export default App;

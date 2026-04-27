
import { Button, Card, Col,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Userhome() {

  return (
   <>
    <Col className="d-flex flex-column flex-lg-row justify-content-center align-items-center p-3 gap-4">
          {/* Left Side Image */}
          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src="/images/carephysio.png"
              fluid
              rounded
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </Col>

          {/* Right Side Cards */}
          <Col
            xs={6}
            lg={6}
            className="d-flex flex-column justify-content-center gap-4"
          >
            {/* Card 1: Caretaker */}
            <Card style={{ width: "100%",border:"none", backgroundColor: "#fcede2ff" }}>
              <Card.Body className="d-flex flex-column justify-content-between shadow">
                <Card.Title>Caretaker</Card.Title>
                <Card.Text>
                  Professional caretakers providing daily assistance and support
                  for elderly. Professional caretakers providing daily assistance and support
                  for elderly.
                </Card.Text>
                <div className="text-center">
                   <Link to={'/user/caretaker'}>
                   <Button
                  size="sm"
                  style={{
                    backgroundColor: "#7994afff",
                    border: "none",
                    color: "#fff",
                  }}
                >
                 Book Now
                  </Button>
                 </Link>
              
                </div>
              
              </Card.Body>
            </Card>

            {/* Card 2: Nurse */}
            <Card style={{ width: "100%",border:"none", backgroundColor: "#E0F7FA" }}>
              <Card.Body className="d-flex flex-column justify-content-between shadow">
                <Card.Title>Nurse</Card.Title>
                <Card.Text>
                  Skilled nurses offering health monitoring, medication
                  management, and care. Skilled nurses offering health monitoring, medication
                  management, and care.
                </Card.Text>
               <div className="text-center">
                   <Link to={'/user/nurses'}>
                   <Button
                  size="sm"
                  style={{
                    backgroundColor: "#7994afff",
                    border: "none",
                    color: "#fff",
                  }}
                >
                 Book Now
                  </Button>
                 </Link>
                </div>
              </Card.Body>
            </Card>

            {/* Card 3: Physiotherapist */}
            <Card style={{ width: "100%",border:"none", backgroundColor: "#FCE4EC" }}>
              <Card.Body className="d-flex flex-column justify-content-between shadow">
                <Card.Title>Physiotherapist</Card.Title>
                <Card.Text>
                  Expert physiotherapists helping with mobility, exercises, and
                  rehabilitation. Expert physiotherapists helping with mobility, exercises, and
                  rehabilitation.
                </Card.Text>
               <div className="text-center">
                  <Link to={'/user/physio'}>
                   <Button
                  size="sm"
                  style={{
                    backgroundColor: "#7994afff",
                    border: "none",
                    color: "#fff",
                  }}
                >
                 Book Now
                  </Button>
                 </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Col>
   </>
  )
}

export default Userhome
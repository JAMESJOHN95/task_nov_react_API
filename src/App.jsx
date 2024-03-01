import { useState, useEffect } from 'react'
import './App.css'
import { Card,Button } from 'react-bootstrap'


function App() {

  const [userDetails, setUserDetails] = useState("")
  const [colorBackground, setColorBackground] = useState()
  const [randomNumber, setRandomNumber] = useState("1")

  const randomNum = () => {
    var setRandom = Math.floor(Math.random() * 30) + 1;
    setRandomNumber(setRandom)
  }

  var colors = ["#e8676a", "#7aeb3e", "#128ade", "#c7de12", "#de12ab"];
  function getRandomColorFromArray() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var bgColor = colors[randomIndex]
    setColorBackground(bgColor)
  }
  console.log(colorBackground);

  const getUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${randomNumber}`)
    const data = await response.json()
    setUserDetails(data)
  }
  useEffect(() => {
    getUser()
    getRandomColorFromArray()
  }, [randomNumber])

  console.log(userDetails.address);

  return (
    <>
      <div className="container">
        <h1 style={{ Color: `${colorBackground}` }} className='text-center'>RANDOM CHANGE ON REFRESH</h1>
        <div style={{ backgroundColor: `${colorBackground}` }} className=" row justify-content-center p-3">

          <div className="col-lg-3"></div>
          <div className="col-lg-3">
          <Card >
            <Card.Img variant="top" src={userDetails?.image} />
            <Card.Body>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card></div>
          <div style={{textAlign:'justify'}} className="col-lg-3 text-align-justify rounded border p-3 "><h5>{userDetails?.firstName}  {userDetails?.lastName}</h5>
                    <h6>Gender : {userDetails?.gender}</h6>
                    <h6>Birth Date : {userDetails?.birthDate}</h6>
                    <h6>Age  : {userDetails?.age}</h6>
                    <h6>Weight : {userDetails?.weight}</h6>
                    <h6>Height : {userDetails?.height}</h6>
                    <h6>Address: {userDetails?.address?.address}</h6>
                    <h6>Phone:{userDetails?.phone}</h6>
                    <h6>Company: {userDetails?.company?.address?.address}</h6> 
                    <h6>Email: {userDetails?.email}</h6> </div>
          <div className="col-lg-3"> </div>

          <Button style={{width:'200px'}} className='mt-3' onClick={() => randomNum()} variant="primary">Random change</Button>
        </div>
        

      </div>

    </>
  )
}

export default App

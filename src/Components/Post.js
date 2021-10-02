import React from 'react';
import  { useState, useEffect } from 'react';
import pubg from '../Images/pubg.jpg';
import { Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FbImageLibrary from 'react-fb-image-grid';
import cover_1 from '../Images/cover1.jpg';
import cover_2 from '../Images/cover2.jpg';
import cover_3 from '../Images/cover3.jpg';
import {
 
  Button,
 
} from 'react-bootstrap';
import { FiThumbsUp } from "react-icons/fi";
import { RiShareForwardLine, RiEarthFill } from "react-icons/ri";
import {GoComment} from "react-icons/go"

function Post() {
  const images = [cover_2, cover_3, cover_1, cover_2, cover_1, cover_2];
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [userReact, setUserReact] = useState(false);
  const [show, setShow] = useState(false)
  var reactions = [
    { id: "like", img: "http://i.imgur.com/LwCYmcM.gif" },
    { id: "love", img: "http://i.imgur.com/k5jMsaH.gif" },
    { id: "haha", img: "http://i.imgur.com/f93vCxM.gif" },
    { id: "yay", img: "http://i.imgur.com/a44ke8c.gif" },
    { id: "wow", img: "http://i.imgur.com/9xTkN93.gif" },
    { id: "sad", img: "http://i.imgur.com/tFOrN5d.gif" },
    { id: "angry", img: "http://i.imgur.com/1MgcQg0.gif" },
  ];

  const toggle = () => {
      setDropdownOpen(!dropdownOpen)
  }
  const setReac = (id) => {
 
    reactions.filter(i => i.id === id).map((item) => setUserReact(item.img))
    setShow(true)
  }
  
  // useEffect(() => {
  //   setShow(false)
  // }, [show])
  // console.log(show)

  return (
    <div className="container my-4">
      <Row className="no-gutters">
        <Col md={3}></Col>

        <Col md={6}>
          <div className="bg-white p-2">
            <div className="post_header">
              <div className="avatar">
                <img src={pubg} alt="pubg" />
              </div>
              <div className="post_title">
                <h3 className="mb-1">
                  <a href="#">Pubg Mobile - Get Your Favorite Character Now </a>
                </h3>
                <small className="spons__label">Sponsored <RiEarthFill size={16} color={'rgb(128 123 123)'}/></small>
              </div>
            </div>
            <div className="post_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="post_wall">
              <FbImageLibrary
                images={images}
                width={100}
                hideOverlay={true}
                countFrom={4}
              />
            </div>
            <div className="actions_section">
              <span className="likes">
               
                  {
                    userReact?<img src={userReact} className="reactions_2"/>:
                    <FiThumbsUp size={20} color={'#000000b3'}/>
                  }
                <h5>
                  <a href="#" className="pl-2">
                    Mustafa Ahmed, Ghulam and 50M others
                  </a>
                </h5>
                
              </span>
              <span className="comments">
                <a href="#"> 50.5k Comments</a>
              </span>
              <span className="shares">
                <a href="#"> 100k shares</a>
              </span>
            </div>
            <div className="action_section_2">
              <Button className="btn btn-default" id="react" onMouseEnter={() => setTimeout(() => {
                setShow(false)
              }, 1000)}>
                <div className="d-flex">
                <FiThumbsUp size={20} color={'#000000b3'}/>
                
                <span style={{marginLeft:'4px !important'}}>
                    Like
                </span> 
                {
                  show?'':<div className="set_reactions">
                  {
                    reactions.map((item) => {
                      return(
                        
                          <img src={item.img} className="reactions" onClick={() => setReac(item.id)}/>         
                      )
                    })
                  }
                </div>
                } 
                </div>    
                
               
              </Button>
              <Button className="btn btn-default">
               <GoComment size={20} color={'#000'}/>
                <span>Comment</span> 
              </Button>
              <Button className="btn btn-default">
               <RiShareForwardLine size={24} color={'#5a5757'}/>
                <span>Share</span>
              </Button>
              <ButtonDropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                <img src={pubg} alt="pubg" />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

             
            </div>
                  
          </div>
        </Col>

        <Col md={3}> </Col>
      </Row>
    </div>
  );
}

export default Post;

import React, {useState, useEffect} from "react";
import {
     BrowserRouter as Router, 
     Link
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

// reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Row,
    Col,
    CardImg,
    Button
  } from "reactstrap";

function Header(  {onActiveA2063Changed} ){

    const images = require.context('../assets/img/a2063_icons', true);
    const agenda2063 = [{
            id :0,
            image  : "Aspirations_1_0",
            image2 : "Aspirations_1_hover",
            iconSmallHover : "a2063",
            iconSmall : "a2063",
            iconSquare : "Aspirations_icons_1_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_1_Integrated_Africa_hover",
        color: [8, 100, 54]
        },{
            id :1,
            image  : "Aspirations_1_0",
            image2 : "Aspirations_1_hover",
            iconSmallHover : "Aspirations1_hover",
            iconSmall : "Aspirations1",
            iconSquare : "Aspirations_icons_1_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_1_Integrated_Africa_hover",
            color: [241, 90, 46]
        },{
            id:2,
            image  : "Aspirations_2_0",
            image2 : "Aspirations_2_hover",
            iconSmallHover : "Aspirations2_hover",
            iconSmall : "Aspirations2",
            iconSquare : "Aspirations_icons_2_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_2_Integrated_Africa_hover",
            color: [69, 86, 164]
        },{
            id:3,
            image  : "Aspirations_3_0",
            image2 : "Aspirations_3_hover",
            iconSmallHover : "Aspirations3_hover",
            iconSmall : "Aspirations3",
            iconSquare : "Aspirations_icons_3_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_3_Integrated_Africa_hover",
            color: [143, 63, 152]
        },{
            id:4,
            image  : "Aspirations_4_0",
            image2 : "Aspirations_4_hover",
            iconSmallHover : "Aspirations4_hover",
            iconSmall : "Aspirations4",
            iconSquare : "Aspirations_icons_4_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_4_Integrated_Africa_hover",
            color: [3, 152, 136]
        },{
            id:5,
            image: "Aspirations_5_0",
            image2 : "Aspirations_5_hover",
            iconSmallHover : "Aspirations5_hover",
            iconSmall : "Aspirations5",
            iconSquare : "Aspirations_icons_5_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_5_Integrated_Africa_hover",
            color: [251, 193, 25]
        },{
            id:6,
            image: "Aspirations_6_0",
            image2 : "Aspirations_6_hover",
            iconSmallHover : "Aspirations6_hover",
            iconSmall : "Aspirations6",
            iconSquare : "Aspirations_icons_6_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_6_Integrated_Africa_hover",
            color: [232, 32, 101]
        },{
            id:7,
            image: "Aspirations_7_0",
            image2 : "Aspirations_7_hover",
            iconSmallHover : "Aspirations7_hover",
            iconSmall : "Aspirations7",
            iconSquare : "Aspirations_icons_7_Integrated_Africa",
            iconSquareHover : "Aspirations_icons_7_Integrated_Africa_hover",
            color: [84, 37, 60]
        }
        
    ];

    const [activeA2063, setActiveA2063] = useState(0);

    const handleA2063Change = (e) => {
        setActiveA2063(e.currentTarget.value);
        onActiveA2063Changed(e.currentTarget.value);
    }

    let redirectAgenda2063 = 0;
    //console.log(props)
    // if(props.location.state != null){
    //     if(props.location.state == 18){
    //         redirectAgenda2063 = 0
    //     }else{
    //         redirectAgenda2063 = props.location.state
    //     }
    // }

        return (
            <> 
            <header className="header-global agenda2063Header">
                <Navbar>
                    <NavbarBrand>
                        <Link to="/">
                            <img alt="..." src={require("../assets/img/brand/logo.png")}></img>
                        </Link>   
                    </NavbarBrand>
                    <Nav className="a2063-icon-padding ">
                        <Col></Col>
                        <Col></Col>
                        { 
                        agenda2063.map(function(a2063, index){
                                let  imgSrc = images(`./${a2063.image}.png`);
                                let  imgHover = images(`./${a2063.image2}.png`);

                                let  iconSquare = images(`./${a2063.iconSquare}.png`);
                                let  iconSquareHover = images(`./${a2063.iconSquareHover}.png`);

                                let  iconSmall = images(`./${a2063.iconSmall}.png`);
                                let  iconSmallHover = images(`./${a2063.iconSmallHover}.png`);

                                let color = a2063.color;

                                const backgroundHoverStyles = {
                                    backgroundImage: `url(${iconSmallHover})`,
                                    width: '100%',
                                    height : '28px',
                                    backgroundPosition : 'center',
                                    backgroundRepeat : 'no-repeat',
                                    backgroundColor : `rgb(${color})`
                                }
                                const backgroundStyles = {
                                    backgroundImage: `url(${iconSmall})`,
                                    width: '100%',
                                    height : '28px',
                                    backgroundPosition : 'center',
                                    backgroundRepeat : 'no-repeat',
                                }

                                const titleTextStyles = {
                                    color: `rgb(${color})`
                                }

                                const titleTextStylesActive = {
                                    color: "#fff"
                                }

                                const buttonStyles = {

                                }
                                const buttonStylesActive = {
                                    backgroundColor: `rgb(${color})`
                                }

                                let sdgNumber = index + 1;
                                let url = "Sdgs/Sdg_" + sdgNumber;
                                return <Col key={index}>
                                            
                                            <Button style={  activeA2063 == index ? buttonStylesActive : buttonStyles}  onClick={handleA2063Change} value={a2063.id} className={ activeA2063 == index ? 'active': '' }>
                                                <span style={ activeA2063 == index ? titleTextStylesActive : titleTextStyles} className="a2063-icon-title-text"> { a2063.id !=0 ? 'Aspiration\n' + a2063.id : 'All \n Aspirations'} </span>
                                                <div  style={ activeA2063 == index ? backgroundHoverStyles : backgroundStyles} className="a2063-icon-img" ></div>
                                            </Button>
                                        </Col>
                        })}
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                       
                    </Nav>
                </Navbar>
          
                <Menu right>
                    <Link to="/" className="text-white">HOME</Link> 
                    <Link to="/SdgLanding" className="text-white">SDGs</Link>
                    <Link to="/Dashboard" className="text-white">DASHBOARD</Link>
                    <Link to="/CountryProfile" className="text-white">COUNTRY PROFILE</Link>
                    <Link to="/A2063Landing" className="text-white">AGENDA 2063</Link>
                    <Link to="/About" className="text-white">ABOUT US</Link>
                    <Link to="/Faqs" className="text-white">FAQs</Link>
                    <Link to="/DataUpload" className="text-white">ADMIN</Link>
                </Menu>
            </header> 
          
            </>
        );
    
}

export default Header;
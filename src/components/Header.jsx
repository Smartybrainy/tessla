import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
            <Link to="/">
                <img src="/images/logo.svg" alt="" />
            </Link>

            <Menu>
                {cars.map((car, index) =>
                    <Link to="#" key={index}>{car}</Link>
                    )}
            </Menu>

            <RightMenu>
                <Link to="#">Shop</Link>
                <Link to="#">Tesla Account</Link>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomCloseBtn onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {cars.map((car, index) =>
                    <li><Link to="#" key={index}>{car}</Link></li>
                    )}
                <li><Link to="#">Existing Inventory</Link></li>
                <li><Link to="#">Used Inventory</Link></li>
                <li><Link to="#">Cyber Attack</Link></li>
                <li><Link to="#">Miscellenous</Link></li>
            </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    list-style-type: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    z-index: 100;

    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: all 250ms linear;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CustomCloseBtn = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home(props) {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Deliver"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-s.jpg"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Deliver"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-y.jpg"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Deliver"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-3.jpg"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Deliver"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                backgroundImg="model-x.jpg"
            />
            <Section 
                title="Lowest Cost Solar Panel"
                description="Money Back Guarantee"
                leftBtnText="Custom Order"
                rightBtnText="Learn"
                backgroundImg="solar-panel.jpg"
            />
            <Section 
                title="Solor For New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText="Custom Order"
                rightBtnText="Learn"
                backgroundImg="solar-roof.jpg"
            />
            <Section 
                title="Accessories"
                description=""
                leftBtnText="Custom Order"
                    backgroundImg="accessories.jpg"
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
import React, { Component } from 'react'
import styled from 'styled-components';
import {BsLinkedin} from "react-icons/bs";

const Container = styled.div`
    min-height: 5vh;
    padding: 20px 20px;
    background: #000000;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        grid-gap: 20px;
    }
`

const Column = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
`

const Link = styled.a`
    color: white;
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: none;
    max-width: 200px;
    &:hover {
        color: rgb(0,153,255);
        transition: 200ms ease-in;
        text-decoration: none;
    }
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Row>
                        <Column>
                        <Link href="#">Linkedin</Link>
                        <Link href="#"><BsLinkedin/></Link>
                        </Column>
                        
                        <Column>
                        <Link href="#">Instagram</Link>
                        <Link href="#"><BsLinkedin/></Link>
                        </Column>
                        
                        <Link href="#">Facebook</Link>
                        <Link href="#"></Link>
                    </Row>
                </Wrapper>
            </Container>
        )
    }
}
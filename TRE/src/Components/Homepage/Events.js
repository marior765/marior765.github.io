import React, { Component } from 'react';
import styled from 'styled-components';
import EventArr from '../../Assets/Events/EventsArr';

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height: auto;
    padding: 2% 0;
`

const ContainerIn = styled.div`
    width: 1200px;
    display: inline-flex;
    flex-wrap: wrap;
    height: auto;
`

const Caption = styled.h1`
    width: 245px;
    height: 34px;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1.2px;
    color: #a1a1a1;
`

const ParagraphButton = styled.p`
    width: 272px;
    height: 26px;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: 0.2px;
    color: #000000;
    cursor:pointer;
`

const ImgP = styled.span`
    width: 250px;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.4px;
    color: #000000;

`

const ImgN = styled.span`
    width: 77px;
    opacity: 0.5;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.4px;
    color: #000000;`

const Img = styled.img`
    width: 428px;
    height: 325px;
    border: 2px solid #f9f9f9;
    border-radius: 5px;
`

const EventContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:428px;
    flex-wrap:wrap;
    margin:5px 0 0 20px`

class Events extends Component {
    state = {
        length: 2,
        vue: 'Посмотреть все'
    }

    lengthMaxHandler = () => {
        this.setState({
            length: 5,
            vue: 'Скрыть'
        })
    }
    lengthMinHandler = () => {
        this.setState({
            length: 2,
            vue: 'Посмотреть все'
        })
    }
    render() {
        const events = EventArr.map((el,index) => {
            return (
                    <EventContainer key={index}>
                        <Img src={el.src} />
                        <ImgP>{el.Par}</ImgP>
                        <ImgN>{el.data}</ImgN>
                    </EventContainer>
            )
        })
        events.length = this.state.length;
        return(
            <Container>
                <ContainerIn>
                    <div>
                    <Caption>Мероприятия</Caption>
                    <ParagraphButton onClick={this.state.length === 2 
                        ? this.lengthMaxHandler 
                        : this.lengthMinHandler}>{this.state.vue}</ParagraphButton>
                    </div>
                    {events}
                </ContainerIn>
            </Container>
        )
    }
}

export default Events;
import React,{ Component } from 'react';
import styled from 'styled-components';
import BestVineArr from '../../Assets/Vine/Vine';
import './OrderPage.css'

const ContainerPage = styled.div`
    display:flex;
    justify-content: center;
    item-align: center;
    background-color: white;
    flex-wrap:wrap;
    height:auto;`
const Caption = styled.span`
    width: 81px;
    height: 26px;
    font-size: 16px;
    text-transform: bold;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: 0.2px;
    color: #000000;`
const CaptionItem = styled.p`
    width: 325px;
    height: 72px;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    color: #000000;`
const GrayBack = styled.div`
    display:flex;
    justify-content: center;
    item-align: center;
    width:100%;
    background-color:#f9f9f9;
    height:175px;`
const Container = styled.div`
    width: 1166px;`
const Text = styled.span`
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: 0.2px;
    color: #5e5e5e;
    word-wrap:break-word;`
const Ul = styled.ul`
    list-style:none;
    margin-left:-40px;`
const Li = styled.li`
    margin-top: 20px;
    display:flex;
    justify-content:space-between;
    width:100%;`
const CountInfo = styled.div` 
    display:inline-flex; 
    justify-content:space-between; 
    width:250px; 
    margin-top:20px;` 
const CounterContainer = styled.div` 
    width: 90px; 
    height: 40px; 
    border-radius: 4px; 
    background-color: #efefef; 
    display:flex; 
    justify-content:space-between; 
    align-items:center;` 
const ButtonR = styled.button` 
    width: 100%; 
    height: 50px; 
    border-radius: 4px; 
    background-image: linear-gradient(to right, #da605e, #c53237); 
    text-align:center; 
    vertical-align:middle; 
    border:0; 
    margin-top:20px;`
const ButtonText = styled.span`
    width: 202px;
    height: 18px;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #ffffff;`
const ButtonB = styled.button`
    width: 137px;
    height: 45px;
    border-radius: 4px;
    background-color: #000000;
    border:0;`

class OrderPage extends Component {
    render() {
        const index = localStorage.getItem('items');
        return (
            <ContainerPage>
                <GrayBack>
                    <Container>
                        <CaptionItem>Оформление заказа</CaptionItem>
                        <Text>Введите свои данные для оформления заказа и сможете его отслеживать из вашего кабинета.</Text>
                    </Container>
                </GrayBack>
                <Container>
                    <div className='inputFields'>
                        <strong>1. Личные данные</strong>
                        <br />
                        <input className='input_d' type='text' placeholder='Ваше имя' />
                        <input className='input_d' type='text' placeholder='Город' />
                        <input className='input_d' type='text' placeholder='Улица' />
                        <input className='input_l' type='text' placeholder='Номер дома' />
                        <input className='input_r' type='text' placeholder='Подьезд' />
                        <hr />
                    </div>
                    <div className='inputFields'>
                        <strong>2. Товары в заказе</strong>
                        <br />
                        <img width='38px' height='139px' src={BestVineArr[index].src} alt='vine' className='order-img' />
                        <div className='modal-counter'>
                            <p className='Shanon'>
                                {BestVineArr[index].fullName}
                            </p>
                            <CountInfo>  
                                <CounterContainer> 
                                    <span>-</span> 
                                    <span>1</span> 
                                    <span>+</span> 
                                </CounterContainer>
                                <span> {BestVineArr[index].value}</span>
                                <strong>{BestVineArr[index].cost} грн</strong> 
                            </CountInfo>
                        </div>
                        <hr />
                    </div>
                    <div className='inputFields'>
                        <strong>3. Платежнные данные</strong>
                        <br />
                        <input className='input_d' type='text' placeholder='Имя владельца карты' />
                        <input className='input_d' type='text' placeholder='Номер карты' />
                        <input className='input_l' type='text' placeholder='CVV код' />
                        <input className='input_r' type='text' placeholder='ДД/ГГ' />
                        <ButtonR><ButtonText>Оформить заказ</ButtonText></ButtonR>
                        <hr />
                    </div>
                    <div className='Result'>
                        <strong>Детали вашего заказа</strong>
                        <br />
                        <Ul>
                            <Li>
                                <Text>К-во(1 бут.)</Text><Caption>{BestVineArr[index].cost} грн</Caption>
                            </Li>
                            <Li>
                                <Text>Скидка</Text><Caption>0 грн</Caption>
                            </Li>
                            <Li>
                                <Text>Доставка</Text><Caption>100 грн</Caption>
                            </Li>
                            <input className='input_l' type='text' placeholder='Промокод' /><ButtonB><ButtonText>Применить</ButtonText></ButtonB>
                            <Li><strong>Итого</strong><Caption>{BestVineArr[index].cost} грн</Caption></Li>
                        </Ul>
                    </div>
                </Container>
            </ContainerPage>
        )
    }
}

export default OrderPage;
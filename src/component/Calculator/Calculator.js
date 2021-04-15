import React, {useState} from 'react';
import {
    Badge,
    Button,
    Carousel,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Row,

} from 'react-bootstrap';

import './Calculator.css';
import {
    ArrowLeftRight,
    ArrowRepeat,
    Cash,
    ChevronLeft,
    ChevronRight,
    CreditCard2Back,
    Wallet
} from "react-bootstrap-icons";

export default function Calculator() {
    const [operation, setOperation] = useState('buy');
    const [coin, setCoin] = useState({});

    return (

        <Container className={'calculator'}>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div className={'operation-container'}>
                        <Badge as='a' pill className={operation === 'buy' ? 'active' : ''}
                               onClick={() => setOperation('buy')}>
                            Comprar
                        </Badge>

                        <Badge as='a' pill className={operation === 'sell' ? 'active' : ''}
                               onClick={() => setOperation('sell')}>
                            Vender
                        </Badge></div>

                </Col>
            </Row>
            <CarouselCoins setCurrentCoin={setCoin}/>
            <Row>
                <Col>
                    <div className={'fields-container mt-2 px-2 mr-3'}>
                        <Form>

                            <InputGroup>
                                <FormControl className="no-border"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="no-border">EUR</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <div className={'pl-1 pr-4'}>
                                <hr className="mx-0"/>
                            </div>

                            <InputGroup>
                                <FormControl className="no-border"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className="no-border">BTC</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                        </Form>
                    </div>
                    <div className={'btn-change-circular justify-content-center align-items-center'}><ArrowRepeat/>
                    </div>


                </Col>

            </Row>
            <Row className={'mt-3 btn-payment justify-content-between'}>

                <Col className={'pr-0'} xs={'auto'}>
                    <Button variant="outline-primary" as={'a'}><ArrowLeftRight size={12}/>
                        <span> Transferencia</span></Button>
                </Col>
                <Col className={' px-0'} xs={'auto'}>
                    <Button variant="outline-secondary"><CreditCard2Back size={12}/>
                        <span> Tarjeta</span></Button>
                </Col>
                <Col className={'pl-0'} xs={'auto'}>
                    <Button variant="outline-secondary" className={"float-right"} as={'a'}> <Wallet size={12}/>
                        <span> Efectivo</span></Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" className=" mt-3" block>Comprar {coin}</Button>
                </Col>
            </Row>
        </Container>
    );
}

function CarouselCoins(props) {
    const [coin, setCoin] = useState({icon: "", name: 'Bitcoin', symbol: 'BTC'},);
    let coins = [
        {icon: "", name: 'Bitcoin', symbol: 'BTC'},
        {icon: "", name: 'Ethereum', symbol: 'ETH'},
        {icon: "", name: 'Ripple', symbol: 'XRP'},
        {icon: "", name: 'Tether', symbol: 'USDT'},
        {icon: "", name: 'Cardano', symbol: 'ADA'},
        {icon: "", name: 'TRON', symbol: 'TRX'},
        {icon: "", name: 'Polkadot', symbol: 'DOT'},
        {icon: "", name: 'Dogecoin', symbol: 'DOGE'},
        {icon: "", name: 'Litecoin', symbol: 'LTC'},
        {icon: "", name: 'Bitcoin Cash', symbol: 'BCH'},
        {icon: "", name: 'Stellar', symbol: 'XLM'},
        {icon: "", name: 'Dash', symbol: 'DASH'},
        {icon: "", name: 'VeChain', symbol: 'VET'},
        {icon: "", name: 'Uniswap', symbol: 'UNI'},
        {icon: "", name: 'Neo', symbol: 'NEO'},
        {icon: "", name: 'Decentraland', symbol: 'MANA'},
        {icon: "", name: 'Chiliz', symbol: 'CHZ'},
        {icon: "", name: 'Chainlink', symbol: 'LINK'},
        {icon: "", name: 'Algorand', symbol: 'ALGO'},
        {icon: "", name: 'Cosmos', symbol: 'ATOM'},
        {icon: "", name: 'Tezos', symbol: 'XTZ'},
        {icon: "", name: 'VeThor Token', symbol: 'VTHO'},
        {icon: "", name: 'Aave', symbol: 'AAVE'},
        {icon: "", name: 'Waves', symbol: 'WAVES'},

    ];

    function updateCoin(currentCoin) {
        props.setCurrentCoint(currentCoin);
        setCoin(currentCoin);
    }

    let items = [];
    for (let i = 0; i < coins.length / 8; i++) {
        let slice = coins.slice(i * 8, i * 8 + 8);
        slice = slice.map(currentCoin =>
            <Col xs={3} key={currentCoin.symbol} className={'px-0'}> <Badge as='a' pill
                                                         className={'coin-pill ' + currentCoin.symbol === coin.symbol ? 'active' : ''}
                                                         variant="light" onClick={() => updateCoin(currentCoin)}>
                <Cash size={16} color={'black'}/> {currentCoin.symbol}
            </Badge></Col>
        );
        items.push(<Carousel.Item key={i} className={'container'}>
            <Row>{slice}</Row>
        </Carousel.Item>);

    }
    return (<Row>
        <Col>
            <Carousel interval={null}
                      prevIcon={<ChevronLeft size={18} color={'var(--main-color)'}/>}
                      nextIcon={<ChevronRight size={18} color={'var(--main-color)'}/>}
            >
                {items}

            </Carousel>
        </Col>
    </Row>);
}
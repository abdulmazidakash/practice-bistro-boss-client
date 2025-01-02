import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaPizzaSlice, FaLeaf, FaMugHot, FaIceCream, FaGlassCheers } from 'react-icons/fa'; // React Icons
import Cover from '../../shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={orderImg} title={'Order Food'} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="tab-list justify-center items-center text-center gap-10 space-x-8 my-8">
                    <Tab>
                        <FaLeaf /> Salad
                    </Tab>
                    <Tab>
                        <FaPizzaSlice /> Pizza
                    </Tab>
                    <Tab>
                        <FaMugHot /> Soup
                    </Tab>
                    <Tab>
                        <FaIceCream /> Dessert
                    </Tab>
                    <Tab>
                        <FaGlassCheers /> Drinks
                    </Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;

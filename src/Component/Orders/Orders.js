import React , {useEffect} from 'react';
import { useState } from 'react';
import { db } from '../../Firebase/firebase';
import { useStateValue } from '../../StateProvider/StateProvider';
import Order from '../Order/Order';
import './Orders.css';

function Orders() {

    const [{user},dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(user.uid)
            .collection('orders')
            .orderBy('created' , 'desc')
            .onSnapshot(snapShot => (
                setOrders(snapShot.docs.map(doc => ({
                    id : doc.id,
                    data : doc.data()
                }))
            )))
        }
        else{
            setOrders([]);
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {
                    orders.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;

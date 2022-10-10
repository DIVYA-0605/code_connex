import React from 'react'
import Deliverystatus from './Deliverystatus'
import './Feed.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Deliveryoption from './Deliveryoption';
import InfoIcon from '@mui/icons-material/Info';
import ProgressBar from "@ramonak/react-progress-bar";
import { Chart, PieController, registerables } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);
 
function Feed() {

  const neworderItem = (title,id,otp) => (
    <div className="neworder">
      <h2>{title}</h2>
      <div className="orderitem_status">
        <span>#{id}</span>
        <p>OTP-<span>{otp}</span></p>
      </div>
     
    </div>
  );
  return (
    <div className="feed">
      <div className='feed_inputcontainer'>
      <Deliverystatus Icon={ShoppingCartOutlinedIcon} title="Total Delivery" subtitle="2511" color='green'/>
     <Deliverystatus Icon={LocalShippingOutlinedIcon} title="Total Order" subtitle="2300"/>
     <Deliverystatus Icon={DeliveryDiningOutlinedIcon} title="Total Cancel" subtitle="21"/>
     <Deliverystatus Icon={ShoppingCartCheckoutOutlinedIcon} title="Total Returns" subtitle="5"/>

      </div>
      <div className="order">
      <div className="order_summary">
   <div className="order_title">
     <h2>Order Summary</h2>
     <h5>Today</h5>
   </div>


   <div
   className='order_status'>
        <Deliveryoption title="75" Icon={FiberManualRecordIcon} color="#9ea832" subtitle="on Delivery"/>
        <Deliveryoption title="92" Icon={FiberManualRecordIcon} color="green" subtitle="Delivered"/>
        <Deliveryoption title="7" Icon={FiberManualRecordIcon} color="#a83279" subtitle="Cancelled"/>
   </div>


   <div className="progress">
     <div className="pie_graph">
       <Pie data={{ 

  datasets: [{
    label: 'My First Dataset',
    data: [100, 50, 300],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]}}
      />
     </div>


     <div className="progress_status">
       <div className="progress_line">
       <ProgressBar completed={80} width="100%" height="10px" isLabelVisible={false}  bgColor="#FFCD56"
    labelColor="#e8090"/>
       <p>55% Delivered</p>
       </div>
       <div className="progress_line">
       <ProgressBar completed={60} width='100%' height="10px" isLabelVisible={false}  bgColor="#36A2EB"
    labelColor="#e80909"/>
       <p>30% on Delivery</p>
       </div>
       <div className="progress_line">
       <ProgressBar completed={20} width='100%' height="10px" isLabelVisible={false}  bgColor="#FF6384"
    labelColor="#e80909"/>
       <p>13% Cancelled</p>
       </div>
       

   
     </div>
  
   </div>
</div>
   <div className="new_orders">
     <div className="neworder_card">
     <h1>New orders</h1>
     <h6>View All</h6>
     </div>
     <div>
     {neworderItem("Brooklyn Simmons",'0123456','1234')}
     {neworderItem("Jacob Jones",'0123456','1234')}
     {neworderItem("Leslie Alexander",'0123456','1234')}
     </div>
     
   </div>
      </div>












<div className="order_graph">
  <div className="graph_card">
    <div className="graph_title">
      <h2>PRIMARY TEXT</h2>
      <h5>Secondary Text</h5>
    </div>
    <InfoIcon style={{color:'gray'}}/>

  </div>

<div>
  <div className="line_graph" >
    <Line  width={10}
height={200}
options={{maintainAspectRatio: false}}
     data={{
      labels: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  datasets: [{
    label: 'Product 1',
    data: [-60, -20, -60, 60, 0,20,-60],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
  
    }}
    />
  </div>
  </div>

</div>


    </div>
   

  )
}

export default Feed
import React from 'react'
import Orders from './Orders';

const OrdersList = (props) => {
    return (
        <div className="App"  >
          <section style={{ backgroundColor:" #bdddff"}}>
            <div className="container my-5 py-5" >
              <div className="row d-flex justify-content-center" >
                <div className="col-md-12 col-lg-10" >
                  <div className="card text-dark" style={{ backgroundColor: "white" }}>
                    <h4 className="mb-0  p-4" >Recent orders</h4>
                    {props.data.map((data) => {
                      return (
                        <Orders
                          key={data.id}
                          productName={data.productName}
                          supplierName={data.supplierName}
                          amount={data.amount}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    };

export default OrdersList

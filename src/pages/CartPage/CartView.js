import React from 'react';
import { Button } from 'react-bootstrap';

const itemList = ({ carts, setCarts, onComplete, onRemove, setQuantity }) => {


  return (
    <div>
      <ol>

        {carts && carts.map((item, index) => {
          return (

            <li key={index} className={item.isCompleted ? 'complete' : ''}>

              <img
                src={item.imageUrl}
                alt="Product"
              />
              <div>
                <p>{item.title}</p>
                <p>₩{item.price}</p>
                <p>{item.manufacturer}</p>

              </div>


              <span>수량:{item.quantity}</span>
              <br></br>
              <Button variant="primary" onClick={() => setQuantity("plus", item._id, item.quantity + 1)}>+</Button>
              <Button onClick={() => setQuantity("minus", item._id, item.quantity - 1)}>-</Button>
              <Button
                type="button"
                onClick={() => {
                  onRemove(index);
                }}
              >
                삭제
              </Button>
            </li>

          );
        })}
      </ol>
    </div>
  )
};

export default itemList;

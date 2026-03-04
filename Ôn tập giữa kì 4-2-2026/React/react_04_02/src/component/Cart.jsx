
import React, { useReducer } from 'react';

// Reducer nhận vào state hiện tại và một yêu cầu tương ứng sau đó trả về state mới.
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': return { count: state.count + 1 };
    case 'REMOVE_ITEM': return { count: state.count > 0 ? state.count - 1 : 0 };
    case 'RESET': return { count: 0 };
    default: return state;
  }
};

function Cart() {
  // useReducer trả về state và hàm 'dispatch' để gửi yêu cầu tới reducer.
  // usereducer giúp việc xử lý dễ dàng hơn khi ta chỉ cần truyền vào các action theo nhu cầu 
  // nếu không sử dụng useReducer thì bài này em phải viết rất nhiều hàm riêng xử lý cho từng thao tác và mỗi nút phải xử lý sự kiện tương ứng với hàm
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>3. useReducer Exercise</h3>
      <p>Số lượng sản phẩm: {state.count}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM' })}>Thêm</button>
      <button onClick={() => dispatch({ type: 'REMOVE_ITEM' })}>Xóa</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Làm trống</button>
    </div>
  );
}
export default Cart
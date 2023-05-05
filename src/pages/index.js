import { useSelector, useDispatch } from "react-redux";
import { resultActions } from '../store/result-slice';
import { numberActions } from '@/store/number-slice';
import { operatorActions } from '@/store/operator-slice';

export default function Home() {

  const result = useSelector((state) => state.res.result);
  const number = useSelector((state) => state.num.number);
  const operator = useSelector((state) => state.op.operator);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(resultActions.add(number));
  }
  const subtract = () => {
    dispatch(resultActions.subtract(number));
  }
  const multiply = () => {
    dispatch(resultActions.multiply(number));
  }
  const divide = () => {
    dispatch(resultActions.divide(number));
  }

  const handleNumber = (num) => {
    if (num == 'AC') {
      setNumber(0);
      reset();
    } else if (num == 'C') {
      setNumber(0)
    } else if (number == 0) {
      setNumber(num)
    } else {
      setNumber(parseInt(number.toString() + num.toString()))
    }
  }

  const reset = () => {
    dispatch(resultActions.reset());
  }

  const setNumber = (number) => {
    dispatch(numberActions.setNumber(number))
  }

  const handleOperator = (op) => {
    if (op == '+') {
      setOperator()
    } else if (op == '-') {
      setOperator()
    } else if (op == '*') {
      setOperator()
    } if (op == '/') {
      setOperator()
    }
  }

  const setOperator = (op) => {
    dispatch(operatorActions.setOperator(op))
  }

  const handleOperation = () => {
    if (operator == '+') {
      add()
    } else if (operator == '-') {
      subtract()
    } else if (operator == '*') {
      multiply()
    } else if (operator == '/') {
      divide()
    }
  }

  return (
    <>
      <main className='bg-blue-400 w-full h-screen flex items-center justify-center'>
        <div className='w-1/2 h-1/2 flex flex-row'>
          <div className='w-3/4 h-full'>
            <div className='bg-orange-400 w-full h-1/4 flex items-center justify-center'>
              <div className='bg-black w-5/6 h-5/6 text-white text-right text-6xl p-4'>
                {result}
              </div>
            </div>
            <div className='bg-red-400 w-full h-3/4 flex items-center justify-center flex-col'>
              {/* {['+', '-', '*', '/'].map((item) => (
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'>{item}</button>
              ))} */}
              <div className="m-4">
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                onClick={() => setOperator('+')}>+</button>
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                onClick={() => setOperator('-')}>-</button>
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                onClick={() => setOperator('*')}>*</button>
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                onClick={() => setOperator('/')}>/</button>
                <button className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                onClick={() => handleOperation()}>=</button>
              </div>
              <div className="flex flex-col">
                <p>Payload: {number}</p>
                <p>Operator: {operator}</p>
              </div>
            </div>
          </div>
          <div className='bg-violet-400 w-1/4 h-full flex items-center justify-center'>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'C', 'AC'].map((item) => (
                <button
                  className='bg-white text-black w-[50px] h-[50px] text-3xl m-2 rounded-full'
                  onClick={() => handleNumber(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

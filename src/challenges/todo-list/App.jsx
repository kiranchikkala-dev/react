// import './styles.css';
import { useState } from 'react';

const dayList = ['sunday', 'monday'];
const startDateList = [1, 2, 3, 4, 5];
const endDateList = [11, 12, 13, 14];

const Select = ({ list = [], onClick, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container '>
      <div className='value' onClick={() => setOpen(!open)}>
        {value || 'Select...'}
      </div>

      {open && (
        <ul className='list'>
          {list.map((item) => (
            <li
              key={item}
              onClick={() => {
                onClick(item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function App() {
  const [state, setState] = useState([]);

  const handleAddItem = () => {
    setState((prev) => [
      ...prev,
      {
        id: Date.now(),
        day: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const handleSelectValue = (row, val) => {
    setState((prev) =>
      prev.map((item) => (item.id === row.id ? { ...item, day: val } : item))
    );
  };

  const handleSelectStartDate = (row, val) => {
    setState((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, startDate: val } : item
      )
    );
  };

  const handleSelectEndDate = (row, val) => {
    setState((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, endDate: val } : item
      )
    );
  };
  const handleRemove = (row) => {
    setState((prev) => prev.filter((item) => item.id !== row.id));
  };

  return (
    <div className='App'>
      <button onClick={handleAddItem}>Add</button>
      <button onClick={() => setState([])}>Clear all</button>

      {state.map((item) => (
        <div className='user_view_list' key={item.id}>
          <label>
            Day:
            <Select
              value={item.day}
              list={dayList}
              onClick={(val) => handleSelectValue(item, val)}
            />
          </label>

          <label>
            Start Date:
            <Select
              value={item.startDate}
              list={startDateList}
              onClick={(val) => handleSelectStartDate(item, val)}
            />
          </label>

          <label>
            End Date:
            <Select
              value={item.endDate}
              list={endDateList}
              onClick={(val) => handleSelectEndDate(item, val)}
            />
          </label>

          <span onClick={() => handleRemove(item)}>cross</span>
        </div>
      ))}
    </div>
  );
}

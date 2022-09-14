import { Card } from '../component/card.component';

export const AddUser = () => {
  const addUserHandler = (event: any) => {
    event.preventDefault();
  };
  const labelStyle = 'block font-bold mb-1';
  const inputStyle = 'border border-black rounded-sm mb-2 w-full';
  const buttonStyle = 'border border-black p-1 rounded-sm';
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" className={labelStyle}>
          Username
        </label>
        <input id="username" type="text" className={inputStyle} />
        <label htmlFor="age" className={labelStyle}>
          Age (Years)
        </label>
        <input id="age" type="number" className={inputStyle} />
        <button type="submit" className={buttonStyle}>
          Add user
        </button>
      </form>
    </Card>
  );
};

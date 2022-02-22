export const Triangle = ({ see }) => {
  return (
    <div className='triangle-div' style={{ display: see ? "block" : "none" }}>
      <div className='triangle'></div>
    </div>
  );
};

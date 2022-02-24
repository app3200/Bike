export const Addbtn = ({ remove,addval }) => {
  return (
    <button
      className="add"
      onClick={() => {
        remove();
        addval();
      }}
    >
      Add
    </button>
  );
};

export const Removebtn = ({ remove ,removeval}) => {
  return (
    <button
      className="remove"
      onClick={() => {
        remove();
        removeval();
      }}
    >
      Remove
    </button>
  );
};


export const Buynow=()=>{
    return (<button className="buybtn" onClick={()=>{
    }}>
        Buy Now
    </button>)
}

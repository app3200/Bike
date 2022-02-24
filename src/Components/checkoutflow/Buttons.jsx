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


export const Buynow=({final})=>{
    return (<button className="buybtn" onClick={()=>{
      final()
    }}>
        Buy Now
    </button>)
}

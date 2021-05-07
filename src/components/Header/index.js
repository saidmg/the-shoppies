
export default function Header() {
  return (
         <div className="d-flex bd-highlight" style={{ borderBottom: '0px solid black' }}>
                <div className="p-3 flex-grow-1 bd-highlight"><h3 style={{ color: 'black', paddingLeft: '5%' }}>The Shoppies</h3></div>
                <div className="p-3 bd-highlight" style={{ marginRight: '3%' }}><button className="btn form-control" style={{ color: 'black' }}>About</button></div>
                {/* <div className="p-2 bd-highlight">Third flex item</div> */}
            </div>
  );
}
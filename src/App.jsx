import React from 'react';

const sold = [
  { address: "1203 W Temple Ave, Effingham, IL", price: "$225,500", date: "09/05/2025", beds: 3, baths: 3, sqft: 1500, role: "Listing Agent" },
  { address: "1009 N Henrietta St, Effingham, IL", price: "$205,000", date: "08/08/2025", beds: 3, baths: 2, sqft: 1345, role: "Dual Agent" },
  { address: "510 W Clinton Ave, Effingham, IL", price: "$176,900", date: "04/04/2025", beds: 2, baths: 1, sqft: 1308, role: "Buyer's Agent" },
  { address: "1022 Penguin St, Effingham, IL", price: "$289,900", date: "07/07/2025", beds: 3, baths: 2, sqft: 1800, role: "Buyer's Agent" },
  { address: "1009 E Grove Ave, Effingham, IL", price: "$190,000", date: "07/08/2025", beds: 3, baths: 2, sqft: 1685, role: "Buyer's Agent" },
  { address: "907 Flame Ave, Effingham, IL", price: "$202,000", date: "09/19/2025", beds: 3, baths: 2, sqft: 1432, role: "Listing Agent" },
];

const pending = [
  { address: "1010 E Grove Ave, Effingham, IL", price: "Pending", role: "Dual Agent" },
  { address: "916 Piatt Ave, Mattoon, IL", price: "Pending", role: "Buyer's Agent" }
];

export default function App() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1 style={{fontSize:'2.5rem', fontWeight:800, lineHeight:1.1}}>Effingham Real Estate — Done Right</h1>
          <p style={{maxWidth:600, marginTop:8}}>Justin Ruholl • RE/MAX Key Advantage • Serving Effingham, Mattoon & Central Illinois</p>
          <div className="cta">
            <a className="button" href="#contact">Get Your Home Value</a>
            <a className="button ghost" href="#sold">View Sold Homes</a>
          </div>
        </div>
      </div>

      <div className="container" id="pending">
        <h2>Under Contract</h2>
        <div className="grid">
          {pending.map((p, i) => (
            <div className="card" key={i}>
              <div className="pad">
                <div style={{fontWeight:700}}>{p.address}</div>
                <div className="badge" style={{marginTop:6}}>{p.price}</div>
                <div className="small" style={{marginTop:6}}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" id="sold">
        <h2>Recently Sold</h2>
        <div className="grid">
          {sold.map((p, i) => (
            <div className="card" key={i}>
              <div className="pad">
                <div style={{fontWeight:700}}>{p.address}</div>
                <div className="badge" style={{marginTop:6}}>{p.price}</div>
                <div className="small" style={{marginTop:6}}>{p.beds} bed • {p.baths} bath • {p.sqft.toLocaleString()} SF</div>
                <div className="small" style={{marginTop:6}}>{p.role} • Sold {p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" id="contact">
        <h2>Contact</h2>
        <p>Phone: (217) 663-0563 • Email: ruhollrealtor@gmail.com</p>
        <p>Office: RE/MAX Key Advantage, Effingham, IL • IL License #475.212245</p>
      </div>

      <div className="footer">
        © {new Date().getFullYear()} Justin Ruholl — Equal Housing Opportunity
      </div>
    </div>
  );
}

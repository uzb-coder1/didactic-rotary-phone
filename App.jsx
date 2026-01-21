export default function App() {
  const users = [
    { id: 1, name: "Emily Johnson", role: "Product Manager", dept: "Product Development", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Arjun Patel", role: "Software Engineer", dept: "Technology", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Carlos Hernández", role: "UI Designer", dept: "Design", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Amina Idris", role: "Marketing Specialist", dept: "Marketing", img: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Takumi Sato", role: "HR Specialist", dept: "Human Resources", img: "https://i.pravatar.cc/150?u=5" },
    { id: 6, name: "Emma Dubois", role: "Sales Manager", dept: "Sales", img: "https://i.pravatar.cc/150?u=6" }
  ];

  const infos = [
    { id: 1, title: "Ocean Mysteries", text: "Unraveling the beauty of the deep blue ocean and coral reefs.", img: "https://picsum.photos/400/250?random=10" },
    { id: 2, title: "High Mountains", text: "Discovering the snowy peaks and fresh mountain air.", img: "https://picsum.photos/400/250?random=11" },
    { id: 3, title: "Green Forests", text: "The secrets of the wild and ancient green sanctuaries.", img: "https://picsum.photos/400/250?random=12" },
    { id: 4, title: "Golden Sands", text: "Exploring the endless dunes and desert landscapes.", img: "https://picsum.photos/400/250?random=13" },
    { id: 5, title: "Deep Rivers", text: "The journey of water through the heart of the world.", img: "https://picsum.photos/400/250?random=14" }
  ];

  return (
    <>
      <section className="section user-section">
        <h1 className="title">User Card</h1>
        <div className="user-grid">
          {users.map(u => (
            <div className="user-card" key={u.id}>
              <div className="img-box"><img src={u.img} /></div>
              <h4>{u.name}</h4>
              <p className="role">{u.role}</p>
              <p className="dept">{u.dept}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section className="section">
        <h1 className="title">Info Card</h1>
        <div className="info-container">
          {infos.map(i => (
            <div className="info-card" key={i.id}>
              <img src={i.img} />
              <div className="content">
                <h3>{i.title}</h3>
                <p>{i.text}</p>
                <button className="btn-read">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
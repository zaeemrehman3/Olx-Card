import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar /> 
      <div className="appContainer">
        <h1 className="appTitle">Mobile Phones</h1>
        <div className="cardRow">
          <Card img="https://images.olx.com.pk/thumbnails/490783493-800x600.webp" price="290,000" description="13 PM PTA approved Sierra Blue 256 GB" location="9th Avenue, Islamabad" time="3 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/489583103-800x600.webp" price="90,000" description="Sharp Aquous R5" location="Commercial Market, Rawalpindi" time="5 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/488418208-800x600.webp" price="20,000" description="Oneplus 9, 8, 8 Pro 12/256 Dual Sim" location="Commercial Market, Rawalpindi" time="13 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/466487993-800x600.webp" price="29,500" description="Samsung Galaxy Note 10+ 12/256 full sim time available" location="I-8, Islamabad" time="10 days ago"/>
        </div>

        <h1 className="appTitle">Cars</h1>
        <div className="cardRow">
          <Card img="https://images.olx.com.pk/thumbnails/490022576-800x600.webp" price="4,500,000" description="Toyota Yaris ATIV 1.3 2022 Model" location="Johar Town, Lahore" time="3 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/488571044-800x600.webp" price="3,350,000" description="Honda Civic Rebirth 2014" location="Commercial Market, Rawalpindi" time="5 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/489891927-800x600.webp" price="5,350,000" description="Toyota Altis Grande 2018" location="Commercial Market, Rawalpindi" time="13 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/489817350-800x600.webp" price="3,250,000" description="Toyota Corolla GLI 2015" location="I-8, Islamabad" time="10 days ago"/>
        </div>

        <h1 className="appTitle">Bikes & Motorcycles</h1>
        <div className="cardRow">
          <Card img="https://images.olx.com.pk/thumbnails/487901190-800x600.webp" price="470,000" description="Kawasaki Ninja replica 2019 model" location="9th Avenue, Islamabad" time="3 days ago"/>  
          <Card img="https://images.olx.com.pk/thumbnails/488954686-800x600.webp" price="52,000" description="ZMCO Bike RP - 70 Model 2015" location="Commercial Market, Rawalpindi" time="5 days ago"/>
          <Card img="https://images.olx.com.pk/thumbnails/349730090-800x600.webp" price="1,250,000" description="Chopper 400cc water cool" location="Commercial Market, Rawalpindi" time="13 days ago"/> 
          <Card img="https://images.olx.com.pk/thumbnails/490594178-800x600.webp" price="270,000" description="Suzuki GS 150 2019 Model" location="I-8, Islamabad" time="10 days ago"/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
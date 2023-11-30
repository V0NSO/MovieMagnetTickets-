import "./CP.css";

export default function CardProfile(props) {
    return (
        <div className="containerProfile">
            <img src="https://benwinney.myshopify.com/cdn/shop/products/image2.jpg?v=1680783491&width=1920" alt="alvonso" className="avatarProfile" />
            <h2 className="nameProfile">Alvonso N</h2>
            <p className="companyProfile">Universitas Diponegoro</p>
            <p className="locationProfile">Semarang</p>
        </div>
    );
}
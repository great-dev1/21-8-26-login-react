import './Hero.scss'
import QuoteMark from '../../assets/images/quote.svg'

function Hero() {
  return (
    <div className="login-hero">
      <div className="content">
        <div className="title">
          <img className="quote-mark" src={QuoteMark} alt="quote mark" />
          <h2 className="text">
            <span className="green-text">20</span>
            + Years in Business. Helping Global Customer.
          </h2>
        </div>
        <p className="detail">
          " Helping business and streamlining business processes is what we love. In our 20 years in business,
          we helped hundreads of customers worldwide identify and fix their process bottlenecks. "
        </p>
        <h3 className="name">Thris</h3>
        <h4 className="role">Admin user</h4>

        {/* Navigation dots */}
        <div className="nav-dots">
          <p className="dot green-dot"></p>
          <p className="dot"></p>
        </div>
      </div>
    </div>
  )
}

export default Hero

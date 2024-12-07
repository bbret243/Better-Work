import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1><u>About Us</u></h1>
        <p>BetterWork is dedicated to connecting top talent with the best opportunities only in the United states.</p>
        <p>We are changing stepping away from the practices of other freelancing platforms and hiring only the top US Talent</p>
        <p>Todays freelancing platforms discourage top talent with their 10% off the top fees and overpriced proposal costs</p>
        <p>This platform is to ensure you get what you pay for as clients while providing Top rated talent with more availibility</p>
      </div>

      <div className="about-us-content">
        <div className="mission-section">
          <h2><u>Our Mission</u></h2>
          <p>
            Our mission is to create a seamless marketplace/platform of talented professionals and the best clients
            who understand that other platforms have turned into greed based corporations that take advantage of everyone.
            As a freelance Senior Engineer/Systems Architect/Cloud Solutions Expert I have seen the demise of even my favorite
            platforms. They offer overpriced memberships, cut 10% of your earnings not including taxes. At the same time as allow
            anyone in the world to sign up in areas that are more third world countries where $5 USD is equivalent to $50 an hour
            in their respective countries. I have been approached by many Clients about regretting paying $10/hr for an offshore
            Engineer who barely spoke english and never met deadlines, ultimately ending in unfinished projects full of bugs. I've heard
            the same from Talent in Community groups who feel like they are being pushed out by offshore workers charging substantially less
            due to cost-of-living where they live. You should not have to start selling yourself short because of this unfortunate turned
            that most US based freelancers are experiencing. Here at Better Work we value everyone involved and believe in a platform that delivers
            Quality work on time, Universal Culture-fitting talent, Collaboration, Leadership, design principle backed development.
            I want to stand up for all Engineers/Architects/Cloud Solutions Experts/Project Managers who have found it increasingly 
            more difficult to bid jobs knowing they will be out and underbid by tens of thousands of people who struggle to communicate-collaborate with US Clients.
          </p>
          <h2><u>My Pledge</u></h2>
          <p> I will make freelancing profitable again for both professionals and clients by having stricter requirements to become
            a member. As well as vet prospective top-tier clients to eliminate scam job postings, scammers trying to fake their success rate
            by paying themselves to get a higher rating. Every Top-Tier Talent we interview will be personal. We will allow for proving your skills
            by using out Better Work Badge Program that will have an expert team vetting you to ensure we only recommend talent based on actual skills.
          </p>
        </div>
        
        <div className="values-section">
          <h2><u>Values</u></h2>
          <ul>
            <li><strong>Quality:</strong> We value quality work and ensure that our platform provides the best talent.</li>
            <li><strong>Talent:</strong> To all of the extremely qualified freelancers who want to thrive without offshore interference</li>
            <li><strong>Clients:</strong> A guarantee of top talent with everyone on this platform residing in the United State of America</li>
            <li><strong>Trust:</strong> We believe in building strong relationships based on trust and transparency.</li>
            <li><strong>Growth:</strong> We are committed to helping our users grow professionally and achieve their goals.</li>
            <li><strong>Community:</strong> We strive to create a vibrant community where everyone can succeed.</li>
            <li><strong>Opportunity:</strong>Commited to bringing quality jobs back to the United States</li>
            <li><strong>Vetting:</strong>All of our freelancers will be vetted using cutting edge verification systems</li>
          </ul>
        </div>
        
        <div className="team-section">
          <h2><u>Meet Our Team</u></h2>
          <p>
            Our team consists of experienced professionals passionate about connecting talent with opportunities.
            We have engineers, designers, project managers, and more who work behind the scenes to make BetterWork
            a thriving community.
          </p>
        </div>
        <div className="ceo-section">
            <h2>CEO</h2>
            <h3>
              <a href="https://www.linkedin.com/in/bret-bickham/" target="_blank" rel="noopener noreferrer">Bret Bickham</a>
            </h3>
            <p><strong>Email:</strong>bretbickham@gmail.com</p>
            <br/>
            <h2>CFO</h2>
            <h3>
              <a href="https://www.linkedin.com/in/michael-collins-8510bbb1/" target="_blank" rel="noopener noreferrer">Michael Collins</a>
            </h3>
            <br/>
            <h2>CTO</h2>
            <h3>Uzair Muneer</h3>
            <br/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

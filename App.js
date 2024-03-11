import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
function App() {
  const villageData = [
    { sNo: 1, villageName: 'Village A', startDate: '2022-01-01', endDate: '2022-01-10' },
    { sNo: 2, villageName: 'Village B', startDate: '2022-02-05', endDate: '2022-02-15' },
    { sNo: 3, villageName: 'Village C', startDate: '2022-03-10', endDate: '2022-03-20' },
    { sNo: 1, villageName: 'Village A', startDate: '2022-01-01', endDate: '2022-01-10' },
    { sNo: 2, villageName: 'Village B', startDate: '2022-02-05', endDate: '2022-02-15' },
    { sNo: 3, villageName: 'Village C', startDate: '2022-03-10', endDate: '2022-03-20' },
    { sNo: 1, villageName: 'Village A', startDate: '2022-01-01', endDate: '2022-01-10' },
    { sNo: 2, villageName: 'Village B', startDate: '2022-02-05', endDate: '2022-02-15' },
    { sNo: 3, villageName: 'Village C', startDate: '2022-03-10', endDate: '2022-03-20' },
    { sNo: 1, villageName: 'Village A', startDate: '2022-01-01', endDate: '2022-01-10' },
    { sNo: 2, villageName: 'Village B', startDate: '2022-02-05', endDate: '2022-02-15' },
    { sNo: 3, villageName: 'Village C', startDate: '2022-03-10', endDate: '2022-03-20' },
    { sNo: 1, villageName: 'Village A', startDate: '2022-01-01', endDate: '2022-01-10' },
    { sNo: 2, villageName: 'Village B', startDate: '2022-02-05', endDate: '2022-02-15' },
    { sNo: 3, villageName: 'Village C', startDate: '2022-03-10', endDate: '2022-03-20' },
    // Add more data as needed
  ];
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="data:image/png;base64,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" alt="Your Logo" />
        </div>
        <center><h1>CATTLE CAMPS</h1></center>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Timeline">Timelines</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </header>
      <section className="main-content">
        <div id="home">
          
          <p><img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/56/70/72579ee528b9227.jpg" alt="Your Picture" className="main-picture" height="100px" width="2000px" /></p>
        </div>
        <div id="about">
          <h2>&nbsp; &nbsp; About US</h2>
          <p>&nbsp; &nbsp;Stay informed about upcoming cattle camps with our regularly updated schedules. We provide accurate and timely information on when and where these camps will be held, allowing you to plan accordingly.
          Our user-friendly platform is designed for ease of use. Quickly find the information you need about cattle camp dates and locations without any hassle.
          Our Commitment.We believe that by centralizing this information, we empower individuals, farmers, and stakeholders with the knowledge necessary to make informed decisions regarding their livestock and community involvement.Join us in building a community that values transparency and collaboration. Explore the wealth of information available on [Your Project Name] and connect with fellow participants.
          </p>
        </div>
        <div id="Timeline">
        <h1>Timelines</h1>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Village Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {villageData.map((data) => (
              <tr key={data.sNo}>
                <td>{data.sNo}</td>
                <td>{data.villageName}</td>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        <div id="faq">
          <h2>&nbsp; &nbsp;FAQ</h2>
          <p>&nbsp; &nbsp;
    <br></br>
1. <b>What is a cattle camp, and why does the government organize them?</b><br/>
    A cattle camp is a government-sponsored initiative aimed at providing support and resources to livestock owners and farmers. These camps serve various purposes, such as health check-ups, vaccinations, and distribution of essential supplies for cattle.
<br/>
2. <b>How can I find information about upcoming cattle camps in my area?</b><br/>
    You can easily find details about upcoming cattle camps on our platform. Navigate to the "Events" or "Schedule" section to access information about dates, locations, and participating government agencies.
<br/>
3. <b>Are the cattle camps free to attend?</b><br/>
    Yes, government-sponsored cattle camps are typically free for participants. The government covers the costs associated with veterinary services, vaccinations, and other essential provisions.
<br/>
4. <b>Can I register for a cattle camp online?</b><br/>
    While registration processes may vary, some camps allow online registration through our platform. Check the specific event details for registration instructions.
<br/>
5. <b>How can I contribute information about a cattle camp I attended?</b><br/>
    We welcome user contributions! You can share your experience, photos, or any additional information about a cattle camp by contacting our support team or using the provided submission forms on the platform.
<br/>
6. <b>What types of services are offered at cattle camps?</b><br/>
    Cattle camps typically provide a range of services, including health check-ups, vaccinations, distribution of fodder and medicines, and expert guidance on livestock management.
<br/>
7. <b>Can I access historical data on past cattle camps?</b><br/>
    Yes, our platform includes comprehensive reports on previous cattle camps. You can explore historical data to understand the impact of these initiatives on local communities.
<br/>
8. <b>How can I stay updated on changes to cattle camp schedules?</b><br/>
    We recommend checking our platform regularly for real-time updates. Additionally, you can subscribe to our newsletter or follow our social media channels for announcements and alerts.
<br/>
9. <b>Is the information on the platform verified?</b><br/>
    Yes, we strive to provide accurate and verified information. Our team works closely with government agencies and other reliable sources to ensure the authenticity of the data presented on our platform.
<br/>
10. <b>How can I get in touch with the organizers or government agencies involved in cattle camps?</b><br/>
     Contact information for relevant government agencies or organizers is usually provided on our platform. You can reach out to them directly for specific inquiries or assistance.
<br/>
Feel free to customize these FAQs based on the unique features and details of your cattle camp project.</p>
        </div>
             
            </section>
            <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        </div>
        <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
        
      </footer>
    </div>
  );
}

export default App;

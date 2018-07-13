import React, { Component } from 'react';
import './aboutus.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class AboutUs extends Component {

  render() {

    return (
    	<div>
    	   <Navigation />
        <div className = "container _align">
        	<div className = "_about">About Us</div>
            <div className = "_aboutus" >
		        <p>Ignitus (A Non-Profit Organization for the welfare of student community ) that helps students and professionals get handpicked top-quality global research and industrial internships, for free! 
		        The students participate in projects and training programs supervised by our experts.</p>
				<p>Our only goal is- 'Skyrocketing a students' career by providing best global opportunities'.
				The platform has got exponential growth after successful internship completion by the associated students with researchers from SAIL (Stanford AI Lab) and Oxford University.
				</p>
				<p>Ignitus is working with a non-profit (GirlsScript Foundation), Woo-Tech which is committed to bringing together multiple such initiatives for a grand scale open-source project development program for women.
				We are honored to have among us more than admirable leaders in the fight for equal opportunities for women at Woo-Tech and GirlScript India and Program Manager of Systers, LEAN IN INDIA , MIT Media Lab.
				</p>
				<p>Ignitus scholar consists of 200+ applicants who have worked ar Deep Learning Divison Mercedes-Benz, Harvard Innovation Labs, UC Berekely etc.
				Ignitus is made with love from Students, Researchers of Stanford, MIT, Princeton, Georgia Tech, SUNY, Harvard, Oxford, UCB, UCLA, USC etc.
				</p>
				<p>Team Ignitus boasts of a dedicated workforce from Boston, Miami, Pittsburgh, Madrid, Houston, Munich, Princeton, Los Angeles, Vancouver and different parts of India
				</p>
			</div> 
        </div>
           <Footer />  
        </div> 
    )
  }
}

export default AboutUs;
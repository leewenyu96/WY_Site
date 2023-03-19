import logo from './logo.svg';
import './App.css';
import profile from './profile.png';
import * as Icon from 'react-bootstrap-icons';

import python_icon from './python.png';
import science_icon from './science.png';
import jenkins_icon from './jenkins.png';
import gitlab_icon from './gitlab.png';
import tensorflow_icon from './tensorflow.png';
import sql_icon from './sql-server.png';
import echarts_icon from './echarts.png';
import azure_icon from './azure.png';
import nus_icon from './nus.png';
import certificate_icon from './certificate.png';


function App() {

  const technology_objs = [
    {icon: python_icon, url: 'https://react.dev/'},
    {icon: science_icon, url: 'https://www.python.org/' },
    {icon: jenkins_icon, url: 'https://www.jenkins.io/'},
    {icon: gitlab_icon, url: 'https://about.gitlab.com/' },
    {icon: tensorflow_icon, url: 'https://www.tensorflow.org/' },
    {icon: sql_icon, url: 'https://www.mysql.com/'},
    {icon: echarts_icon, url: 'https://echarts.apache.org/en/index.html' },
  ] 

  const technology = technology_objs.map((item) =>
    <a href={item.url}>
      <img className='icon m-2' src={item.icon}></img>
    </a>
  );

  const Mailto = ({ email, subject, body, children, className }) => {
    return (
      <a className= 'link' href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

  return (
    <div className="App">
      <head>
        <title>Lee Wen Yu Website</title>
        <link rel="icon" type="image/png" href={profile}></link>
      </head>
      <body>
        <nav className={'navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'}>
          <div className='container'>
            <a href="#" className='navbar-brand'>Lee Wen Yu</a>
            <button 
              className='navbar-toggler'  
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className='navbar-toggler-icon'></span>  
            </button>
            <div className='collapse navbar-collapse' id='navmenu'>
              <ul className='navbar-nav ms-auto'> 
              {/* ms- auto adds space from the left side of the div and ms stands for margin-start. */}
                <li className='nav-item'>
                  <a className='nav-link'><Mailto email="leewenyu96@gmail.com">Contact</Mailto></a>
                </li>
                <li className='nav-item'>
                  <a href='https://www.linkedin.com/in/wen-yu-lee-625aa2194/' className='nav-link'>Linkedin</a>
                </li>
                <li className='nav-item'>
                  <a href='https://github.com/leewenyu96/' className='nav-link'>Github</a>
                </li>
              </ul>
            </div>  
          </div>
        </nav>

        {/* New Section */}
        {/* px is padding on left and right, p is all around */}
        <section className='bg-light text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
          <div className='container'>
            {/* using flexbox with d-sm-flex to change to a row in smaller screens*/}
            <div className='d-sm-flex align-items-center justify-content-between'>
              <div>
                <h1 className='text-dark'>Hi. I'm <span className="text-warning">
                    Wen Yu.
                </span></h1>
                <p className="lead my-4 text-dark">
                  I work with large datasets to draw insights, produce visualisations and
                  build models for prescriptive & predictive analytics. 
                  <p className='mt-3'>
                    <strong>I'm familiar with: </strong>
                    <div className='mt-1'>
                      {technology}
                    </div>
                  </p>
                </p>
              </div>
                {/* use image fluid to bound image in container w-50 changes the half the size to 50% */}
                {/* d-none shows nothing, d-sm-block dont show image in smaller screens */}
                <img className='img-fluid w-50 d-none d-sm-block rounded mb-5' src={profile} alt=""></img> 
            </div>
          </div>
        </section>
        <section id='learn' className='p-5 bg-dark'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            {/* <div className='col-md'>
                <img src={logo}></img>
            </div> */}
            <div className='col-md p-5 text-light'>
              <h2 className='mb-5'>Professional Work Experience:</h2>
              <h4 className='mb-3 text-warning'>
                Land Transport Authority: 
                <span className='text-light fst-italic fs-4'> Data and Analytics Engineer</span>
                <p className='text-light fs-6'> May 2022 - Present</p>
              </h4>
              <p className='mb-5'>
              <p>• New model development for time-series anomaly detection and Natural Language Processing on 
              unstructured text data with python. Improving weighted F1 score from 0.1 to 0.66. </p>
              <p>• Frontend data visualisation development with React and Apache Echarts to achieve OPEX cost savings. </p>
              <p>• Liaise with the stakeholders for User Requirements and Software Design Specifications.</p>
              <p>• Carry out User Acceptance Test (UAT) and retraining of data analytic models, ensuring that models 
              meet performance benchmarks.</p>
              <p>• Familiar with Jenkins, Gitlab, Jira, and Agile software development environment.</p>
              </p>
              <h4 className='mb-3 text-warning'>
                Lam Research:
                <span className='text-light fst-italic fs-4'> Field Service Engineer</span>
                <p className='text-light fs-6'> May 2021 - May 2022</p>
              </h4>
              <p className='mb-5'>
              <p>• Statistical analysis of customer datasets to resolve issues related to yield loss using JMP. Increased 
              yield by 20% by reducing schedule downtime. </p>
              <p>• Usage of DOE and FMEA to identify failure modes and design experiments to validate hypothesis.</p>
              <p>• Work closely with equipment Intelligence and data scientist team to drive industry 4.0 initiatives. </p>
              <p>• Hands-on experience by providing quality installation and troubleshooting. </p>

              </p>
            </div>
          </div>
        </div>
      </section> 
        <section id='learn' className='p-5 bg-light'>
          <div className='container'>
            <div className='row align-items-center justify-content-between'>
            {/* <div className='col-md'>
                <img src={logo}></img>
              </div> */}
              <div className='col-md p-5 text-dark'>
              <h2 className='mb-5'>Past Projects:</h2>
                <h4 className='mb-3 text-primary'>
                  Final Year Project: 
                  <span className='text-dark fst-italic fs-4'> Feature Selection & Synthetic Minority Oversampling for Large Imbalanced Datasets</span>
                  <p className='text-dark fs-6'> Aug 2020 - Apr 2021</p>
                </h4>
                <p>
                Machine learning algorithms assumes that datasets are balanced during classification. With 
                imbalanced datasets and a large number of features, a simple machine learning model will not 
                lead to accurate class classification.
                This study aims to implement a combination of feature selection and handling imbalanced data 
                methods for accurate class classification. 
                </p>
                <p>Supervising Professor: Lu Wen Feng</p>
                <a href='https://drive.google.com/file/d/1UYn1iJgfki8FNmiSdqbVn423v300_mHP/view?usp=sharing'className='btn btn-primary mb-5 mt-3'> <Icon.ChevronRight/>Read more</a>

                <h4 className='mb-3 text-primary'>
                  Independent Study:
                  <span className='text-dark fst-italic fs-4'> Agglomerative Hierarchical K-means Clustering Algorithm for Grouping </span>
                  <p className='text-dark fs-6'> May 2020 - Aug 2020</p>
                </h4>
                <p>
                This independent study aims to find the optimum manufacturing shopfloor layout. 
                The group of similar parts is known as part family and the group of machineries used to process an individual part family is known as machine cell. 
                It is not necessary for each part of a part family to be processed by every machine of corresponding machine cell. 
                An optimum layout can reduce production cycle time. This study aims to find the best algorithm to group part families.
                An Agglomerative K-means Hierarchical clustering method is compared with traditional algorithms.
                </p>
                <p>Supervising Professor: Woon Keng Soon</p>

                <a href='https://drive.google.com/file/d/1yUNbrB_BpQ0bzDD5prSv5GAwoLtj6nG6/view?usp=sharing'className='btn btn-primary mb-5 mt-3'> <Icon.ChevronRight/>Read more</a>
                
                <h4 className='mb-3 text-primary'>
                  Gameboy Game in 
                  <span className='text-dark fst-italic fs-4'> C and Assembly </span>
                  <p className='text-dark fs-6'> </p>
                </h4>
                <p>
                  Designed a game with C programming which runs in Visual Boy Advance
                </p>
                <p></p>

                <a href='https://github.com/leewenyu96/GBA_game' className='btn btn-primary mb-5 mt-3'> <Icon.ChevronRight/>Find out more</a>
              </div>

            </div>
          </div>
        </section> 

        <section id='learn' className='p-5 bg-dark'>
          <div className='container'>
            <div className='d-sm-flex align-items-center justify-content-between'>
              <div className='col-md p-5 text-light'>
                <h2 className='mb-5'>Certifications:</h2>
                <h4 className='mb-3 text-warning'>
                  <a className="text-warning" href="https://credentials.nus.edu.sg/abc3d9cf-ef97-42b6-86f1-d5d0c2c08dd6">
                    Deep Learning and Applications  <img className='icon_3 m-2' src={nus_icon}></img>
                  </a>
                </h4>
                <h4 className='mb-3 text-warning'>
                  <a className="text-warning" href="https://www.credly.com/badges/55f29257-3bf8-4e91-a9ae-4d13a6b7c846/public_url">
                    Microsoft Azure Fundamentals   <img className='icon_2 m-2' src={azure_icon}></img>
                  </a>
                </h4>
              </div>
              <img className='w-25' src={certificate_icon}></img>
            </div>
          </div>
        </section> 

        {/* Footer */}
        <footer className='p-5 bg-dark text-white text-center fixed-bottom'>
          <div className='container'>

          </div>
        </footer>

      </body>
    </div>
  );
}

export default App;

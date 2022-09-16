import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import AIAutomation from './pages/AIAutomation';
import AmazonEKS from './pages/AmazonEKS';
import AmazonQuickSight from './pages/AmazonQuickSight';
import AmazonRelationalDatabaseService from './pages/AmazonRelationalDatabaseService';
import ApplicationModernization from './pages/ApplicationModernization';
import Automative from './pages/Automative';
import AwsControlTower from './pages/AwsControlTower' ;
import AwsElemental from './pages/AwsElemental';
import BFSI from './pages/BFSI';
import BigDataAnalysis from './pages/BigDataAnalysis';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import BPO from './pages/BPO';
import BusinessIntelligence from './pages/BusinessIntelligence';
import CapitalMarket from './pages/CapitalMarket';
import Chemical from './pages/Chemical';
import ComputerVision from './pages/ComputerVision';
import ConsumerGoods from './pages/ConsumerGoods';
import CsAi from './pages/CsAi';
import DataEngineeringAnalytics from './pages/DataEngineeringAndAnalytics';
import DeepLearning from './pages/DeepLearning';
import Dental from './pages/Dental';
import Devops from './pages/Devops';
import DistributedComputing from './pages/DistributedComputing';
import Energy from './pages/Energy';
import Health from './pages/Health';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import MachineLearning from './pages/MachineLearning';
import MathematicalModellingOptimization from './pages/MathematicalModellingOptimization';
import MediaEntertainment from './pages/MediaEntertainment';
import MicrosoftOnAws from './pages/MicrosoftOnAws';
import Migration from './pages/Migration';
import NaturalLanguageProcessing from './pages/NaturalLanguageProcessing';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import OilAndGas from './pages/OilAndGas';
import Retail from './pages/Retail';
import ScripticsAIGaming from './pages/ScripticsAIGaming';
import SignalProcessing from './pages/SignalProcessing';
import StatisticalDataAnalysis from './pages/StatisticalDataAnalysis'
import ThinkboxStudio from './pages/ThinkboxStudio';
import WearableComputing from './pages/WearableComputing';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-204814637-2');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div className="App">
      <Router>
        <Header/>
          <Helmet>
            <title>Scriptics Technologies</title>
            <meta name="description" content="Scriptics Technologies is a software and IT services company serving clients in Canada, the US, UK, UAE."/>
            <meta name="keywords" content="software company in india, Scriptics Technologies, IT Company"/>
          </Helmet>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/ai_automation' component={AIAutomation} />
            <Route exact path='/amazon_elastic_kubernetes_service' component={AmazonEKS} />
            <Route exact path='/amazon_quicksight' component={AmazonQuickSight} />
            <Route exact path='/amazon_relational_database_service' component={AmazonRelationalDatabaseService} />
            <Route exact path='/application_modernization' component={ApplicationModernization} />
            <Route exact path='/industry_automative' component={Automative} />
            <Route exact path='/aws_control_tower' component={AwsControlTower} />
            <Route exact path='/aws_elemental' component={AwsElemental} />
            <Route exact path='/industry_bfsi' component={BFSI} />
            <Route exact path='/big_data_analysis' component={BigDataAnalysis} />
            <Route exact path='/case-studies' component={Blog}/>
            <Route exact path='/case-study/:id' component={BlogPage} />
            <Route exact path='/case_study_bpo' component={BPO} />
            <Route exact path='/business_intelligence' component={BusinessIntelligence} />
            <Route exact path='/industry_capital_market' component={CapitalMarket} />
            <Route exact path='/industry_checmical' component={Chemical} />
            <Route exact path='/computer_vision' component={ComputerVision} />
            <Route exact path='/industry_consumer_goods' component={ConsumerGoods} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/case_study_automation' component={CsAi} />
            <Route exact path='/data_engineering_and_analytics' component={DataEngineeringAnalytics} />
            <Route exact path='/deep_learning' component={DeepLearning} />
            <Route exact path='/industry_dental' component={Dental} />
            <Route exact path='/devops' component={Devops} />
            <Route exact path='/distributed_computing' component={DistributedComputing} />
            <Route exact path='/industry_energy' component={Energy} />
            <Route exact path='/industry_health' component={Health} />
            <Route exact path='/industry_insurance' component={Insurance} />
            <Route exact path='/machine_learning' component={MachineLearning} />
            <Route exact path='/mathematical_modelling_optimization' component={MathematicalModellingOptimization} />
            <Route exact path='/industry_media_entertainment' component={MediaEntertainment} />
            <Route exact path='/microsoft_on_aws' component={MicrosoftOnAws} />
            <Route exact path='/migration' component={Migration} />
            <Route exact path='/natural_language_processing' component={NaturalLanguageProcessing} />
            <Route exact path='/industry_retail' component={Retail} />
            <Route exact path='/industry_oil_and_gas' component={OilAndGas} />
            <Route exact path='/scriptics_ai_gaming' component={ScripticsAIGaming} />
            <Route exact path='/signal_processing' component={SignalProcessing} />
            <Route exact path='/statistical_data_analysis' component={StatisticalDataAnalysis} />
            <Route exact path='/thinkbox_studio' component={ThinkboxStudio} />
            <Route exact path='/wearable_computing' component={WearableComputing} />
            <Route component={Page404} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;

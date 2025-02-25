import 'bootstrap/dist/css/bootstrap.css';
import SelectorZona from './components/SelectorZona';
import Nav from './components/nav';
import Footer from './components/footer';
import "../app/page.module.css";

export default function Home() {
  return (
    <div id='container' className='d-flex flex-column min-vh-100 bg-primary-subtle'>
      <Nav />
      <SelectorZona />
        <div className='flex-grow-1'>
        </div>
        <Footer />
    </div>
  );
}

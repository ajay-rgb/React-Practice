
import Header from './Header';
import Footer from './Footer';
import Sidebar from'./Sidebar';
import CreateHabit from './CreateHabit';
import './Layout.css';

function Layout(){
    return(
        <div className='layout'>

            <Header/>
            <Sidebar/>
            <CreateHabit/>
            <Footer/>
        </div>
    );
}


export default Layout;
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';
import ResponsiveAppBar from './Navbar';

function Layout(props) {
  return (
    <div>

      <MainNavigation />
      <ResponsiveAppBar />
        <main className={classes.main}>{props.children}</main>
      <Footer/>          
    </div>
  );
}

export default Layout;

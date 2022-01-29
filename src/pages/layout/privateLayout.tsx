import React, {FC} from 'react';
import {RouteComponentProps,} from 'react-router-dom';
import Header from "../../components/Header";
import Footer from "../../components/footer/Footer";

interface IPrivateLayout extends RouteComponentProps<any> {
  header: boolean,
  footer: boolean,
  wrapperClassName: string,
  title: string,
  backLink: string,
  fetchSuccessUCode: any,
  filterButton?: string,
  menuButton: string,
}

const PrivateLayout: FC<IPrivateLayout> = (
  {
    title, children, footer, header
  }
) => {

  return (
    <div>
      {header && <Header title={title}/>}
      {children}
      {footer && <Footer/>}
    </div>
  );
}
export default PrivateLayout

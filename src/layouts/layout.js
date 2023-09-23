import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-grotesque', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Contact
            additionalClass={['my-5']}
            formHeaderText="Connect with us"
            nameInputLabel="Name"
            emailInputLabel="Email"
            messageInputLabel="Message"
            buttonLabel="Send"
            phoneNumber="+123 456 789"
            address="Demo Street"
            emailAddress="hello@world.com"
        />
        <Footer />
    </main>
);

export default Layout;

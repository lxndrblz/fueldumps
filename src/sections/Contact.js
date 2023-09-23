import React from 'react';
import { Button, Header } from 'flotiq-components-react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const instagramSvgContent = 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.90'
    + '2 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 '
    + '1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0'
    + ' 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-'
    + '4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-'
    + '1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379'
    + '-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-'
    + '1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h'
    + '.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.3'
    + '98-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.'
    + '807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.'
    + '683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.'
    + '96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.'
    + '353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.'
    + '207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-'
    + '1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 01'
    + '0-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.'
    + '4 1.2 1.2 0 010-2.4z';


const socialIcons = {
    social: [
        {
            name: 'E-Mail',
            href: 'mailto:mail@fueldumps.com',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

const Contact = ({
    additionalClass,
    formHeaderText,
    nameInputLabel,
    emailInputLabel,
    messageInputLabel,
    buttonLabel,
}) => {
    const data = useStaticQuery(query);
    return (
        <div className={['flex flex-wrap max-w-7xl mx-auto '
            + 'py-1 md:py-6 px-4 sm:px-6 lg:px-8', ...additionalClass].join(' ')}
        >
            <div className="basis-full lg:basis-1/2 flex flex-col items-start
        justify-between order-2 lg:order-1 md:mt-10 lg:mt-0"
            >
                <StaticImage
                    src="../assets/planty-logo.svg"
                    className={['hidden md:block h-10 md:h-16 w-auto']}
                    alt="Planty logo"
                    width={160}
                    height={64}
                    placeholder="none"
                />
                <div className="w-full md:w-auto flex justify-center mt-10 lg:mt-0">
                    <div className="hidden md:block flex flex-col space-y-1">
                        {socialIcons.social.map((item) => (
                            <a className="flex items-center space-x-7" key={item.name} href={item.href}>
                                <span
                                    key={item.name}
                                    className="text-gray p-2 bg-light-gray"
                                >
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <p className="text-xl font-light">{item.name}</p>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-1 md:pl-24">
                    </div>
                </div>
                <div className="w-full md:hidden flex items-center justify-between mt-10">
                    <StaticImage
                        src="../assets/planty-logo.svg"
                        className={['h-10 md:h-16 w-auto']}
                        alt="Planty logo"
                        width={100}
                        height={40}
                        placeholder="none"
                    />
                    <div className="flex space-x-6">
                        {socialIcons.social.map((item) => (
                            <div className="flex items-center" key={item.name}>
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray p-2"
                                >
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="basis-full lg:basis-1/2 flex flex-wrap order-1 lg:order-2">
                <div
                    className="basis-full md:basis-1/2 order-2 md:order-1"
                >
                    <GatsbyImage
                        image={getImage(data.file)}
                        className="block basis-1/2 w-auto h-full"
                        alt="Connect with us"
                        objectFit="cover"
                    />
                </div>
                <div className="basis-full md:basis-1/2 bg-light-gray py-5 px-7 order-1 md:order-2">
                    <Header additionalClasses={['!font-light !text-4xl !p-0 mb-5']}>
                        {formHeaderText}
                    </Header>
                    <form
                        action="#"
                        method="POST"
                        className="font-sora font-light flex flex-col space-y-2 basis-full md:basis-1/2 lg:basis-7/12"
                    >
                        <div>
                            <label htmlFor="full-name" className="sr-only">
                                {nameInputLabel}
                            </label>
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="name"
                                className="block w-full py-3 px-4 placeholder-primary/50
                            placeholder:font-light placeholder:text-lg border-0"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                {emailInputLabel}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full py-3 px-4 placeholder-primary/50
                            placeholder:font-light placeholder:text-lg border-0"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                {messageInputLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={2}
                                className="block w-full py-3 px-4 placeholder-primary/50
                            placeholder:font-light placeholder:text-lg border-0"
                                placeholder="Message"
                            />
                        </div>
                        <Button
                            label={buttonLabel}
                            rounded="none"
                            additionalClasses={['text-xl font-light text-white bg-secondary w-full justify-center']}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

const query = graphql`
    query contactQuery {
        file(name: {eq: "contact-form-image"}) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
        }
    }
`;

export default Contact;

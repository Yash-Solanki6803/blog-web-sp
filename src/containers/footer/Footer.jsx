import Link from "next/link";
import Image from "next/image";
import {
  icon_fb,
  icon_instagram,
  icon_twitter,
  icon_youtube,
  icon_mail,
  icon_location,
  icon_phone,
} from "@/../public/icons";
import VectorComponent from "../../components/vector/Vector";
import ContactForm from "../../components/contactForm/ContactForm";

const social = {
  instagram: {
    link: "#",
    img: icon_instagram,
  },
  facebook: {
    link: "#",
    img: icon_fb,
  },
  twitter: {
    link: "#",
    img: icon_twitter,
  },
  youtube: {
    link: "#",
    img: icon_youtube,
  },
};

const contact = {
  mail: "hello@website.com",
  location: "Gujarat,India",
  phone: "+91 1234567890",
};

function Footer() {
  return (
    <section
      id="contact"
      className=" flex 2xl:flex-row flex-col gap-4 min-h-[50vh] mt-20 py-10 relative overflow-hidden"
    >
      {/* social and quick links */}
      <div className="  2xl:w-2/5  flex sm:flex-row sm:justify-between flex-col">
        <div className=" 2xl:w-3/5 h-full  flex  flex-col">
          <div className="text-4xl font-semibold ">
            Cyber <span className="text-brand_primary">Shakha</span>
          </div>
          <p className="mt-2 w-3/4">Your trusted ally in the digital realm.</p>

          {/* social media links */}
          <nav className="w-full 2xl:mt-10 mt-4 flex gap-4">
            <Link
              href={social.instagram.link}
              className=" rounded-2xl p-2 w-10 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                className="object-contain w-6 h-auto"
                src={social.instagram.img}
                alt="instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={social.facebook.link}
              className="object-cover rounded-2xl p-2 w-8 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                className="object-contain w-6 h-auto"
                src={social.facebook.img}
                alt="facebook"
                width={11}
                height={20}
              />
            </Link>
            <Link
              href={social.twitter.link}
              className=" rounded-2xl p-2  w-10 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                className="object-contain w-6 h-auto"
                src={social.twitter.img}
                alt="twitter"
                width={20}
                height="auto"
              />
            </Link>
            <Link
              href={social.youtube.link}
              className=" rounded-2xl p-2  w-10 h-10  flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                className="object-contain w-6 h-auto"
                src={social.youtube.img}
                alt="youtube"
                width={20}
                height={20}
              />
            </Link>
          </nav>
        </div>

        {/* quick links */}
        <div className=" w-2/5 sm:mt-0  mt-8 h-full 2xl:text-left sm:text-right">
          <h4 className="text-2xl">Quick Links</h4>
          <nav className="flex flex-col gap-4 mt-10">
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/about"
            >
              About us
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/posts"
            >
              Blogs
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/privacypolicy"
            >
              Privacy Policy
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/termsofservice"
            >
              Terms of Service
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/disclaimer"
            >
              Website Disclaimer
            </Link>
          </nav>
        </div>
      </div>

      {/* contact section */}
      <div className="  2xl:w-3/5 h-full  flex 2xl:flex-row flex-col">
        <div className=" 2xl:w-2/5 2xl:mt-0 mt-10 flex sm:justify-between 2xl:justify-start 2xl:flex-col sm:flex-row flex-col">
          <h4 className=" text-2xl">Contact us</h4>
          <article className="flex flex-col gap-4 2xl:mt-10 sm:mt-0 mt-10">
            <div className="flex  2xl:flex-row sm:flex-row-reverse gap-4">
              <Image
                className="object-contain w-6 h-auto"
                src={icon_mail}
                alt="mail"
                width={20}
                height={20}
              />
              <p>{contact.mail}</p>
            </div>
            <div className="flex  2xl:flex-row sm:flex-row-reverse gap-4">
              <Image
                className="object-contain w-6 h-auto"
                src={icon_location}
                alt="location"
                width={20}
                height={20}
              />
              <p>{contact.location}</p>
            </div>
            <div className="flex  2xl:flex-row sm:flex-row-reverse gap-4">
              <Image
                className="object-contain w-6 h-auto"
                src={icon_phone}
                alt="phone"
                width={20}
                height={20}
              />
              <p>{contact.phone}</p>
            </div>
          </article>
        </div>
        <div className="2xl:w-3/5 2xl:mt-0 mt-10">
          <ContactForm />
        </div>
      </div>
      <VectorComponent
        size={4}
        className="rotate-90 left-1/3 -bottom-[300px]"
      />
    </section>
  );
}

export default Footer;

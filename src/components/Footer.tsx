import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-white mt-10">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 justify-between lg:grid-cols-3 gap-8">
                {/* logo + social */}
                <div className="">
                    <h2 className="text-3xl font-bold mb-4">Business Logo</h2>
                    <div className="flex space-x-4 text-gray-600">
                        <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
                        <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
                        <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
                        <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
                    </div>
                </div>

                <div className="md:flex space-y-8 md:space-x-8">
                    {/* our services */}
                    <div className="w-1/3">
                        <h3 className="text-lg font-semibold mb-3">Our Services</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#">Plumbing</a></li>
                            <li><a href="#">Drainage</a></li>
                            <li><a href="#">Bathrooms</a></li>
                            <li><a href="#">Commercial</a></li>
                        </ul>
                    </div>

                    {/* useful links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
                        <ul className="space-y-2 text-gray-600 grid gap-3 space-x-10 md:grid-cols-2">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Updates</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Rates</a></li>
                            <li><a href="#">Customer Services</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>

                {/* contact info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                            <MdLocationOn className="text-xl mr-2" />
                            <span>1 Sail Street, London, SE11 6NQ</span>
                        </li>
                        <li className="flex items-center">
                            <MdEmail className="text-xl mr-2" />
                            <a href="mailto:enquiries@PlumbingPros.com">enquiries@PlumbingPros.com</a>
                        </li>
                        <li className="flex items-center">
                            <MdPhone className="text-xl mr-2" />
                            <a href="tel:02045276474">020 4527 6474</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* bottom bar */}
            <div className=" my-[20px] md:my-[40px] lg:my-[60px]">
                <div className="container mx-auto px-6 py-4 flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between text-sm text-gray-500">
                    <p>© Plumbing Pros. All Rights Reserved</p>
                    <p>
                        Website by <a href="#" className="hover:underline">IH Adventure And Creative</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

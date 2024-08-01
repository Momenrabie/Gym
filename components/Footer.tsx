"use client";
import Image from "next/image";
import Link from "next/link";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import img1 from "@/public/assets/assets/img/logo.png";

import img2 from "@/public/assets/assets/img/trainers/david.jpg";
import img3 from "@/public/assets/assets/img/trainers/matt.jpg";
import img4 from "@/public/assets/assets/img/trainers/rosy.jpg";
import img5 from "@/public/assets/assets/img/trainers/sofia.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image src={img1} width={117} height={55} alt="" />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, fuga!
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago , Egypt</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(02) 010 391 3131</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <span>memo@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div className="">
            <h4 className="h4 text-accent mb-4"> Recent blog posts</h4>
            <div
              className="border-b border-dotted border-gray-400 flex flex-col 
           gap-3 pb-3 mb-4"
            >
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </div>

          {/* gallery */}
          <div className="">
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image src={img2} width={100} height={100} alt="" />
              </Link>
              <Link href="#">
                <Image src={img3} width={100} height={100} alt="" />
              </Link>
              <Link href="#">
                <Image src={img4} width={100} height={100} alt="" />
              </Link>
              <Link href="#">
                <Image src={img5} width={100} height={100} alt="" />
              </Link>
              <Link href="#">
                <Image src={img3} width={100} height={100} alt="" />
              </Link>
              <Link href="#">
                <Image src={img4} width={100} height={100} alt="" />
              </Link>
            </div>
          </div>

          {/* newsletter */}
          <div>
            <h4 className="h4 text-accent mb-4"> Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia consequat
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="
                h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="Send"/>
              </form>
            </div>
          </div>
        </div>

      </div>
      <div className="text-white border-t border-white/20 py-12 text-center">
        <div className="container mx-auto h-full">
          <div>
            <span >&copy; copyright 2024 Memo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

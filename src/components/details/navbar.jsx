import React from 'react';
import {RightArrowSvg} from "../../svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({name,tag,img,price,percentage}) {
    return (
        <>
            <nav className="navbar_container">
                <div className="navbar_left">
                    <Link href="/crypto-list">
                        <RightArrowSvg className="navbar_back"/>
                    </Link>
                    <div className="navbar_left_stuff_container">
                        <div className="navbar_left_img_container">
                            <Image src={img} alt={tag}/>
                        </div>
                        <div className="navbar_left_text_container">
                            <h4 className="navbar_left_name">
                                {name}
                            </h4>
                            <h6 className="navbar_left_tag">
                                {tag}
                            </h6>
                        </div>

                    </div>
                </div>
                <div className="navbar_right">
                    <h4 className="navbar_right_price">
                        {price}
                    </h4>
                    <h5 className="navbar_right_percentage">
                        {percentage}
                    </h5>
                </div>
            </nav>
        </>
    )
}
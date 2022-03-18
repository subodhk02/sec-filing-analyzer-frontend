import Image from "next/image";
import React from "react";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";

function NewsSection({ heading, body }) {
    return (
        <div
            className="w-full border-grey-200 mt-3 mb-3"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
            <div className="grid grid-cols-8">
                <div className="col-span-2 md:col-span-1 overflow-hidden relative" style={{ height: "90px" }}>
                    <Image
                        src="https://source.unsplash.com/random"
                        // width={92}
                        layout="fill"
                    />
                </div>
                <div className="col-span-6 md:col-span-7 p-2 cursor-pointer">
                    <p className="text-lg">{heading}</p>
                    <ReadMoreReact min={0} ideal={40} max={100} text={body} />
                </div>
            </div>
        </div>
    );
}

export default NewsSection;

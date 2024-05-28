import Image from 'next/image';
import bg01 from "@/../public/assets/design/arrow@2x_1080.png";
import bg02 from "@/../public/assets/design/back@2x_1080.png";
import border from "@/../public/assets/design/border@2x_1080.png";

export function Background() {
    return (
        <section>
            <div
                className="bg-cover bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg02.src})`,
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: "brightness(80%) grayscale(100%)",
                }}
            >
            </div>
            <div
                className="bg-cover bg-top bg-no-repeat animate-bg2"
                style={{
                    backgroundImage: `url(${bg01.src})`,
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: "brightness(80%)",

                }}
            >
            </div>
            <div
                className="bg-contain bg-repeat bg-top"
                style={{
                    backgroundImage: `url(${border.src})`,
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    filter: "brightness(80%)",

                }}

            >
            </div>
        </section>
    );
}

export default Background;